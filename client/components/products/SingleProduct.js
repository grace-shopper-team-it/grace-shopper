import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Product from './Product';
import DeleteProduct from './DeleteProduct';
import { getProductThunk } from '../../store/product';
import CategoryForm from './CategoryForm';
import Reviews from './Reviews';

/*
  dummy data
*/
const existingCategories = [
  { id: 1, name: 'Sports' },
  { id: 2, name: 'Music' },
  { id: 3, name: 'Heavy Metal' },
  { id: 4, name: 'Jazz' },
  { id: 5, name: 'Weird Stuff' },
];
/*
  dummy data
*/

class SingleProduct extends React.Component {
  componentDidMount() {
    const productId = this.props.match.params.id;
    this.props.fetchProduct(productId);
  }

  render() {
    const { currentUser, currentProduct } = this.props;
    if (!currentProduct) return <Redirect to="/allProducts" />;
    if (!currentProduct.id || !currentProduct.categories) {
      return <div>LOADING...</div>;
    }
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
            <DeleteProduct productId={currentProduct.id} />
            <h2>Categories</h2>
            {currentProduct.categories.map(category => {
              return <div key={category.id}>{category.name}</div>;
            })}
            <CategoryForm categories={existingCategories} />
            <Reviews />
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
