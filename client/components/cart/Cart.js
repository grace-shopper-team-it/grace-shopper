import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { removeFromCartThunk, clearCartThunk } from '../../store/cart';
import { Link } from 'react-router-dom';

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
    const subTotalArr = items.map(item => {
      return Number(item.cartQuantity) * Number(item.price);
    });
    // func to find total
    const orderTotalFunc = arr => {
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
        <div>
          <h1> Shopping Cart </h1>
        </div>

        <div
          className="row"
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <div className="col-8 col-md-4" />
          <div className="col-6 col-md-4" style={{ marginBottom: 0 }}>
            {' '}
            Price{' '}
          </div>
          <div className="col-6 col-md-4" style={{ marginBottom: 0 }}>
            {' '}
            Quantity{' '}
          </div>
        </div>
        <hr />

        <div>
          {items.length ? (
            <div>
              {items.map(product => (
                <div key={product.id}>
                  <CartItem item={product} />
                  <button
                    className="btn btn-danger"
                    type="submit"
                    onClick={this.handleSubmit}
                    value={product.id}
                  >
                    Remove this item
                  </button>
                  <hr />
                </div>
              ))}
              <div className="row">
                <div className="col col-sm-2" style={{ marginRight: '9%' }} />
                <div className="col-8 col-md-4">
                  Cart Subtotal - ${orderTotal}
                </div>
                <Link className="col-4 col-sm-2" to="/checkout">
                  <button className="btn btn-primary" type="button">
                    Proceed to Checkout
                  </button>
                </Link>
                <button
                  style={{ maxWidth: '10%' }}
                  className="col-2 col-sm-2 btn btn-primary"
                  type="submit"
                  onClick={this.handleClearCartSubmit}
                >
                  Clear cart
                </button>
              </div>
            </div>
          ) : (
            <h4>Nothing in cart</h4>
          )}
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItemFromCart: productId => dispatch(removeFromCartThunk(productId)),
    clearCart: () => dispatch(clearCartThunk()),
    submitOrder: () => dispatch(),
  };
};

export default connect(
  mapState,
  mapDispatchToProps
)(Cart);
