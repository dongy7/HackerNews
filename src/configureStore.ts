import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import createRootReducer from './reducers';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

const configureStore = () => {
  return createStore(
    createRootReducer(),
    applyMiddleware(epicMiddleware)
  );
};

export default configureStore;
