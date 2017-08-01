import { combineReducers } from 'redux';

import todos from './todos';
import location from './location';

//remember, what is really being written here goes like:
//export default combineReducers({
//      "todos": todos,
//      *and then everything else you have
//})
export default combineReducers({ todos,  location });
