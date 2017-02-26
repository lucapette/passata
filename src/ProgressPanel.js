//@flow
import React, { Component } from "react"
import { Progress } from "semantic-ui-react"

export default class ProgressPanel extends Component {
  render() {
    if (this.props.page == "home") {
      return null;
    }

    return (
      <Progress attached="bottom" color="teal" percent={this.props.percent}/>
    )
  }
}
