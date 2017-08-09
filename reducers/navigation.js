import { combineReducers } from 'redux';

export function currentTab(state = 0, action) {
    switch (action.type) {
        case 'CURRENT_TAB':
            return action.payload;
        default:
            return state;
    }
}


export default combineReducers({
  currentTab
});
