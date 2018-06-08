import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateQuantityThunk } from '../../store/cart';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.item.cartQuantity
    };
    console.log(props.item.cartQuantity);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ quantity: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const product = this.props.item;
    const quantity = this.state.quantity;
    this.props.adjustQuantity(product, quantity);
  }

  render() {
    const item = this.props.item;
    return (
      <div>
        <h4>{item.name}</h4>
        <form>
          <label>
            <input
              type="number"
              min="1"
              value={this.state.quantity}
              onChange={this.handleChange}
            />
            <input type="submit" value="Adjust Quantity" onClick={this.handleSubmit} />
          </label>
        </form>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    adjustQuantity: (product, quantity) => dispatch(updateQuantityThunk(product, quantity))
  };
};

export default connect(
  null,
  mapDispatch
)(CartItem);
