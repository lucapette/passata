//@flow
import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export default class ControlPanel extends Component {
  handleClick = (e : SyntheticEvent, item : Object ) => {
    console.log(typeof item);
    switch(item.name) {
      case "start":
      case "restart":
        this.props.changePage("run");
        break;
      case "void":
        this.props.changePage("home");
        break;
    }
  }

  render() {
    switch(this.props.page) {
      case "home":
        return (
          <Menu attached="bottom" widths="2">
            <Menu.Item name="start" onClick={this.handleClick}>
              <Icon name="video play outline" fitted color="teal" size="big"/>
            </Menu.Item>
            <Menu.Item onClick={this.handleClick}>
              <Icon name="bar chart" fitted color="teal" size="big" />
            </Menu.Item>
          </Menu>
        )
      case "run":
        return (
          <Menu attached widths="1">
            <Menu.Item name="void" onClick={this.handleClick}>
              <Icon name="remove" fitted color="teal" size="big"/>
            </Menu.Item>
          </Menu>
        )
    }
  }
}
