//@flow
import React, { Component } from 'react'
import { List, Form, Input } from 'semantic-ui-react'

class Category {
  name: string;
  selected: boolean;

  constructor(name: string) {
    this.name = name;
    this.selected = false;
  }

  toJSON() {
    return {
      name: this.name
    }
  }
}

export default class CategoriesList extends Component {
  state: {
    categories: Array<Category>
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
      categories = JSON.parse(data).map(cat => new Category(cat.name));
    }

    this.setState({
      categories: categories
    });
  }

  handleOnClick = (name: string) => {
    this.state.categories.forEach((category) => {
        if (category.name == name) {
          category.selected = !category.selected;
        } else {
          category.selected = false;
        }
    });

    this.setState({categories: this.state.categories});
  }

  handleKeyPress = (event: SyntheticInputEvent) => {
    if (event.key == 'Enter') {
      event.preventDefault();

      let categories = this.state.categories;
      categories.push(new Category(event.target.value));

      localStorage.setItem('categories', JSON.stringify(categories));
      event.target.value = "";

      this.setState({categories: categories});
    }
  }

  render() {
    return (
      <List selection divided size="big">
      {this.state.categories.map(cat => <List.Item onClick={this.handleOnClick.bind(this, cat.name)} key={cat.name} name={cat.name} active={cat.selected} content={cat.name}/>)}

      <List.Item>
        <List.Content>
          <Input icon="add" fluid placeholder="New category..." onKeyPress={this.handleKeyPress} transparent/>
        </List.Content>
      </List.Item>
      </List>
    )
  }
}
