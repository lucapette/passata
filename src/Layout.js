//@flow
import React, { Component } from "react"
import { Segment } from "semantic-ui-react"

import ContentPanel from "./ContentPanel"
import ProgressPanel from "./ProgressPanel"
import ControlPanel from "./ControlPanel"

export default class Layout extends Component {
  constructor() {
    super();
    this.state = {page: "home"}
  }

  tick = (progress) => {
    this.setState({progress});
  }

  startTimer = (minutes = 1) => {
      var start = Date.now();
      var total = minutes * 60;

      setInterval(() => {
        var elapsed = Math.floor((Date.now() - start) / 1000);

        if (elapsed >= total || this.props.page === "home") {
          return
        } else {
          this.tick(Math.floor((elapsed/total) * 100));
        }
      }, 1000);
  }

  changePage = (page) => {
    if (page === "run") {
      this.startTimer();
    }

    this.setState({page})
  }

  render() {
    return (
      <div id="container">
        <ContentPanel changePage={this.changePage.bind(this)} page={this.state.page}/>

        <ControlPanel changePage={this.changePage.bind(this)} page={this.state.page}/>

        <ProgressPanel changePage={this.changePage.bind(this)} page={this.state.page} percent={this.state.progress}/>
      </div>
    )
  }
}
