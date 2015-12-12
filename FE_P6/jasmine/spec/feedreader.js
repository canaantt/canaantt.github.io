/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* This test loops through each feed in allFeeds object
         * and ensures the URL is defined and that the URL is not 
         * empty
         */
        it('URL defined', function() {
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         });
        /* This test loops through each feed in allFeeds object
         * and ensures the name is defined and that the name is not
         * empty
         */
        it('name defined', function() {
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });
    });

    describe('The menu', function() {
        /* This is the second test - it tests to make sure that the
         * menu is hidden as default
         */
         it("menu hidden", function() {
            expect($("body").attr("class")).toEqual("menu-hidden");
         });
         /* This test is to make sure that the
          * menu visibility responds to the menu button clicking event.
          * After the first click, the menu should appear that the
          * original "menu-hidden" class should be removed from menu body.
          * And the second click should re-hide the menu button.
          */
         it('visibility changed', function() {
            $('.menu-icon-link').click();
            expect($("body").attr("class")).not.toEqual("menu-hidden");
            $('.menu-icon-link').click();
            expect($("body").attr("class")).toEqual("menu-hidden");
         });
     });       
    describe('Initial Entires', function() {
        /* This is the third test - it tests to make sure that the
         * loadFeed function is called and completes its work. So there
         * should be at least one entry. Since the loadFeed() is asynchronous,
         * the test evaluation won't occure until the loadFeed() is complete. 
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        it('Initial Entries', function() {
            expect($(".entry").length).toBeGreaterThan(0);
         });
    });    
    describe('New Feed Selection', function() {
        /* This is the fourth test - it tests if loadFeed() is called with  
         * new feed, the content is actually changed. Here the feed titles
         * are evaluated after the need feed is loaded
         */
         var feedTitle = " ";

         beforeEach(function(done) {
            $(".feed").empty();
            loadFeed(1, function() {
                feedTitle = $(".feed .entry h2").text();
                loadFeed(3, done);     
            });
        });
        
        it('new feed is loaded', function() {
            expect($(".feed .entry h2").text()).not.toBe(feedTitle);
        });
     });    
}());
