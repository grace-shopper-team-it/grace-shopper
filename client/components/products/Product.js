import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { addToCartThunk } from '../../store/cart';

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ quantity: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const product = this.props.product;
    const quantity = this.state.quantity;
    this.props.addToCart(product, quantity);
  }

  render() {
    const { product } = this.props;
    const cartIdArr = this.props.cart.cart.map(
      singleProduct => singleProduct.id
    );
    const isInCart = cartIdArr.includes(product.id);
    return (
      <div>
        <h3>{product.name}</h3>
        <img src={product.imageUrl} />
        <p>{`Price: ${product.price}`}</p>
        {!isInCart ? (
          <div>
            <form>
              <label>
                Quantity:{' '}
                <input
                  className="form-control my-2 my-sm-0"
                  style={{ maxWidth: '25%' }}
                  type="number"
                  min="1"
                  value={this.state.quantity}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <button
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
