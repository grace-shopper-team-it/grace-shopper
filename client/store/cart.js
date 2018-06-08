
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

const initialState = {
  //dummy data
  cart: [ {
    id: 1,
    name: 'clown',
    rating: 3.5,
    description: 'eiugrh fIOWAHGUIRW ofejhguieroils',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41PKN8W5CDL.jpg',
    stock: 5,
    price: 30,
    category: 'creepy',
    quantity: 2
  },
  {
    id: 2,
    name: 'nice clown',
    rating: 3.0,
    description: 'eiugrh fIOWAHGUIRW',
    imageUrl: 'https://i.ebayimg.com/images/g/LFUAAOSwKtlWjzVd/s-l300.jpg',
    stock: 3,
    price: 20,
    category: 'creepy',
    quantity: 3
  },
  {
    id: 3,
    name: 'nice toy',
    rating: 2.0,
    description: 'eiugrh fIOWAHGUIRW',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZZNPfu7n3fI5Zygu0qGXc1mtuXYGCD2oNGq-WxZ3hMBhYbhR',
    stock: 3.8,
    price: 25,
    category: 'nice',
    quantity: 4
  } ]
}

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
