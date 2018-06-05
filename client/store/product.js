/*
  action types
*/

const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'

/*
  action creators
*/
const updateAction = (id, updatedProduct) => {
  return {
    type: UPDATE_PRODUCT,
    updatedProduct,
    id,
  }
}

const deleteAction = id => {
  return {
    type: DELETE_PRODUCT,
    id,
  }
}

/*
  thunk creators
*/

export const updateProductThunk = (formData, productId) => {
  return dispatch => {
    // http request to api route for updating
    // dispatch updated product to update state
  }
}

export const deleteProductThunk = productId => {
  return dispatch => {
    // http request to api route for deleting
    // dispatch to update state
  }
}

const initialState = {
  currentProduct: {
    name: 'Basketball',
    price: 30,
    averageRating: 4.5,
    description: "You use it to play basketball. It's some obscure game",
    stock: 50,
    imageUrl:
      'https://i5.walmartimages.com/asr/62f061c8-9eae-460b-8964-84877f89dfc6_1.63cb4384ad2e3927105b7cfe8aa71fcc.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
  },
}

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PRODUCT:
      return { ...state, currentProduct: action.updatedProduct }
    // will also need to update products array when that is created
    case DELETE_PRODUCT:
      return { ...state, currentProduct: null }
    // will also need to delete product from products array in state
    default:
      return state
  }
}
