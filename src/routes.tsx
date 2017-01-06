import * as React from 'react';
import { Route } from 'react-router';
import App from './App';

export default (
  <Route path="/(:newsId)" component={App} />
);
