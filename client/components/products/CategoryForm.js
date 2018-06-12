import React from 'react';
import { connect } from 'react-redux';
import {
  addExistingCategoryThunk,
  getAllCategoriesThunk,
} from '../../store/product';

class CategoryForm extends React.Component {
  constructor() {
    super();
    this.state = {
      categoryId: 0,
    };
  }
  componentDidMount() {
    this.props.fetchCategories();
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.addCategory(this.props.currentProduct.id, this.state.categoryId);
  };
  handleChange = event => {
    this.setState({
      categoryId: event.target.value,
    });
  };

  render() {
    const { categories } = this.props;
    return (
      <form onSubmit={this.handleSubmit} id="category-form">
        <div id="category-dropdown">
          <label htmlFor="categories">
            <strong>Existing Categories</strong>
          </label>
          <select
            className="form-control category-select"
            id="categories"
            name="categories"
            onChange={this.handleChange}
          >
            <option key="nothing">-----</option>
            {categories.map(category => {
              return (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
          <button type="submit" className="btn btn-success category-btn">
            Add Category
          </button>
        </div>
      </form>
    );
  }
}

const mapState = state => {
  return {
    currentProduct: state.product.currentProduct,
    categories: state.product.categories,
  };
};

const mapDispatch = dispatch => {
  return {
    addCategory: (productId, categoryId) => {
      dispatch(addExistingCategoryThunk(productId, categoryId));
    },
    fetchCategories: () => dispatch(getAllCategoriesThunk()),
  };
};

export default connect(
  mapState,
  mapDispatch
)(CategoryForm);
