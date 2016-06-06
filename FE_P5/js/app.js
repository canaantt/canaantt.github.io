'use strict';
var places = [];
var markers = [];
var markersTitles = []; 
var marker_names = [];
var place_names = [];
//function Octopus() {
    //var self = this;
    var city, map, request, service, sidebar, infowindow; 
    
    //API call to get the result from Google Place API service
    function GetLocationsOfInterest(service, cityName, keyword, radius) {
       request = {
            location: cityName,
            radius: radius,
            keyword: [keyword] //should be table to take in input
          };

        /** Create the PlaceService and send the request.
         Handle the callback with an anonymous function.
         service = new google.maps.places.PlacesService(map);**/

        sidebar = $("#reslist-records");
        service.nearbySearch(request, function(results, status) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
                /** If the request succeeds, draw the place location on
                 the map as a marker, and register an event to handle a
                 click on the marker. **/
                sidebar.append("<li class='listName'><a href='#'>"+ place.name + "</a></li>");
                var marker = drawMarker(map, place);
                

                places.push(place);
                place_names.push(place.name);
                markers.push(marker);
                marker_names.push(marker.title);
              }
           }
           markers.forEach(moreDetail);  
        });
    }

    //Mark all the places from API call
    function drawMarker(map, place){
      var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location,
              title: place.name,
              placeID: place.place_id
              });
      marker.tooltipContent = marker.title;
      new google.maps.event.trigger(marker, moreDetail);
      
      return marker;
    }

    //Click on any name on the side bar, the matching marker should be the
    // the only on shown on the map
    function markerVisibility(markers){

    }
    function filter(placeClicked){ 
        var name = placeClicked.target.innerText;
        console.log("within the this.filter function, and the place clicked is ", name);
        console.log(markers);
        for(var i=0;i<markers.length;i++){
          markersTitles.push(markers[i].title);
        }
        console.log(markersTitles.indexOf(name));
        //debugger;
        
        markers
        var marker = markers[markersTitles.indexOf(name)];

        //markers.splice(markersTitles.indexOf(name), 1);
        //clearMarkers(markers);
    }

    //Click on the marker, a detailed information box should pop up
    function moreDetail(marker){
        var pos = marker_names.indexOf(marker.title);

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">'+marker.title+'</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Location: '+places[pos].vicinity+'</b></p>'+
            '<p><b>Rating: '+places[pos].rating+'</b></p>';
            

       if(typeof(places[pos].price_level) !== "undefined"){
            contentString = contentString + '<p><b>Price Level: '+places[pos].price_level+'</b></p>';; 
        }    

       if(typeof(places[pos].photos) === "undefined"){
           contentString = contentString + '</div></div>';
        }else{
           contentString = contentString + '<img src="'+places[pos].photos[0].getUrl({'maxWidth': 300, 'maxHeight': 300})+
                              '" alt='+ marker.title+'></div></div>'; 
        }     
            
        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 350
          });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
    }

    //Click on the side to clear the selection 
    function clearMarkers(){
        for(var i=0; i<markers.length; i++){
          markers[i].setMap(null);
        }
    }

    // Initialize the app
    function initMap() {

        var searchKeyWords = $("#userSearchInput");
        var city = searchKeyWords.split(',')[0].toLowerCase();
        var keyword = searchKeyWords.split(',')[1].toLowerCase();
        city = new google.maps.LatLng(47.6927623,-122.3387651);

        map = new google.maps.Map(document.getElementById('map'), {
          center: city,
          scrollwheel: true,
          zoom: 11
        });

        service = new google.maps.places.PlacesService(map);
        GetLocationsOfInterest(service, city, keyword, 20000);

    }



    $('.listName').click(filter);
    $('#markerClearButton').click(clearMarkers);
  
    initMap();
//}

