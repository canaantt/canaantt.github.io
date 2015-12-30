'use strict';
// Display google map
function initMap() {
  // Create a map object and specify the DOM element for display.
  //geocoder = new google.maps.Geocoder();
  //var address = "1100 Fairview Ave N, Seattle, WA 98109";
  //geocoder.geocode({
  //      'address': address
  //};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:47.6097, lng:-122.3331},
    //center: address.geometry.location,
    scrollwheel: false,
    zoom: 8
  });
}