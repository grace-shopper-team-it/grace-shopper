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

    category = category.map(categ => Object.values(categ.category).join(''));
    category = category.filter((categ, pos) => {
      return category.indexOf(categ) === pos;
    });

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
          {category.map(categ => {
            return (
              <a className="dropdown-item" key={categ} href="#">
                {categ}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}
