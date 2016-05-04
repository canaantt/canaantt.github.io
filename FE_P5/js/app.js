'use strict';
function octopus(){
    var self = this;
    var city, map, request, service, sidebar, moreDetails; 
    var placesArray = [];
    var markersArray = [];

    // Initialize the app
    function initMap() {

        city = new google.maps.LatLng(47.6927623,-122.3387651);

        map = new google.maps.Map(document.getElementById('map'), {
          center: city,
          scrollwheel: true,
          zoom: 11
        });

       
        request = {
            location: city,
            radius: '20000',
            keyword: ['restaurant'] //should be table to take in input
          };

        // Create the PlaceService and send the request.
        // Handle the callback with an anonymous function.
        service = new google.maps.places.PlacesService(map);
        
        sidebar = $("#gldimes-records");
        service.nearbySearch(request, function(results, status) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              var place = results[i];
              // If the request succeeds, draw the place location on
              // the map as a marker, and register an event to handle a
              // click on the marker.
              console.log("*****", place);
              sidebar.append("<li><a href='#'>"+ place.name + "</a></li>");
              var photos = place.photos;
              if (!photos) {
                return;
              }

              var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location,
                title: place.name
                //icon: photos[0].getUrl({'maxWidth': 35, 'maxHeight': 35})
              })
              markersArray.push(marker);
            }
            placesArray = results;
           } 
        });

        moreDetails = function(place) {
          var event = event
          // for(var key in self.mapMarkers()) {
          //   if(clickedDealName === self.mapMarkers()[key].marker.title) {
              map.panTo(self.mapMarkers()[key].marker.position);
              map.setZoom(14);
              infowindow.setContent(self.mapMarkers()[key].content);
              infowindow.open(map, self.mapMarkers()[key].marker);
              map.panBy(0, -150);
              self.mobileShow(false);
              self.searchStatus('');
          //   }
          // }
        };
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