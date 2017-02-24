//@flow
import React, { Component } from 'react'
import { List, Segment, Form, Input } from 'semantic-ui-react'

export default class ContentPanel extends Component {
  handleClick = (e, item) => {
    console.log(item.name)
  }

  currentPanel = () => {
    switch(this.props.page) {
      case "home":
        return (
          <List selection divided size="big">
            <List.Item name="Category 1" onClick={this.handleClick}>
              <List.Content>
                Category 1
              </List.Content>
            </List.Item>
            <List.Item name="Category 2" onClick={this.handleClick}>
              <List.Content>
                Category 2
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <Input icon="add" fluid placeholder="New category..." transparent/>
              </List.Content>
            </List.Item>
          </List>
        )
      case "run":
        return (
          <List selection divided size="big">
            <List.Item name="Note 1" onClick={this.handleClick}>
              <List.Content>
                Note one
              </List.Content>
            </List.Item>
            <List.Item name="Note 2" onClick={this.handleClick}>
              <List.Content>
                Note two
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <Input icon="add" fluid placeholder="New note" transparent/>
              </List.Content>
            </List.Item>
          </List>
        )
    }
  }

  render() {
    return (
      <Segment attached id="content">
        <Form>
          {this.currentPanel()}
        </Form>
      </Segment>
    )
  }
}
