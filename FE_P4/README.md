## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,


### All the steps taken
1. using npm and gulp to minify css, js, html
2. modified two functions in views/js/main.js: 
  * updatePositions() 
  	reduce the pained pizza number from 200 to 20
  * changePizzaSizes()
    * var elems = document.querySelectorAll(".randomPizzaContainer"); So document.querySelectorAll only gets called once 
    * Two variables are taken out of the for loop:  var dx = determineDx(elems[1], size);, var newwidth = (elems[1].offsetWidth + dx) + 'px';
    * updated two for loops:line 460 and line 555, pre-calculated the length
    * line 555: adopt the comment from the reviewer to calculated how many rows needs to be covered with pizza in the background
    * change document.querySelector() to document.getElementById() or document.getElementByClass()
    
3. inline google font, inline css/style.css and views/css/style.css
4. delay google analytical javascript loading
4. reduced the size of the images


### to run 
1. cd to FE_P4
2. npm install
3. gulp
4. open index.html and click on link to Cam's Pizzeria




