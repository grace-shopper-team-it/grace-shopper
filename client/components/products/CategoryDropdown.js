import React, { Component } from 'react';

export default class CategoryDropdow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props,
    };
  }
  render() {
    let { category } = this.state.category;
    console.log('Category===>', category);

    categories = categories.filter(function(item, pos) {
      return categories.indexOf(item.category) === pos;
    });
    // console.log('Category===>', categories);

    return (
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Categories
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">
            Action
          </a>
          <a className="dropdown-item" href="#">
            Another action
          </a>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </div>
    );
  }
}
