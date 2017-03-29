//@flow
import React, { Component } from 'react'
import { List, Segment, Form, Input } from 'semantic-ui-react'

import CategoriesList from './CategoriesList'
import NotesList from './NotesList'

const LISTS = {
  home: <CategoriesList />,
  run: <NotesList />,
  rest: <NotesList />,
}

export default class ContentPanel extends Component {
  render() {
    return (
      <Segment attached id="content">
        <Form>
          {LISTS[this.props.page]}
        </Form>
      </Segment>
    )
  }
}
