import React from 'react';
import { connect } from 'react-redux';
import ProductForm from './ProductForm';
import { getProductAction, addProductThunk } from '../../store/product';

const existingCategories = [
  { id: 1, name: 'Sports' },
  { id: 2, name: 'Music' },
  { id: 3, name: 'Heavy Metal' },
  { id: 4, name: 'Jazz' },
  { id: 5, name: 'Weird Stuff' },
];

class AddProduct extends React.Component {
  componentDidMount() {
    // set currentProduct to blank
    this.props.resetCurrentProduct();
  }
  render() {
    return (
      <ProductForm
        existingCategories={existingCategories}
        handleProduct={this.props.addProduct}
      />
    );
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
        })
      ),
    addProduct: newProduct => {
      dispatch(addProductThunk(newProduct));
    },
  };
};

export default connect(
  null,
  mapDispatch
)(AddProduct);
