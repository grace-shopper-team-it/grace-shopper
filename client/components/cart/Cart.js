import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { removeFromCartThunk } from '../../store/cart';
import ClearCart from './ClearCart';

class Cart extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.removeItemFromCart(event.target.value);
  }

  render() {
    const items = this.props.cart.cart;
    return (
      <div>
      <h1> My Cart </h1>
        <div>
        <ClearCart />
        {
          items.length ?
          items.map(product =>
          (
            <div key={product.id}>
              <Link to={`/products/${product.id}`} />
              <CartItem item={product} />
              <button
                type="submit"
                onClick={this.handleSubmit}
                value={product.id}>
                Remove this item
              </button>
            </div>
          ))
      : <h4>Nothing in cart</h4>
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
    removeItemFromCart: (productId) => dispatch(removeFromCartThunk(productId))
  };
};

export default connect(
  mapState,
  mapDispatchToProps
)(Cart);
