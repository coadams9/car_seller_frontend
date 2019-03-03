import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='massive'>
        <Menu.Item
          name='Favs'
          active={activeItem === 'Favs'}
          onClick={this.handleItemClick}
        >
          Favs
        </Menu.Item>

        <Menu.Item name='Add Car'
                   active={activeItem === 'Add Car'}
                   onClick={this.handleItemClick}>
          Add Car
        </Menu.Item>
      </Menu>
    )
  }
}


export default NavBar
