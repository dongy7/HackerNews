import {createStore} from 'redux';
import createRootReducer from './reducers';

const configureStore = () => {
  return createStore(
    createRootReducer()
  );
};

export default configureStore;
