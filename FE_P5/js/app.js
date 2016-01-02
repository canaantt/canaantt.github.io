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
}

var $gldHeaderElem = $('#gldimes-header');
var $gldElem = $('#gldimes-records');
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
var $searchTerm = "pharmaceutical";
var $partnerId = "51544";
var $api_key = "eZ8t71dWbXs";
var $publicIP = "76.22.47.171";
var url = "http://api.glassdoor.com/api/api.htm?t.p=" + $partnerId + 
           "&t.k=" + $api_key + 
           "&userip=" + $publicIP + 
           "&useragent=" + "Chrome" + "&format=json&v=1&action=employers" +
           "&q=" + $searchTerm + "&city=Seattle" + "&ps=8";
console.log("url is:" + url);
$.ajax({
      url: url,
      dataType: "jsonp",
      success: function(response){
           var articles = response.response.employers;
           console.log("Glassdoor Search Engine: ", articles);
           articles.forEach(function(art){
             $gldElem.append('<li><a target="_blank" href="http://' + art.website + '">' + art.name + '</a></li>');
           });
      }
    });
