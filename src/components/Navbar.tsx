import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';

interface Props {
  open: boolean;
  onChange: Function;
  onClose: Function;
  onToggle: Function;
}

interface NavMenuItem {
  key: number;
  route: string;
  text: string;
}

const menuItems: NavMenuItem[] = [
  {
    key: 0,
    route: '/feed/topstories',
    text: 'Top Stories',
  },
  {
    key: 1,
    route: '/feed/newstories',
    text: 'New Stories',
  },
];

class Navbar extends React.Component<Props, null> {
  render() {
    return (
      <div>
        <AppBar
          title="Hacker News"
        />
        <Drawer
          docked={false}
          width={200}
          open={this.props.open}
          onRequestChange={(open) => this.props.onChange(open)}
        >
          {menuItems.map(menu => {
            return (
              <MenuItem
                key={menu.key}
                onTouchTap={() => this.props.onClose()}
                containerElement={<Link to={menu.route} />}
              >
                {menu.text}
              </MenuItem>
            )
          })}
        </Drawer>
      </div>
    );
  }
};

export default Navbar;
