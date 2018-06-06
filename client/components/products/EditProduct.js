import React from 'react';
import { connect } from 'react-redux';
import ProductForm from './ProductForm';
import { getProductThunk, updateProductThunk } from '../../store/product';

const existingCategories = [
  { id: 1, name: 'Sports' },
  { id: 2, name: 'Music' },
  { id: 3, name: 'Heavy Metal' },
  { id: 4, name: 'Jazz' },
  { id: 5, name: 'Weird Stuff' },
];

class EditProduct extends React.Component {
  componentDidMount() {
    const productId = this.props.match.params.id;
    this.props.fetchProduct(productId);
  }
  render() {
    return (
      <ProductForm
        existingCategories={existingCategories}
        handleProduct={this.props.updateProduct}
      />
    );
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
