import { createStore } from "redux";
import reducer from "../reducers";
import { contacts } from "../static-data";

// The Redux createStore needs to be aware of the reducer
const store = createStore(reducer, {contacts}); 

export default store;