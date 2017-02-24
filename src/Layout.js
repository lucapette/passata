//@flow
import React, { Component } from "react"
import { Segment } from "semantic-ui-react"

import ContentPanel from "./ContentPanel"
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
        <ContentPanel changePage={this.changePage.bind(this)} page={this.state.page}/>

        <ControlPanel changePage={this.changePage.bind(this)} page={this.state.page}/>
      </div>
    )
  }
}
