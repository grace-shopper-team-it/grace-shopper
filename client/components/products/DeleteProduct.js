import React from 'react';
import { connect } from 'react-redux';
import { deleteProductThunk } from '../../store/product';

class DeleteProduct extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.deleteProduct(this.props.productId);
    // REVIEW: redirect
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button className="btn btn-danger" type="submit">
          Delete
        </button>
      </form>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    deleteProduct: productId => {
      dispatch(deleteProductThunk(productId));
    },
  };
};

export default connect(
  null,
  mapDispatch
)(DeleteProduct);
