import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { addToCartThunk } from '../../store/cart';
import { FormErrors } from './FormErrors';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      formErrors: {quantity: ''},
      inventory: props.product.inventory,
      quantityValid: false,
      formValid: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateField = this.validateField.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ quantity: event.target.value },
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
    const product = this.props.product;
    const quantity = Math.floor(this.state.quantity);
    this.props.addToCart(product, quantity);
  }

  render() {
    const { product } = this.props;
    const maxQuant = product.inventory;
    const cartIdArr = this.props.cart.cart.map(
      singleProduct => singleProduct.id
    );
    const isInCart = cartIdArr.includes(product.id);
    return (
      <div>
        <h3>{product.name}</h3>
        <img style={{ maxWidth: '50%' }} src={product.imageUrl} />
        <p>{`Price: ${product.price}`}</p>
        {!isInCart ? (
          <div>
            <div>
              <FormErrors formErrors={this.state.formErrors} />
            </div>
            <form>
              <label>
                Quantity:{' '}
                <input
                  className="form-control my-2 my-sm-0"
                  style={{ maxWidth: '25%' }}
                  type="number"
                  min="1"
                  max={maxQuant}
                  value={this.state.quantity}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <button
                disabled={!this.state.formValid}
                className="btn btn-danger"
                type="submit"
                value="Add to cart"
                onClick={this.handleSubmit}
              >
                {' '}
                Add to cart
              </button>
            </form>
          </div>
        ) : (
          <div
            className="alert alert-danger"
            role="alert"
            style={{ maxWidth: '25%' }}
          >
            Added to cart!
          </div>
        )}
        <br />
        <p>{product.description}</p>
        <Link
          className="btn btn-secondary"
          to={`/products/${product.id}/review`}
        >
          Write a customer review
        </Link>
      </div>
    );
  }
}

const mapState = state => {
  return {
    cart: state.cart,
  };
};

const mapDispatch = dispatch => {
  return {
    addToCart: (product, quantity) =>
      dispatch(addToCartThunk(product, quantity)),
  };
};

export default connect(
  mapState,
  mapDispatch
)(Product);
