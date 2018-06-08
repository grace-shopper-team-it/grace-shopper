import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { addToCartThunk } from '../../store/cart';
// import ItemSubmittedToCart from '../cart/'

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
    const cartArr = this.props.cart.cart;
    const isInCart = cartArr.includes(product);
    console.log(isInCart);
    return (
      <div>
        <h3>{product.name}</h3>
        <img src={product.imageUrl} />
        {
          !isInCart
        ?
          <div>
            <form>
              <label>
                Quantity:{' '}
                <input
                  type="number"
                  min="1"
                  value={this.state.quantity}
                  onChange={this.handleChange}
                />
              </label>
              <input
                type="submit"
                value="Add to cart"
                onClick={this.handleSubmit}
              />
            </form>
          </div>
        :
        <div>
          <p style={{color: "red"}}>Added to cart!</p>
        </div>
        }
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

<<<<<<< HEAD
const mapDispatch = dispatch => {
=======
const mapState = (state) => {
  return {
    cart: state.cart
  };
};

const mapDispatch = (dispatch) => {
>>>>>>> 01c68c6cf61756f9d165050ae2c99fa0ff28cc6c
  return {
    addToCart: (product, quantity) =>
      dispatch(addToCartThunk(product, quantity)),
  };
};

export default connect(
  mapState,
  mapDispatch
)(Product);
