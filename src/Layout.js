//@flow
import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

import ContentPanel from './ContentPanel'
import ProgressPanel from './ProgressPanel'
import ControlPanel from './ControlPanel'

type Page = 'home' | 'run' | 'rest';

export default class Layout extends Component {
  state: {
    page: Page;
    selectedCategory?: string;
  };

  constructor() {
    super();
    this.state = {
      page: 'home',
      title: 'home'
    }
  }

  changePage = (page : Page) => {
    this.setState({page: page});
  }

  render() {
    return (
      <DocumentTitle title={`🍅 ${this.state.page} 🍅`}>
        <div id="container">
          <ContentPanel changePage={this.changePage} page={this.state.page}/>

          <ControlPanel changePage={this.changePage} page={this.state.page}/>

          <ProgressPanel changePage={this.changePage} page={this.state.page}/>
        </div>
      </DocumentTitle>
    )
  }
}
