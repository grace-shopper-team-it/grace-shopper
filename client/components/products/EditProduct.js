import React from 'react';
import { connect } from 'react-redux';
import ProductForm from './ProductForm';
import { getProductThunk, updateProductThunk } from '../../store/product';

class EditProduct extends React.Component {
  componentDidMount() {
    const productId = this.props.match.params.id;
    this.props.fetchProduct(productId);
  }
  render() {
    return <ProductForm handleProduct={this.props.updateProduct} />;
  }
}

const mapDispatch = dispatch => {
  return {
    fetchProduct: productId => dispatch(getProductThunk(productId)),
    updateProduct: (updatedProduct, productId) => {
      dispatch(updateProductThunk(updatedProduct, productId));
    },
  };
};

export default connect(
  null,
  mapDispatch
)(EditProduct);
