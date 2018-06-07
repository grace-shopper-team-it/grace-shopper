import axios from 'axios'

/*
  action types
*/

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const UPDATE_QUANTITY = 'UPDATE_QUANTITY'
const CLEAR_CART = 'CLEAR_CART'

/*
  action creators
*/
const addToCartAction = (product, quantity) => {
  return {
    type: ADD_TO_CART,
    product,
    quantity
  }
}

const removeFromCartAction = product => {
  return {
    type: REMOVE_FROM_CART,
    product
  }
}

const clearCartAction = () => {
  return {
    type: CLEAR_CART
  }
}

const updateQuantity = amount => {
  return {
    type: UPDATE_QUANTITY,
    amount
  }
}

export const fetchCart = () => {

}

const initialState = {
  cart: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const cartItem = Object.assign({}, )
      return { ...state, cart: [ ...state.cart, action.product ] }
    case REMOVE_FROM_CART:
      const updatedCart = state.cart.filter(product => Number(product.id) !== Number(action.product.id))
      return { ...state, cart: updatedCart }
    case CLEAR_CART:
      return { ...state, cart: [] }
    default:
      return state
  }
}
