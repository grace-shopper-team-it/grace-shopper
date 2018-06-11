import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CategoryDropdown from './CategoryDropdown';
import ProductsCard from './ProductsCard';
import {
  getAllProductsThunk,
  getAllCategoriesThunk,
} from '../../store/product';

class AllProducts extends Component {
  state = { searchProduct: null };

  componentDidMount() {
    this.props.getAllProductsThunk();
    this.props.getAllCategoriesThunk();
  }
  handleChange(e) {
    this.setState({ searchProduct: e.target.value });
  }
  render() {
    let products = this.props.products.products;
    let categories = this.props.products.categories;
    if (this.state.searchProduct) {
      products = products.filter(product =>
        Object.values(product)
          .join('')
          .toLowerCase()
          .includes(this.state.searchProduct.toLowerCase())
      );
    }
    return (
      <div className="allProducts">
        <div className="pageHeader">
          <div className="container">
            <h2 className="title" style={{ textAlign: 'center' }}>
              All Products{' '}
            </h2>
          </div>
        </div>
        <div className="main">
          <div className="container">
            <div className="section">
              <div className="nav nav-bar">
                <h2 className="navbar-header" style={{ textAlign: 'center' }}>
                  Currently Available
                </h2>
                <form
                  style={{ display: 'flex' }}
                  className="form-inline"
                  role="search"
                  onSubmit={e => e.preventDefault()}
                >
                  <input
                    name="searchProduct"
                    type="text"
                    className="form-control mr-sm-2"
                    placeholder="Find your favorite product"
                    onChange={this.handleChange.bind(this)}
                  />
                  <button
                    type="submit"
                    className="btn btn-outline-success my-2 my-sm-0"
                  >
                    <i className="material-icons">search</i>
                  </button>
                </form>
                <CategoryDropdown categories={categories} />
              </div>
              <ProductsCard products={products} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapToProps = (state, ownProps) => {
  return {
    products: state.product,
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    getAllProductsThunk() {
      dispatch(getAllProductsThunk());
    },
    getAllCategoriesThunk() {
      dispatch(getAllCategoriesThunk());
    },
  };
};

export default connect(
  mapToProps,
  mapDispatchToProps
)(AllProducts);
