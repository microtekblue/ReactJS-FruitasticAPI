#Fruitastic Exercise

The goal of this exercise is to take JSON data from an external source, and to visualize it into a simple UI.

You'll be using the FruitasticAPI, which is a simple service that returns random people's favorite fruits as an array. It has one method: .get(callback) which accepts a function that is called with one parameter (JSON response) when the data is ready. Do not modify FruitasticApi.js.

We prefer that you use React (https://reactjs.org/) to build the user interface, but any framework is allowed. If you decide to use another framework, please indicate what was used and why you decided to use it instead of React. You may add any additional files you need or modify any of the non-API files you would like but please deliver a solution that includes index.html, main.css and main.js files. Style with CSS any way you like.

A UX mockup is provided. Please follow the basic layout of the UX mockup but feel free to add any style or animation you feel would improve the product. Have fun with it!!


##Design spec:

These elements are required.

* Load data by calling FruitasticApi.get().
* Create a horizontal bar chart comparing the popularity of all fruits. This should be based on the total number of favorites for each fruit. Each row should have a label for the name of the fruit, plus its total count.
* Underneath the bar chart, display a list of all the items in the array you got from FruitasticApi.get(). Each item should display the person's name and favorite fruit.
* Each bar chart should be click-able. When clicked, visually highlight the row and use console.log to output 'Fruit selected: {fruitname}, {fruitnameTotal}'. Only a single row should be highlighted at any time.
* Do not cause a browser refresh, or navigate to another html page.


##Stretch goals! (optional):

* When a bar chart row is clicked, the list should be filtered to display only the people that chose that fruit as their favorite.
* Create an animation growing the bars to their correct width when the data is loaded.
* Stack each bar from top to bottom in order of most popular to least popular.
* Each bar is a different color.
