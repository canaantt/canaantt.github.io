'use strict';

var markers = [];
var markersTitles = []; 
var marker_names = [];
var place_names = [];
var city, map, request, service, sidebar, infowindow, vm; 
    
function ViewModel(){
  var self = this;
  
  self.places = ko.observableArray();
  self.query = ko.observable();
  
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
  
  self.getLocationsOfInterest = function(service, cityName, keyword, radius) {
       request = {
            location: cityName,
            radius: radius,
            keyword: [keyword] //should be table to take in input
          };

        /** Create the PlaceService and send the request.
         Handle the callback with an anonymous function.
         service = new google.maps.places.PlacesService(map);**/

        service.nearbySearch(request, function(results, status) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
                /** If the request succeeds, draw the place location on
                 the map as a marker, and register an event to handle a
                 click on the marker. **/

                place.marker = self.drawMarker(map, place);
                self.places.push(place);
                place_names.push(place.name);
              }
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
            marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function(){ marker.setAnimation(null); }, 750)
        }     

        marker.addListener('click', function() {
           this.openWindow();
        });
        
        
        
      
      return marker;
    }
}

function initMap() {

    city = new google.maps.LatLng(47.6927623,-122.3387651);

    map = new google.maps.Map(document.getElementById('map'), {
      center: city,
      scrollwheel: true,
      zoom: 11
    });
    
    infowindow = new google.maps.InfoWindow({
      maxWidth: 350
    });

    service = new google.maps.places.PlacesService(map);
    
    vm = new ViewModel();
    ko.applyBindings(vm);
    
    vm.getLocationsOfInterest(service, city, "restaurant", 20000);

}

