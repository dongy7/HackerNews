import { CHANGE_NAV, CLOSE_NAV, TOGGLE_NAV } from '../actions/nav';
const nav = (state = false, action) => {
    switch (action.type) {
        case CHANGE_NAV:
            return action.payload;
        case CLOSE_NAV:
            return false;
        case TOGGLE_NAV:
            return !state;
        default:
            return state;
    }
};
export default nav;
