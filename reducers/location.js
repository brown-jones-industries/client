import { combineReducers } from 'redux';

export function locationHasErrored(state = false, action) {
    switch (action.type) {
        case 'LOCATION_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}
export function locationIsLoading(state = false, action) {
    switch (action.type) {
        case 'LOCATION_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function location(state = null, action) {
    switch (action.type) {
        case 'LOCATION_FETCH_DATA_SUCCESS':
            return action.location;
        default:
            return state;
    }
}

//now here I named my functions the same as how I want the state to be,
//but if I wanted didnt, I could do something like this:
// export default combineReducers({
//     "alerternateName": location,
//     "test": locationHasErrored,
//     "asdf": locationIsLoading
// });

export default combineReducers({
  location,
  locationHasErrored,
  locationIsLoading,
});
