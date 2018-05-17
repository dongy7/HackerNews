import { FETCH_NEWS_FULFILLED, FETCH_PAGE_COUNT_FULFILLED } from '../actions/news';
import { combineReducers } from 'redux';
const createCategory = (type) => {
    const pageAt = (state = 1, action) => {
        switch (action.type) {
            default:
                return state;
        }
    };
    const pageCount = (state = 1, action) => {
        switch (action.type) {
            case FETCH_PAGE_COUNT_FULFILLED:
                if (action.metadata === type) {
                    return action.payload;
                }
                return state;
            default:
                return state;
        }
    };
    const cachedNews = (state = {}, action) => {
        switch (action.type) {
            case FETCH_NEWS_FULFILLED:
                if (action.metadata.type === type) {
                    return Object.assign({}, state, {
                        [action.metadata.id]: action.payload,
                    });
                }
                return state;
            default:
                return state;
        }
    };
    return combineReducers({
        pageAt,
        pageCount,
        cachedNews,
    });
};
export default createCategory;
