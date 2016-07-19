## Instruction
### Open Index.html in browser. The detaulf city is "Seattle, WA", and the default key word is "restaurant". Too look at more detail, you can either click on the map marker, or search the place by typing in the input are with default value "filter by name". A information window with more detail will be opened up. 
### In the detailed content information window, you can find the address of the business, the customer review from Zigzag. Some of the business infor window will provide the wikipedia entry. 


### How will I complete this Project?

- [x] Download the Knockout framework. Knockout must be used to handle list, filter, and any other information on the page that is subject to changing state. Things that should not be handled by knockout: anything the map api is used for, tracking markers, making the map, refreshing the map.

- [ ] ~~Write code required to add a full-screen map to your page using the Google Maps API. For sake of efficiency, the map API should be called only once.~~

- [x] Write code required to display map markers identifying a number of locations you are interested in within this neighborhood. This is the set of locations on which you will be searching and filtering in step 5. Your project should include at least 5 locations and display those locations when the page is loaded.

- [x] Implement input text area to filter your map markers displayed in step 4. The input text area should filter on markers that already show up. Simply providing a search function through a third-party API and displaying the results is not enough.

- [x] Implement a list view of the set of locations defined in step 4, filtering the locations via the input text area will filter the list view and map marker locations accordingly.

- [ ] Add additional functionality using third-party APIs when a map marker, or list view entry is clicked (ex. Yelp reviews, Wikipedia, Flickr images, etc). If you need a refresher on making AJAX requests to third-party servers, check out our Intro to AJAX course.

- [x] Add additional functionality to animate a map marker when either the list item associated with it or the map marker itself is selected.

- [x] Add additional functionality to open an infoWindow with the information described in step 7 when either a location is selected from the list view or its map marker is selected directly.

- [x] Interface should be very intuitive to use. For example, the input text area to filter locations should be easy to locate. It should be easy to understand what set of locations is being filtered. Selecting a location via list item or map marker should cause the map marker to bounce or in some other way animate to indicate that the location has been selected and associated info window opens above map marker with additional information.

- [x] We expect your application to provide a filter option on the map markers displayed by default on load. The list view and the markers should update accordingly in real-time. Providing a search function through a third-party API is not enough to meet specifications.

- [ ] Error Handling: In case of error (e.g. in a situation where a third party api does not return the expected result) we expect your webpage to do one of the following: A message is displayed notifying the user that the data can't be loaded, OR There are no negative repercussions to the UI. Note: Please note that we expect students to handle errors if the browser has trouble initially reaching the 3rd-party site as well. For example, imagine a user is using your neighborhood map, but her firewall prevents her from accessing the Instagram servers. Here is a reference article on how to block websites with the hosts file. It is important to handle errors to give users a consistent and good experience with the webpage. Read this blogpost to learn more .Some JavaScript libraries provide special methods to handle errors. For example: refer to .fail() method discussed here if you use jQuery's ajax() method. We strongly encourage you to explore ways to handle errors in the library you are using to make API calls.
