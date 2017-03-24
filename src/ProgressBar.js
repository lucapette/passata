//@flow
import React, { Component } from 'react'
import { Progress } from 'semantic-ui-react'

import Timer from './timer'

import _ from 'lodash'
import DocumentTitle from 'react-document-title'

export default class ProgressBar extends Component {
  state: {
    percent: number;
  };

  timer: Timer;

  constructor() {
    super();

    this.timer = new Timer();
    this.timer.on('tick', this.tick);
    this.timer.on('done', this.startBreak);

    this.timer.start();
  }

  tick = (percent: number) => {
    this.setState({percent});
  }

  startBreak = () => {
    this.timer = new Timer();
    this.timer.on('tick', this.tick);
    this.timer.start(300);

    this.props.changePage('rest');
  }

  render() {
    return (
      <DocumentTitle title={`🍅 ${_.join(_.compact([this.props.page, this.timer.clockFormat()]), ' - ')} 🍅`}>
        <Progress attached="bottom" color="teal" percent={this.props.percent}/>
      </DocumentTitle>
    )
  }
}
