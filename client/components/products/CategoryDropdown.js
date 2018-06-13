import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CategoryDropdow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let category = this.props.categories;

    return (
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          style={{ marginTop: '5px' }}
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Categories
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <option key="nothing">-----</option>

          {category.map(categ => {
            return (
              <Link
                to={'/category/' + categ.id}
                className="dropdown-item"
                key={categ.id}
                value={categ}
              >
                {categ.name}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CategoryDropdow;
