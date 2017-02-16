//@flow
import React, { Component } from "react"
import { Segment } from "semantic-ui-react"

import ControlPanel from "./ControlPanel"

export default class Layout extends Component {
  constructor() {
    super();
    this.state = {page: "home"}
  }

  changePage = (page) => {
    this.setState({page})
  }

  render() {
    return (
      <div id="container">
        <Segment attached id="content">
          This is a segment
        </Segment>

        <ControlPanel changePage={this.changePage.bind(this)} page={this.state.page}/>
      </div>
    )
  }
}
