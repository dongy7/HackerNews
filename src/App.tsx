import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { orangeA700 } from 'material-ui/styles/colors';
import Navbar from './components/Navbar';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orangeA700,
  },
});

class App extends React.Component<null, null> {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Navbar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
