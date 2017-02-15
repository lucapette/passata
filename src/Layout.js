//@flow
import React, { Component } from 'react'
import { Menu, Icon, Grid } from 'semantic-ui-react'

export default class Layout extends Component {
  render() {
    return (
      <div id="container">
        <Grid celled>
          <Grid.Row columns={1} stretched>
            <Grid.Column className="content">
              This is a segment
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2} stretched textAlign="center">
            <Grid.Column>
              <Icon name='video play outline' fitted color="red" size="large"/>
            </Grid.Column>
            <Grid.Column>
              <Icon name='bar chart' fitted color="red" size="large" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
