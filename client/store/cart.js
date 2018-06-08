
import axios from 'axios';

/*
  action types
*/

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const CLEAR_CART = 'CLEAR_CART';

/*
  action creators
*/

const addToCartAction = (product, quantity) => {
  return {
    type: ADD_TO_CART,
    product,
    quantity,
  };
};

const removeFromCartAction = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    productId,
  };
};

const clearCartAction = () => {
  return {
    type: CLEAR_CART,
  };
};

const updateQuantityAction = (product, quantity) => {
  return {
    type: UPDATE_QUANTITY,
    product,
    quantity
  }
}

export const addToCartThunk = (product, quantity) => {
  return (dispatch) => {
    const action = addToCartAction(product, quantity);
    dispatch(action);
  };
};

export const updateQuantityThunk = (product, quantity) => {
  return (dispatch) => {
    const action = updateQuantityAction(product, quantity);
    dispatch(action);
  };
};

export const removeFromCartThunk = (productId) => {
  return (dispatch) => {
    const action = removeFromCartAction(productId);
    dispatch(action);
  };
};

export const clearCartThunk = () => {
  return (dispatch) => {
    const action = clearCartAction();
    dispatch(action);
  }
}

const initialState = {
  //dummy data
  cart: []
};

export default function (state = initialState, action) {
  // adding 'quantity' property to products when they are passed to the cart
  switch (action.type) {
    case ADD_TO_CART: {
      const cartItem = Object.assign(action.product, { cartQuantity: action.quantity });
      return { ...state, cart: [ ...state.cart, cartItem ] };
    }
    case UPDATE_QUANTITY: {
    // find product to update, creates new obj with updated quantity, filters out old obj of state, adds newObj to newArr
      const objToBeUpdated = state.cart.find((product) => product.id === action.product.id);
      const newObj = Object.assign(objToBeUpdated, { cartQuantity: action.quantity })
      const updatedCart = state.cart.filter(product => Number(product.id) !== Number(action.product.id));
      return { ...state, cart: [ ...updatedCart, newObj ]};
    }
    case REMOVE_FROM_CART: {
      const updatedCart = state.cart.filter(product => Number(product.id) !== Number(action.productId));
      return { ...state, cart: updatedCart };
    }
    case CLEAR_CART:
      return { ...state, cart: [] };
    default:
      return state;
  }
}
