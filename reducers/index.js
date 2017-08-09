import { combineReducers } from 'redux';

import todos from './todos';
import location from './location';
import people from './people';
import navigation from './navigation';
import weightedPreference from './weightedPreference';


//remember, what is really being written here goes like:
//export default combineReducers({
//      "todos": todos,
//      *and then everything else you have
//})
export default combineReducers({ todos, location, navigation, weightedPreference, people });
