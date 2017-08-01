import { combineReducers } from 'redux';
// import { GET_LOCATION, LOCATION_RECIEVED } from '../actions/types/';

// export default async function(state = {}, action) {
//     //you technically dont have to, but I like to keep my actions in the form of 
//     //{type, payload} where type is the type as a string, and payload is the 
//     //object holding whatever info pertains to that action. It can also be null
// 	const { type, payload } = action;
//     console.log("action", action, " state", state);
// 	switch (type) {
// 		case GET_LOCATION:
//             getLocation();
//             return state;
//         case LOCATION_RECIEVED:
//             return action.payload;
// 		default:
// 			return state;
// 	}
// }

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

export default combineReducers({
    location,
    locationHasErrored,
    locationIsLoading
});
