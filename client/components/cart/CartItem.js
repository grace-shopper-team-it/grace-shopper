import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateQuantityThunk } from '../../store/cart';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.item.cartQuantity,
      subTotal: props.item.cartQuantity * props.item.price,
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
    this.setState({ subTotal: product.price * quantity });
    this.props.adjustQuantity(product, quantity);
  }

  render() {
    const item = this.props.item;
    return (
      <div
        className="row"
        style={{ display: 'flex', justifyContent: 'space-evenly' }}
      >
        <Link className="col-8 col-md-4" to={`/products/${item.id}`}>
          <h4>{item.name}</h4>
        </Link>
        <h6 className="col-8 col-md-4">${this.state.subTotal}</h6>
        <form className="col-8 col-md-4">
          <label style={{ display: 'flex' }}>
            <input
              className="form-control my-2 my-sm-0"
              style={{ maxWidth: '15%' }}
              type="number"
              min="1"
              value={this.state.quantity}
              onChange={this.handleChange}
            />
            <button
              className="btn btn-primary"
              type="submit"
              value="Adjust Quantity"
              onClick={this.handleSubmit}
            >
              Adjust Quantity
            </button>
          </label>
        </form>
      </div>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    adjustQuantity: (product, quantity) =>
      dispatch(updateQuantityThunk(product, quantity)),
  };
};

export default connect(
  null,
  mapDispatch
)(CartItem);
