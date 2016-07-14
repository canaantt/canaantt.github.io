'use strict';

var markers = [];
var city, map, request, service, sidebar, infowindow, vm; 
var weatherAPIKey = "a9cd175d616e821fb23057b4a4407c4e";
    
function ViewModel(){
  var self = this;
  
  self.places = ko.observableArray();
  self.query = ko.observable();
  self.city = ko.observable();
  self.keyword = ko.observable();

  self.filteredPlaces = ko.computed(function() {
    if ( !self.query()) {
        return self.places();
    } else {
      var filter = self.query().toLowerCase();
      return ko.utils.arrayFilter(self.places(), function(place) {
        if( place.name.toLowerCase().indexOf(filter) > -1){
          place.marker.setVisible(true);
          return true;
        } else {
          place.marker.setVisible(false);
          return false;
        } 
      });
      }
    });
  
  
  self.onSubmit = function() 
    {
       var geocoder = new google.maps.Geocoder();
       geocoder.geocode( { 'address': self.city()}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          var latitude = results[0].geometry.location.lat();
          var longitude = results[0].geometry.location.lng();
          //alert(latitude, longitude);
          var latLng = new google.maps.LatLng(latitude, longitude);
           map = new google.maps.Map(document.getElementById('map'), {
                  center: latLng,
                  scrollwheel: true,
                  zoom: 11
                });
          self.getLocationsOfInterest(service, latLng, self.keyword(), 20000);
        } 
      });  
    }

  self.getLocationsOfInterest = function(service, coordinates, keyword = "restaurant", radius) {
       request = {
            location: coordinates,
            radius: radius,
            keyword: [keyword] //should be table to take in input
          };

        /** The 3rd Party API to report regional weather using geocode **/  
        self.weather(coordinates);  

        /** Create the PlaceService and send the request.
         Handle the callback with an anonymous function.
         service = new google.maps.places.PlacesService(map);**/
        self.places().length = 0;
        service.nearbySearch(request, function(results, status) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
                /** If the request succeeds, draw the place location on
                 the map as a marker, and register an event to handle a
                 click on the marker. **/
                
                place.marker = self.drawMarker(map, place);
                self.places.push(place);
              }
           }else{
              alert(status);
           }
        });
    }

  //Mark all the places from API call
  self.drawMarker = function(map, place){
    var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name,
            placeID: place.place_id
            });
    marker.tooltipContent = marker.title;
    
    var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">'+ marker.title+'</h1>'+
          '<div id="bodyContent">'+
          '<p><b>Location: '+ place.vicinity +'</b></p>'+
          '<p><b>Rating: '+ place.rating+'</b></p>';
          

     if(typeof( place.price_level) !== "undefined"){
          contentString = contentString + '<p><b>Price Level: '+place.price_level+'</b></p>';; 
      }    

     if(typeof( place.photos) === "undefined"){
         contentString = contentString + '</div></div>';
      }else{
         contentString = contentString + '<img src="'+place.photos[0].getUrl({'maxWidth': 300, 'maxHeight': 300})+
                            '" alt='+ marker.title+'></div></div>'; 
      }     
      
      marker.openWindow = function(){ 
          infowindow.setContent(contentString);
          infowindow.open(map, marker);
          self.wiki(place.name);
          marker.setAnimation(google.maps.Animation.BOUNCE);
          setTimeout(function(){ marker.setAnimation(null); }, 750)
      }     

      marker.addListener('click', function() {
         this.openWindow();
      });
      
      
      
    
    return marker;
  }

  self.weather = function(coordinates) {
    $("#weather").empty();
    var weatherURL = "http://api.openweathermap.org/data/2.5/weather?"+
                     "lat=" + coordinates.lat() +
                     "&lon=" + coordinates.lng() + "&units=imperial" + 
                     "&APPID=" + weatherAPIKey;
    $.get(weatherURL, function(response){
      console.log(response);
      var city = response.name;
      var weather = response.weather[0];
      var wind = response.wind;
      var main = response.main;
      var weatherContent ='<p>' + "City: " + city + '</p>' +
                          '<p>' + "Temperature: " + main.temp + "F" + '</p>' +
                          '<p>' + main.temp_min + " ~ "+ main.temp_max + "F" + '</p>' +  
                          '<p>' + "Current Weather: " +weather.description + '</p>' +
                          '<p>' + "wind speed: " + wind.speed + " MPH" + '</p>' +
                          '<p>' + "humidity: " + main.humidity + '</p>' +
                          '<p>' + "pressure: " + main.pressure + " inches" + '</p>'
      $("#weather").append(weatherContent);
    })
  }

  self.wiki = function(name){
    var url = "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page="+
              name + "&callback=?";
       
    $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            if(typeof(data.parse) !== "undefined") {
                console.log(data.parse.text["*"]);
                var blurb = $('<div>' + "<h4>Name Search Result from Wikipedia</h4>" + 
                              data.parse.text["*"] + '</div>');
   
                // remove links as they will not work
                blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
     
                // remove any references
                blurb.find('img').remove();
     
                // remove cite error
                blurb.find('.mw-ext-cite-error').remove();
                $("#content").append(blurb);
                //$('#content').html($(blurb).find('p'));
            }
        },
        error: function (errorMessage) {
            var blurb = '<div><h4>Name Search yiels no results from Wikipedia</h4></div>';
            $("#content").append(blurb);
        }
    });

  }

}

function initMap() {

    var defaultCity = new google.maps.LatLng(47.6927623,-122.3387651);

    map = new google.maps.Map(document.getElementById('map'), {
      center: defaultCity,
      scrollwheel: true,
      zoom: 11
    });
    
    infowindow = new google.maps.InfoWindow({
      maxWidth: 350
    });

    service = new google.maps.places.PlacesService(map);
    
    var input = document.getElementById('locInput');
    var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);
    var keywords = [
            "accounting",
            "airport",
            "amusement_park",
            "aquarium","art_gallery","atm","bakery","bank","bar","beauty_salon","bicycle_store",
            "book_store","bowling_alley","bus_station","cafe","campground","car_dealer","car_rental",
            "car_repair","car_wash","casino","cemetery","church","city_hall","clothing_store",
            "convenience_store","courthouse","dentist","department_store","doctor","electrician",
            "electronics_store","embassy","fire_station","florist","funeral_home","furniture_store",
            "gas_station","grocery_or_supermarket","gym","hair_care","hardware_store","home_goods_store",
            "hospital","insurance_agency","jewelry_store","laundry","lawyer","library","liquor_store",
            "local_government_office","locksmith","lodging","meal_delivery","meal_takeaway","mosque",
            "movie_rental","movie_theater","moving_company","museum","night_club","painter","park","parking",
            "pet_store","pharmacy","physiotherapist","plumber","police","post_office","real_estate_agency",
            "restaurant","roofing_contractor","rv_park","school","shoe_store","shopping_mall","spa","stadium",
            "storage","store","subway_station","synagogue","taxi_stand","train_station","transit_station",
            "travel_agency", "university", "veterinary_care", "zoo"
    ];
    $( "#keywordInput" ).autocomplete({
      source: keywords
    });    


    vm = new ViewModel();
    ko.applyBindings(vm);
    
    vm.getLocationsOfInterest(service, defaultCity, "restaurant", 20000);

    
}

