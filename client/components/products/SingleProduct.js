import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Product from './Product';
import DeleteProduct from './DeleteProduct';
import { getProductThunk } from '../../store/product';

class SingleProduct extends React.Component {
  componentDidMount() {
    const productId = this.props.match.params.id;
    this.props.fetchProduct(productId);
  }

  render() {
    const { currentUser, currentProduct } = this.props;
    return (
      <div className="container">
        <Product key={currentProduct.id} product={currentProduct} />
        {currentUser.isAdmin && (
          <div className="admin-product-options">
            <Link className="btn btn-primary" to="/products/new">
              New Product
            </Link>
            <Link
              className="btn btn-success"
              to={`/products/${currentProduct.id}/edit`}
            >
              Edit
            </Link>
            <DeleteProduct />
          </div>
        )}
      </div>
    );
  }
}

const mapState = state => {
  return {
    currentUser: state.user,
    currentProduct: state.product.currentProduct,
  };
};

const mapDispatch = dispatch => {
  return {
    fetchProduct: productId => dispatch(getProductThunk(productId)),
  };
};

export default connect(
  mapState,
  mapDispatch
)(SingleProduct);
