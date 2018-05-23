import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router'
const menuItems = [
  {
    key: 0,
    route: '/topstories',
    text: 'Top'
  },
  {
    key: 1,
    route: '/newstories',
    text: 'New'
  },
  {
    key: 2,
    route: '/beststories',
    text: 'Best'
  },
  {
    key: 3,
    route: '/askstories',
    text: 'Ask'
  },
  {
    key: 4,
    route: '/showstories',
    text: 'Show'
  },
  {
    key: 5,
    route: '/jobstories',
    text: 'Jobs'
  }
]
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          title="Hacker News"
          onLeftIconButtonClick={() => this.props.onToggle()}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.props.open}
          onRequestChange={(open, reason) => this.props.onChange(open)}
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
    )
  }
}
export default Navbar
