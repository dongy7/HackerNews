import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from './reducers';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

const configureStore = () => {
  return createStore(
    createRootReducer(),
    composeEnhancers(
      applyMiddleware(epicMiddleware)
    )
  );
};

export default configureStore;
