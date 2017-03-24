//@flow
import React, { Component } from 'react'
import ProgressBar from './ProgressBar'

export default class ProgressPanel extends Component {
  render() {
    if (this.props.page == "home") {
      return null;
    }

    return (
      <ProgressBar changePage={this.props.changePage} page={this.props.page}/>
    )
  }
}
