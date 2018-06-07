import React from 'react';
import { connect } from 'react-redux';
import {
  addExistingCategoryThunk,
  changeInputAction,
} from '../../store/product';

class CategoryForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.addCategory(this.props.currentProduct.id, event.target.value);
  };

  render() {
    const { categories } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="categories">Existing Categories</label>
        <select id="categories" name="categories">
          {categories.map(category => {
            return (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
        <button type="submit" className="btn btn-success">
          Add Category
        </button>
      </form>
    );
  }
}

const mapState = state => {
  return {
    currentProduct: state.product.currentProduct,
  };
};

const mapDispatch = dispatch => {
  return {
    addCategory: (productId, categoryId) => {
      dispatch(addExistingCategoryThunk(productId, categoryId));
    },
  };
};

export default connect(
  mapState,
  mapDispatch
)(CategoryForm);
