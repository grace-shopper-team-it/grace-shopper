import React from 'react';
import { connect } from 'react-redux';
import ProductForm from './ProductForm';
import { getProductAction, addProductThunk } from '../../store/product';

class AddProduct extends React.Component {
  componentDidMount() {
    // set currentProduct to blank
    this.props.resetCurrentProduct();
  }
  render() {
    return <ProductForm handleProduct={this.props.addProduct} />;
  }
}

const mapDispatch = dispatch => {
  return {
    resetCurrentProduct: () =>
      dispatch(
        getProductAction({
          name: '',
          price: '',
          description: '',
          inventory: '',
          imageUrl: '',
          categories: '',
        })
      ),
    addProduct: newProduct => {
      return dispatch(addProductThunk(newProduct));
    },
  };
};

export default connect(
  null,
  mapDispatch
)(AddProduct);
