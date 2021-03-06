import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from './configureStore';
import routes from './routes';
import './index.css';

const store = configureStore();

ReactDOM.render((<Provider store={store}>
      <Router history={browserHistory} routes={routes}/>
    </Provider>), document.getElementById('root'));
