import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import store from '../index.js'

export default class NavBar extends Component {
  state = { activeItem: 'ACTIVISM' }

  handleItemClick = (e, { name }) => (this.setState({ activeItem: name }, () => store.dispatch({ type: name})))

  render() {
    const { activeItem } = this.state

    return (
        <div>
          <Menu secondary fluid widths={3} style={{"fontFamily": "Abril Fatface"}}>
            <Menu.Item
              name='Activism'

              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Tanzania'
              position='centre'

              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='About'
              position='right'

              onClick={this.handleItemClick}
            />
          </Menu>
        </div>

    )
  }
}
