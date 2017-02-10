//@flow
import React, { Component } from 'react'
import { Menu, Segment, Icon } from 'semantic-ui-react'

export default class Layout extends Component {
  handleItemClick = (e, item) =>
    console.log(item)

  render() {
    return (
      <div>
        <Segment attached>
          This is a segment
        </Segment>

        <Menu icon='labeled' compact attached='bottom'>
          <Menu.Item
            onClick={this.handleItemClick}>
            <Icon name='video play outline' />
            Start
          </Menu.Item>

          <Menu.Item
            onClick={this.handleItemClick}>
            <Icon name='bar chart' />
            Stats
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
