<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify -->
## Redux guiide - https://www.freecodecamp.org/news/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6/

### Notes
* Reduce method is the most important in redux as well, it’s a higher order in javascript as we all know - find the sum of all numbers using the function reduce
* Reducer in redux is passed as createStore(redux) - create store is a factory function
* The coding side of createStore() has state, listeners and methods like getState, subscribe, dispatch and a return statement
* Import createStore from redux to use it, make a store by saying const store = createStore(reducer);we write these 2 lines before the class app, we’re trying to do this from the very beginning
* The reducer function doesn’t exist yet, we have to make that in src/reducers/index.js - to make it easier to follow when the app gets complex
* For a redux reducer, you always return the new state of the application - that’s how it works, simple
* Reducer is like the cashier and the vault, you withdraw some money and the money is kept updated before and after you take it from the bank
* Reducer initially looks like this - export default(state) => {return state}
* The second argument - for the create store method - the way you create a bank account with some moneyor no money, the same way redux works that way - it is called the initialState of the app 
* Const store = createStore(reducer, initialState);
initialState is like the initial state - const initialState = { tech: “React” }; - it is just an object, 
* When you create a store with createStore(), the store makes 3 more exposed methods - one of them -> getState()
store.getState() will grab the current state from the redux store- first thing is the state of the app, other thing is the action
* Redux action - go in the bank, cashier receives your action, previous one was withdrawal - but here, the only way money leaves the bank vault is if you make your action or intent known to the cashier
* Action must have a ‘type’ field - {type: ‘withdraw_money’} , we also need to add the amount we need to withdraw - that goes with the action - that is sufficient information- common approach is to have a paylaod: {}thing instead of something like type or anything else
* Payload further has amount or whatever needs to go there
* How do we use the action now? - we made the function where action is the second parameter for the function - we write a switch case to understand how everything works there- we will switch over the action TYPE and do something based on that
* For example - changing the state of modal from open to close - this.setState({isOpen: !this.state.isOpen})- set state is intelligent, knows how to change itself - with redux, you can’t use the set state to update the object
* In redux, every action flows through the reduce, we have the function reducer( state, action) and a switch case inside this - 
* I think redux is kind of implemented in flutter, and we can just pass in data using objects, there isn’t much to it
* When there is an intent to update the application state, action must be dispatched. User clicks dispatches actions with each clicks, eg: the website - button - setTechnology(text){return {type: “SET_TECHNOLOGY, tech: text”} - the function could be const setTechnology = text => ({stuff-here})
* Redux is safe as a bank - major actors of redux live in their own folder and directory
* Import store from ./store
* We have to provide
* Button group is a stateless component, that takes in an array of technologies
* Let’s make click handlers to handle clicks - onClick ={} inside the div/button or whatever
* What comes in after clicking the button - dispatching the action - flows through the reducer - comes back to the reducer - dispatcher - 
* Const tech = e.target.dataset.tech and store.dipatch(setTechnolog(tech))
* Tech will hold the value and store.dispatch() is how you dispatch an action
setTechnology is a function - return {type: “SET_TECHNOLOGY” and text: text}
* If you do console.log and then run the app using the live server - you will see the actions being logged
* We need a new action to actually change the picture or anything else, therefore the new action is SET_TECHNOLOGY
* Common way to handle actions is using a switch statement - export default(state, acton){ switch(action.type){}
* Never mutate state within the reducers - return a new copy of the state, never change the state and return it as it is
* Return { ...state, tech: action.text }
* Subscribing to store updates, notifications with redux
store.subscribe() - well named function - what’s the argument passed in the function - we can pass ‘render’ inside the function
* store.subscribe() - low level redux API - rendering in the google chrome console - there will be a change in the light - render function just renders the component - doesn’t re render since the state value is the same
* Something cool coming up - bank account application
* Name and balance is stored in the application- we will refactor the app to use redux, handle withdrawal actions to deplete the user’s balance
* Time application using  react - storing the right thing is very important
* Change the time using redux
* Handle increase and decrease actions to actually affect the displayed time on the counter
### MAKING A NEW REACT APPLICATION
* Lots of js and css for the beginning
* Iterating over lists - 
    * We can use different mapping functions  - users.map(user => {return <User/>} - User is another class, in the sense of an object
    * Using lodash
    * Order of returned values is not in the same order -> this can be used in the chat application
    * We copy paste the static-data.js which basically has some data in it- it has methods which generate some data within it, like generateUsers, or Msgs
