'use strict';
function octopus(){
    var self = this;
    var city, map, request, service, sidebar, infowindow; 
    this.placesArray = ko.observableArray([]);
    this.markersArray = ko.observableArray([]);

    //Click on any name on the side bar, the matching marker should be the
    // the only on shown on the map
    this.filter = function(placeClicked){
      var name = placeClicked.innerText;

    }

    //Click on the marker, a detailed information box should pop up
    this.moreDetail = function(){

    }

    //Click on the side to clear the selection 
    this.clear = function(){
      
    }

    // Initialize the app
    function initMap() {

        city = new google.maps.LatLng(47.6927623,-122.3387651);

        map = new google.maps.Map(document.getElementById('map'), {
          center: city,
          scrollwheel: true,
          zoom: 11
        });

        service = new google.maps.places.PlacesService(map);
        infowindow = new google.maps.InfoWindow();
        GetLocationsOfInterest(service, city,'restaurant', 20000);
        
        

        console.log("***** placesArray in initMap: ", self.placesArray);
    }



    function GetLocationsOfInterest(service, cityName, keyword, radius) {
       request = {
            location: cityName,
            radius: radius,
            keyword: [keyword] //should be table to take in input
          };

        // Create the PlaceService and send the request.
        // Handle the callback with an anonymous function.
        //service = new google.maps.places.PlacesService(map);
        sidebar = $("#gldimes-records");
        service.nearbySearch(request, function(results, status) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              var place = results[i];
              // If the request succeeds, draw the place location on
              // the map as a marker, and register an event to handle a
              // click on the marker.
              console.log(place);
              sidebar.append("<li class='listName'><a href='#'>"+ place.name + "</a></li>");
              var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location,
                title: place.name,
                placeID: place.place_id,
                //icon: photos[0].getUrl({'maxWidth': 35, 'maxHeight': 35})
              });
              self.markersArray.push(marker);
              self.placesArray.push(place);
            }
            $('.listName').click(filter);
        
            console.log(self.markersArray);
           } 
        });
    }

    function placeDetailsByPlaceId(name, service, map, infowindow) {
      // Create and send the request to obtain details for a specific place,
      // using its Place ID.
      this.goToMarker = function(name) {
        for(var key in self.mapMarkers()) {
          if(name === self.mapMarkers()[key].marker.title) {
            map.panTo(self.mapMarkers()[key].marker.position);
            map.setZoom(14);
            infowindow.setContent(self.mapMarkers()[key].content);
            infowindow.open(map, self.mapMarkers()[key].marker);
            map.panBy(0, -150);
            self.mobileShow(false);
            self.searchStatus('');
          }
        }
      };

      var request = {
        placeId: document.getElementById('place-id').value
      };

      service.getDetails(request, function (place, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          // If the request succeeds, draw the place location on the map
          // as a marker, and register an event to handle a click on the marker.
          var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
          });

          google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
              'Place ID: ' + place.place_id + '<br>' +
              place.formatted_address + '</div>');
            infowindow.open(map, this);
          });

          map.panTo(place.geometry.location);
        }
      });
    }
    initMap();
}


ko.bindingHandlers.selectOnFocus = {
        update: function (element) {
          ko.utils.registerEventHandler(element, 'focus', function (e) {
            element.select();
          });
        }
      };

ko.applyBindings(new octopus());