import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='massive'>
        <Link to='/home'>
          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>
        </Link>
        <Link to='/favs'>
          <Menu.Item
            name='Favs'
            active={activeItem === 'Favs'}
            onClick={this.handleItemClick}
          >
            Favs
          </Menu.Item>
        </Link>
        <Link to='/addcar'>
          <Menu.Item name='Add Car'
                     active={activeItem === 'Add Car'}
                     onClick={this.handleItemClick}>
            Add Car
          </Menu.Item>
        </Link>
      </Menu>
    )
  }
}


export default NavBar
