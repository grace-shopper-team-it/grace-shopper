import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Product from './Product';
import DeleteProduct from './DeleteProduct';
import { getProductThunk } from '../../store/product';
import CategoryForm from './CategoryForm';
import './SingleProduct.css';

class SingleProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
    };
  }
  async componentDidMount() {
    const productId = this.props.match.params.id;
    this.props.fetchProduct(productId);
    let reviews = await axios.get(`/api/products/${productId}/reviews`);
    this.setState({ reviews: reviews.data });
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
            <Link className="btn btn-primary form-links" to="/products/new">
              New Product
            </Link>
            <Link
              className="btn btn-success form-links"
              to={`/products/${currentProduct.id}/edit`}
            >
              Edit
            </Link>
            <DeleteProduct productId={currentProduct.id} />
            <div className="current-categories">
              <h2>Categories</h2>
              {currentProduct.categories.map(category => {
                return <div key={category.id}>{category.name}</div>;
              })}
            </div>
            <CategoryForm />
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
