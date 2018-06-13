import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateQuantityThunk } from '../../store/cart';
import { FormErrors } from '../products/FormErrors';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subTotal: props.item.cartQuantity * props.item.price,
      quantity: props.item.cartQuantity,
      formErrors: {quantity: ''},
      inventory: props.item.inventory,
      quantityValid: true,
      formValid: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ quantity: Math.floor(event.target.value) },
  () => { this.validateField(value); });
  }

  validateField(value) {
    let fieldValidationErrors = this.state.formErrors;
    let quantityValid = this.state.quantityValid;
    quantityValid = value <= this.state.inventory;
    fieldValidationErrors.quantity = quantityValid ? '' : 'Not enough clowns in stock!!';
    this.setState({
      formErrors: fieldValidationErrors,
      quantityValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.quantityValid})
  }


  handleSubmit(event) {
    event.preventDefault();
    const product = this.props.item;
    const quantity = Math.floor(this.state.quantity);
    this.setState({ subTotal: product.price * quantity });
    this.props.adjustQuantity(product, quantity);
  }

  render() {
    const item = this.props.item;
    const maxQuant = item.inventory;
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
              max={maxQuant}
              value={this.state.quantity}
              onChange={this.handleChange}
            />
            <button
              disabled={(!this.state.formValid || this.state.quantity < 1)}
              className="btn btn-primary"
              type="submit"
              value="Adjust Quantity"
              onClick={this.handleSubmit}
            >
              Adjust Quantity
            </button>
            <FormErrors formErrors={this.state.formErrors} />
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
