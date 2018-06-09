import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateQuantityThunk } from '../../store/cart';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.item.cartQuantity,
      totalPrice: ( props.item.cartQuantity * props.item.price )
    };
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
    this.setState( {totalPrice: (product.price * quantity) } );
    this.props.adjustQuantity(product, quantity);
  }

  render() {
    const item = this.props.item;
    return (
      <div>
      <Link to={`/products/${item.id}`}>
        <h4>{item.name}</h4>
      </Link>
      <h6>Subtotal - ${this.state.totalPrice}</h6>
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
