import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';

class Cart extends Component {

  handleSubmit(event) {
    console.log(event.target.value);
  }

  render() {
    const items = this.props.cart.cart;
    return (
      <div>
      <h1> Cart </h1>
      {
        items.map(product =>
          (
          <div key={product.id}>
            <CartItem item={product} />
            <button
              type="submit"
              onClick={this.handleSubmit}
              value={product}>
              Remove this item
            </button>
          </div>
          ))
        }
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    cart: state.cart
  };
};

export default connect(
  mapState,
  null
)(Cart);
