## ReactJS + FruitasticAPI

FruitasticAPI is a simple service that returns random people's favorite fruits as an array. It has one method: .get(callback) which accepts a function that is called with one parameter (JSON response) when the data is ready. 

### Demo: https://www.webdesigndevelopment.ca/github/reactjs-fruitasticapi/

### Application Goals:

* Load data by calling FruitasticApi.get().

* Create a horizontal bar chart comparing the popularity of all fruits. This should be based on the total number of favorites for each fruit. Each row should have a label for the name of the fruit, plus its total count.

* Underneath the bar chart, display a list of all the items in the array you got from FruitasticApi.get(). Each item should display the person's name and favorite fruit.

* Each bar chart should be click-able. When clicked, visually highlight the row and use console.log to output 'Fruit selected: {fruitname}, {fruitnameTotal}'. Only a single row should be highlighted at any time.

* Do not cause a browser refresh, or navigate to another html page.

* When a bar chart row is clicked, the list should be filtered to display only the people that chose that fruit as their favorite.

* Each bar is a different color.


### How to Run and Setup:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
