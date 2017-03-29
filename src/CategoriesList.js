//@flow
import React, { Component } from 'react'
import { List, Form, Input } from 'semantic-ui-react'

export default class CategoriesList extends Component {
  state: {
    categories: Array<string>
  }

  constructor() {
    super();

    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    let categories = [];
    let data = localStorage.getItem('categories');

    if (data != null) {
      categories = JSON.parse(data);
    }

    this.setState({
      categories: categories
    });
  }

  handleKeyPress(event: SyntheticInputEvent) {
    if (event.key == 'Enter') {
      event.preventDefault();

      let categories = this.state.categories;
      categories.push(event.target.value);

      localStorage.setItem('categories', JSON.stringify(categories));
      event.target.value = "";

      this.setState({categories: categories});
    }
  }

  render() {
    return (
      <List selection divided size="big">
        {this.state.categories.map(cat => <List.Item key={cat} name={cat} content={cat}/>)}

        <List.Item>
          <List.Content>
            <Input icon="add" fluid placeholder="New category..." onKeyPress={this.handleKeyPress.bind(this)} transparent/>
          </List.Content>
        </List.Item>
      </List>
    )
  }
}
