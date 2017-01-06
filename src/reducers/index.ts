import {combineReducers} from 'redux';

const createRootReducer = () => {
  const news = (state = [], action: Object) => {
    return state;
  };

  return combineReducers({
    news,
  });
};

export default createRootReducer;
