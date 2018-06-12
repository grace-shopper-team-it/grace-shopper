import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitOrderThunk, clearCartThunk } from '../../store/cart';
import axios from 'axios';
import history from '../../history';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      street1: '',
      street2: '',
      city: '',
      state: '',
      zipCode: 0,
      userEmail: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const userId = this.props.user.id;
    const orderObj = {
      userId,
      ...this.state,
      zipCode: Number(this.state.zipCode),
    };
    await this.props.submitOrderObj(orderObj);
    const newOrderId = this.props.cart.order.id;
    const newCartArr = this.props.cart.cart.map(item => {
      item.productId = item.id;
      item.orderId = newOrderId;
      item.price = Number(item.price);
      item.cartQuantity = Number(item.cartQuantity);
      return item;
    });
    await axios.post('/api/orderItems', newCartArr);
    // await thunk to create order (create order responds with orderId), get orderId from thunk, assign orderId to objects to post to productOrders
    this.props.clearCart();
    history.push('/payment');
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h2>Checkout Page</h2>
        <form onSubmit={this.handleSubmit}>
          <h4>Enter your shipping address</h4>
          <label>
            Street 1
            <input
              name="street1"
              type="text"
              value={this.state.street1}
              onChange={this.handleInputChange}
            />
            (required)
          </label>
          <br />
          <label>
            Street 2
            <input
              name="street2"
              type="text"
              value={this.state.street2}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            City
            <input
              name="city"
              type="text"
              value={this.state.city}
              onChange={this.handleInputChange}
            />
            (required)
          </label>
          <br />
          <label>
            State
            <input
              name="state"
              type="text"
              value={this.state.state}
              onChange={this.handleInputChange}
            />
            (required)
          </label>
          <br />
          <label>
            Zip Code
            <input
              name="zipCode"
              type="text"
              value={this.state.zipCode}
              onChange={this.handleInputChange}
            />
            (required)
          </label>
          <h4>Confirm your email</h4>
          <label>
            email
            <input
              name="userEmail"
              type="text"
              value={this.state.userEmail}
              onChange={this.handleInputChange}
            />
            (required)
          </label>
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

const mapState = state => {
  return {
    user: state.user,
    cart: state.cart,
  };
};

const mapDispatch = dispatch => {
  return {
    submitOrderObj: orderObj => dispatch(submitOrderThunk(orderObj)),
    clearCart: () => dispatch(clearCartThunk()),
  };
};

export default connect(
  mapState,
  mapDispatch
)(Checkout);
