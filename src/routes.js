import * as React from "react";
import { Route, IndexRedirect } from "react-router";
import App from "./App";
import NewsFeed from "./containers/NewsFeed";
import Story from "./containers/Story";
export default (
  <Route path="/" component={App}>
    <IndexRedirect to="topstories/" />
    <Route path="story/(:id)" component={Story} />
    <Route path=":type(/:page)" component={NewsFeed} />
  </Route>
);
