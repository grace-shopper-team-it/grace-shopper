import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCategoriesThunk } from '../../store/category';

class CategoryDropdow extends Component {
  async componentDidMount() {
    await this.props.getAllCategoriesThunk();
  }
  render() {
    let category = this.props.categories.categories;
    console.log(category);

    category = category.map(categ => Object.values(categ.name).join(''));
    category = category.filter((categ, pos) => {
      return category.indexOf(categ) === pos;
    });
    console.log(category);

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

const mapToProps = (state, ownProps) => {
  return {
    categories: state.category,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAllCategoriesThunk() {
      dispatch(getAllCategoriesThunk());
    },
  };
};

export default connect(
  mapToProps,
  mapDispatchToProps
)(CategoryDropdow);
