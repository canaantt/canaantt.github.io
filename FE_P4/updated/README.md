## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,


### Instructions to ru
1. cd ../FE_p4/updated
2. npm install
3. gulp views
4. open index.html in the browser and click on Cam's Pizzeria

### All the steps taken
1. using gulp to minify css, js, html
2. modified two functions in views/js/main.js: updatePositions() and changePizzaSizes()
3. delay css loading
4. delay js loading by using async 
5. reduced the sizes of the related images



