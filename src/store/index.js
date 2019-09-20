import { createStore } from "redux";
import reducer from "../reducers";
import { contacts } from "../static-data";

// The Redux createStore needs to be aware of the reducer
// Creation of the store, const store = createStore(reducer, {contacts}); 
// you should remember that the second argument in createStore is the initial state of the app.
const store = createStore(reducer, {contacts}); 

export default store;