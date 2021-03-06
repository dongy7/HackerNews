import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { orangeA700 } from 'material-ui/styles/colors';
import Navigation from './containers/Navigation';
import Error from './containers/Error';
injectTapEventPlugin();
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: orangeA700,
    },
});
const App = (props) => ( // tslint:disable-line
<MuiThemeProvider muiTheme={muiTheme}>
    <div className="App">
      <Navigation />
      <Error />
      {props.children}
    </div>
  </MuiThemeProvider>);
export default App;
