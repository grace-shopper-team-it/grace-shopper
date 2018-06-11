import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { removeFromCartThunk, clearCartThunk } from '../../store/cart';

class Cart extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearCartSubmit = this.handleClearCartSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.removeItemFromCart(event.target.value);
  }

  handleClearCartSubmit(event) {
    event.preventDefault();
    this.props.clearCart();
  }

  render() {
    const items = this.props.cart.cart;
    // Getting subtotal of all items
    const subTotalArr = items.map((item) => {
      return (Number(item.cartQuantity) * Number(item.price));
    });
    // func to find total
    const orderTotalFunc = (arr) => {
      let total = 0;
      for (let i = 0; i < arr.length; i++) {
        total += arr[i];
      }
      return total;
    }; 
    // calls func on subtotal arr
    const orderTotal = orderTotalFunc(subTotalArr);
    return (
      <div>
      <h1> My Cart </h1>
        <div>
        {
          items.length
        ?
        <div>
        {
          items.map(product =>
          (
            <div key={product.id}>
              <CartItem item={product} />
              <button
                type="submit"
                onClick={this.handleSubmit}
                value={product.id}>
                Remove this item
              </button>
            </div>
            ))
        }
            <button
            type="submit"
            onClick={this.handleClearCartSubmit}
            >
            Clear cart
            </button>
            <h3>Cart Total -${orderTotal}</h3>
        </div>
        :
        <h4>Nothing in cart</h4>
      }
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromCart: (productId) => dispatch(removeFromCartThunk(productId)),
    clearCart: () => dispatch(clearCartThunk())
  };
};

export default connect(
  mapState,
  mapDispatchToProps
)(Cart);
