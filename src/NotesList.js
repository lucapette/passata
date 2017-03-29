//@flow
import React, { Component } from 'react'
import { List, Form, Input } from 'semantic-ui-react'

export default class NotesList extends Component {
  render() {
    return (
      <List selection divided size="big">
        <List.Item name="Note 1">
          <List.Content>
            Note one
          </List.Content>
        </List.Item>
        <List.Item name="Note 2">
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
