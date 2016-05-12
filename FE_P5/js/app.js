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


       GetLocationsOfInterest(city,'restaurant', 20000);
       console.log("***** placesArray in initMap: ", placesArray);
    }

    function GetLocationsOfInterest(cityName, keyword, radius) {
       request = {
            location: cityName,
            radius: radius,
            keyword: [keyword] //should be table to take in input
          };

        // Create the PlaceService and send the request.
        // Handle the callback with an anonymous function.
        service = new google.maps.places.PlacesService(map);
        debugger;
        sidebar = $("#gldimes-records");
        service.nearbySearch(request, function(results, status) {
          placesArray = results;
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              var place = results[i];
              // If the request succeeds, draw the place location on
              // the map as a marker, and register an event to handle a
              // click on the marker.
              sidebar.append("<li><a href='#'>"+ place.name + "</a></li>");
              var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location,
                title: place.name
                //icon: photos[0].getUrl({'maxWidth': 35, 'maxHeight': 35})
              })
            }
           } 
        });
    }

    function GetLocationDetials(loc){
          var placeId = loc.id;
          var url = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" +
                    placeID + "&key=AIzaSyDhNWpNpPsfBzj8kjVbZk4LpGko1IKgjs0";


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