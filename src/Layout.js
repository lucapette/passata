//@flow
import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

import Timer from './timer'

import ContentPanel from './ContentPanel'
import ProgressPanel from './ProgressPanel'
import ControlPanel from './ControlPanel'

type Page = 'home' | 'run' | 'rest';

export default class Layout extends Component {
  state: {
    page: Page;
    progress?: number;
  };

  timer: Timer;

  constructor() {
    super();
    this.state = {
      page: 'home'
    }

    this.timer = new Timer();
    this.timer.on('tick', this.tick);
    this.timer.on('done', this.startBreak);
  }

  tick = (progress : number) => {
    this.setState({progress});
  }

  startBreak = () => {
    this.changePage('rest');
  }

  changePage = (page : Page) => {
    if (this.timer.isRunning()) {
      this.timer.stop();
    }

    switch(page) {
      case 'run':
        this.timer.start();
        break;
      case 'rest':
        this.timer.start(300);
        break;
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
