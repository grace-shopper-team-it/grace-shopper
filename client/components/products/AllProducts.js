import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CategoryDropdown from './CategoryDropdown';
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
    console.log(categories);
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
                <CategoryDropdown />
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
              <div className="row">
                {products.map(product => {
                  return (
                    <div className="col-md-4" key={product.id}>
                      <div>
                        <div
                          className="card"
                          style={{ background: `url(${product.imageUrl})` }}
                        >
                          <div
                            className="card-content"
                            style={{ minHeight: '280px' }}
                          >
                            <Link to={'/products/' + product.id}>
                              <h3 className="card-title">{product.name}</h3>
                            </Link>

                            <p className="card-description">
                              {product.description.length < 50
                                ? product.description
                                : product.description.slice(0, 50) + '...'}
                            </p>
                            <p>{`In Stock: ${product.inventory}`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
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
