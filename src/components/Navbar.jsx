import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
const menuItems = [
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
class Navbar extends React.Component {
    render() {
        return (<div>
        <AppBar title="Hacker News" onLeftIconButtonClick={() => this.props.onToggle()}/>
        <Drawer docked={false} width={200} open={this.props.open} onRequestChange={(open, reason) => this.props.onChange(open)}>
          {menuItems.map(menu => {
            return (<MenuItem key={menu.key} onTouchTap={() => this.props.onClose()} containerElement={<Link to={menu.route}/>}>
                {menu.text}
              </MenuItem>);
        })}
        </Drawer>
      </div>);
    }
}
;
export default Navbar;
