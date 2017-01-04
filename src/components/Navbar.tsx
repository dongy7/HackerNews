import * as React from 'react';
import AppBar from 'material-ui/AppBar';

class Navbar extends React.Component<null, null> {
  render() {
    return (
      <AppBar
        title="Hacker News"
      />
    );
  }
};

export default Navbar;