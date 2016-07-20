'use strict';

var markers = [];
var city, map, request, service, sidebar, infowindow, vm; 
var weatherAPIKey = "a9cd175d616e821fb23057b4a4407c4e";

function ViewModel(){
    var self = this;

    self.places = ko.observableArray();
    self.query = ko.observable('');
    self.city = ko.observable();
    self.keyword = ko.observable();
    self.weathercity = ko.observable('');
    self.wind = ko.observable('');
    self.temp = ko.observable('');
    self.weatherReport = ko.observable('');
    self.humidity = ko.observable('');
    self.weatherError = ko.observable('');
    self.displayStatus = ko.observable(false);

    self.filteredPlaces = ko.computed(function() {
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
    });

    self.onSubmit = function() {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode( { 'address': self.city()}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();
            var latLng = new google.maps.LatLng(latitude, longitude);
            map = new google.maps.Map(document.getElementById('map'), {
                           center: latLng,
                           scrollwheel: true,
                           zoom: 11
                       });
            request = {
                location: latLng,
                radius: 20000,
                keyword: self.keyword()
                };

            /** The 3rd Party API to report regional weather using geocode **/  
            self.weather(latLng);
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
                } else {
                     alert(google.maps.places.PlacesServiceStatus.error_message);
                }
            });
            } else {
                alert(status);
            } 
        });  
    };

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
            } else { 
                alert(google.maps.places.PlacesServiceStatus.error_message);
            }
        });
    };

    self.serviceBusy = function(str){
        switch (str){
            case true: 
                    $(".spinning").show();
                    $(".bodyContent").hide();
                    break;         
            case false: 
                    $(".spinning").hide();
                    $(".bodyContent").show();
                    break;
        }          
    };

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
            '<h4 id="firstHeading">'+ marker.title+'</h4>'+
            '<div class="spinning"><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span>loading...</span></div>' +
            '<div id="bodyContent">'+
            '<p><b>Location: '+ place.vicinity +'</b></p>'+
            '<p><b>Rating: '+ place.rating+'</b></p>';

        if(typeof( place.price_level) !== "undefined"){
            contentString = contentString + '<p><b>Price Level: '+place.price_level+'</b></p>';
        }    

        if(typeof( place.photos) === "undefined"){
            contentString = contentString;
        } else {
            contentString = contentString + '<img src="'+place.photos[0].getUrl({'maxWidth': 300, 'maxHeight': 300})+
                        '" alt='+ marker.title+'>'; 
        }     

        marker.openWindow = function(){ 
            var url = "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page="+
            marker.title + "&callback=?";
            infowindow.open(map, marker);
            self.serviceBusy(true);
            $.ajax({
                type: "GET",
                url: url,
                contentType: "application/json; charset=utf-8",
                async: false,
                dataType: "json",
                success: function (data, textStatus, jqXHR) {
                    var blurb;
                    if(typeof(data.parse) !== "undefined") {
                        console.log(data.parse.text["*"]);
                        blurb = data.parse.text["*"] + '</div></div>';
                    }else{
                        blurb = '<div><h4>Name Search yiels no results from Wikipedia</h4></div></div></div>';
                    }
                    var contentString1 = contentString + blurb;
                    infowindow.setContent(contentString1);
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                    setTimeout(function(){ marker.setAnimation(null); }, 1400);
                    self.serviceBusy(false);
                    
                },
                error: function (errorMessage) {
                    console.log(errorMessage);
                    var contentString1 = contentString + '<div>' + errorMessage.statusText + '</div></div></div>';
                    infowindow.setContent(contentString1);
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                    setTimeout(function(){ marker.setAnimation(null); }, 1400);
                    self.serviceBusy(false);
                }
            });
        };    
        marker.addListener('click', function() {
            this.openWindow();
        });
        return marker;
    };

    self.weather = function(coordinates){
        var weatherURL = "http://api.openweathermap.org/data/2.5/weather?"+
            "lat=" + coordinates.lat() +
            "&lon=" + coordinates.lng() + "&units=imperial" + "&APPID=" + weatherAPIKey;
        $.get(weatherURL, function(response){
            self.weathercity(response.name);
            self.temp(response.main.temp);
            self.wind(response.wind);
            self.weatherReport(response.weather[0].description);
            self.humidity(response.main.humidity);
        }).fail(function(jqXHR, status, error){
            alert(jqXHR.statusText);
        });
    };
    self.menuDisplay = function(){
        self.displayStatus(!self.displayStatus());
    };

}

function gm_authFailure() {
    alert("Google Map Connection Error. Please check Google API Key.");
}

function initMap() {

    var defaultCity = new google.maps.LatLng(47.6927623,-122.3387651);

    map = new google.maps.Map(document.getElementById('map'), {
            center: defaultCity,
            scrollwheel: true,
            zoom: 11
            });
    infowindow = new google.maps.InfoWindow({
                maxWidth: 150,
                maxHeight: 150
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

