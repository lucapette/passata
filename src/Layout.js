//@flow
import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

import Timer from './timer'
import ContentPanel from './ContentPanel'
import ProgressPanel from './ProgressPanel'
import ControlPanel from './ControlPanel'

type Page = 'home' | 'run';

export default class Layout extends Component {
  state: {
    page: Page;
    progress?: number;
  };

  constructor() {
    super();
    this.state = {
      page: "home"
    }
  }

  updateProgress = (progress : number) => {
    console.log(progress);
    this.setState({progress});
  }

  changePage = (page : Page) => {
    if (page === "run") {
      let timer = new Timer();

      timer.on('tick', this.updateProgress);

      timer.start();
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
