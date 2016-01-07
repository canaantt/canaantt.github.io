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
    scrollwheel: true,
    zoom: 8
  });



var lat = 47.6097;
var $yelpHeaderElem = $('#yelpimes-header');
var $yelpElem = $('#yelpimes-records');
$("form").submit(function(event) {
        var $city = $("#city").val();
        var $street = $("#street").val();
        $searchTerm = $city;
        var $address = $street.trim() + ", " + $city;
        console.log("address is :" + $address);
        var imageTag = '<img class="bgimg" src="http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + $address + '">';
        $body.append(imageTag);
    });
//$searchTerm = $("#city").val();
var $consumer_key = "50FjBMSKJUh2OaE_fiVt2w";
var $consumer_secret = "stqahr_NGTX0_PJvLxRVhBo7rsw";
var $token = "4P9jlOJ_7H4s8lLgmzWLTzadzzckHxO9";
var $token_secret = "Y07An4DVAfc152afg664HCWpexU";
var $searchTerm = "pharmaceutical";
var $location = "Seattle";

var url = "https://api.yelp.com/v2/search?term=" + "food" + "&location=" + $location +
          "&oauth_consumer_key=" + $consumer_key +
          "&oauth_token=" + $token +
          "&oauth_signature_method=" + "HMAC-SHA1" +
          "&oauth_signature=" + $token + 
          "&oauth_timestamp=" + Date.now() +  
          "&oauth_nonce=" +
          "&location=" + $location +'"';

console.log("url is:" + url);
$.ajax({
      url: url,
      dataType: "jsonp",
      success: function(response){
           var articles = response.response.employers;
           console.log("Glassdoor Search Engine: ", articles);
           articles.forEach(function(art){
             $yelpElem.append('<li><a target="_blank" href="http://' + art.website + '">' + art.name + '</a></li>');
             lat = lat - 0.1; 
             var marker = new google.maps.Marker({
                              position: {lat:lat, lng:-122.3331},
                              map: map,
                              title: 'Hello World!'
                              });
           });
      }
    });
}