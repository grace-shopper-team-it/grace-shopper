import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      street1: '',
      street2: '',
      city: '',
      state: '',
      zipcode: 0,
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handlesub', this.props.cart.cart);
    this.props.submitOrder();
    // await thunk to create order (create order responds with orderId), get orderId from thunk, assign orderId to objects to post to productOrders
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    const items = this.props.cart.cart;
    console.log(items);
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
              onChange={this.handleInputChange} />
              (required)
          </label>
            <br />
          <label>
            Street 2
            <input
              name="street2"
              type="text"
              value={this.state.street2}
              onChange={this.handleInputChange} />
          </label>
            <br />
          <label>
            City
            <input
              name="city"
              type="text"
              value={this.state.city}
              onChange={this.handleInputChange} />
              (required)
          </label>
            <br />
          <label>
            State
            <input
              name="state"
              type="text"
              value={this.state.state}
              onChange={this.handleInputChange} />
              (required)
          </label>
            <br />
          <label>
            Zip Code
            <input
              name="zipcode"
              type="text"
              value={this.state.zipcode}
              onChange={this.handleInputChange} />
              (required)
          </label>
            <h4>Confirm your email</h4>
          <label>
            Email
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleInputChange} />
              (required)
          </label>
            <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    cart: state.cart,

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
