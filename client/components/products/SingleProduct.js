import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
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
<<<<<<< HEAD
    if (!currentProduct.id || !currentProduct.categories) {
      return <div>LOADING...</div>;
    }
=======
    if (!currentProduct) return <Redirect to="/allProducts" />;
>>>>>>> cc1bcc852faa0fcb90da38b468d89272fc03eb2b
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
<<<<<<< HEAD
            <DeleteProduct />
            <h2>Categories</h2>
            {currentProduct.categories.map(category => {
              return <div key={category.id}>{category.name}</div>;
            })}
=======
            <DeleteProduct productId={currentProduct.id} />
>>>>>>> cc1bcc852faa0fcb90da38b468d89272fc03eb2b
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
