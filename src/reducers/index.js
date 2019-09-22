// A typical reducer file looks like this
// A reducer is just a function that takes in state and action, and returns a new state.
import {contacts} from '../static-data'
export default (state = {contacts}, action) => {// setting initial value for state
    return state;
};
