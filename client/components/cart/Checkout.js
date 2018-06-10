import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handlesub', this.props.cart.cart);
    this.props.submitOrder();
  }

  render() {
    const items = this.props.cart.cart;
    console.log(items);
    return (
      <h2>Checkout Page</h2>
    );
  }
}

const mapState = (state) => {
  return {
    cart: state.cart
  };
};

const mapDispatch = (dispatch) => {
  return {
    submitOrder: (items, userInfo) => dispatch(submitOrderThunk(items, userInfo))
  };
};

export default connect(
  mapState,
  mapDispatch
)(Checkout);
