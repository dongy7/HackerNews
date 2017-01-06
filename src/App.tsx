import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { orangeA700 } from 'material-ui/styles/colors';
import Navbar from './components/Navbar';
import NewsFeed from './containers/NewsFeed';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orangeA700,
  },
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div className="App">
      <Navbar />
      <NewsFeed />
    </div>
  </MuiThemeProvider>
);

export default App;
