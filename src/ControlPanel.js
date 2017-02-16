//@flow
import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export default class ControlPanel extends Component {
  handleClick = (e, item) => {
    switch(item.name) {
      case "start":
      case "restart":
        this.props.changePage("run");
        break;
      case "back":
        this.props.changePage("home");
        break;
    }
  }

  currentPanel = (page) => {
    switch(this.props.page) {
      case "home":
        return (
          <Menu attached="bottom" widths="2">
            <Menu.Item name="start" onClick={this.handleClick}>
              <Icon name='video play outline' fitted color="teal" size="big"/>
            </Menu.Item>
            <Menu.Item onClick={this.handleClick}>
              <Icon name='bar chart' fitted color="teal" size="big" />
            </Menu.Item>
          </Menu>
        )
      case "run":
        return (
          <Menu attached="bottom" widths="3">
            <Menu.Item name="back" onClick={this.handleClick}>
              <Icon name="arrow left" fitted color="teal" size="big"/>
            </Menu.Item>
            <Menu.Item name="restart" onClick={this.handleClick}>
              <Icon name="video play outline" fitted color="teal" size="big" />
            </Menu.Item>
            <Menu.Item name="export" onClick={this.handleClick}>
              <Icon name='bar chart' fitted color="teal" size="big" />
            </Menu.Item>
          </Menu>
        )
    }
  }

  render() {
    return this.currentPanel()
  }
}
