import * as React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './App';
import NewsFeed from './containers/NewsFeed';
import Story from './containers/Story';
export default (<Route path="/" component={App}>
    <IndexRedirect to="feed/"/>
    <Route path="feed(/:type)" component={NewsFeed}/>
    <Route path="feed/:type(/:page)" component={NewsFeed}/>
    <Route path="story/(:id)" component={Story}/>
  </Route>);
