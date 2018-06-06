import axios from 'axios';

/*
  action types
*/

const ADD_PRODUCT = 'ADD_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const CHANGE_INPUT = 'CHANGE_INPUT';
const GET_PRODUCT = 'GET_PRODUCT';

/*
  action creators
*/
const addProductAction = product => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};
const updateAction = (id, updatedProduct) => {
  return {
    type: UPDATE_PRODUCT,
    updatedProduct,
    id,
  };
};

const deleteAction = id => {
  return {
    type: DELETE_PRODUCT,
    id,
  };
};

export const getProductAction = product => {
  return {
    type: GET_PRODUCT,
    product,
  };
};

export const changeInputAction = (inputName, inputValue) => {
  return {
    type: CHANGE_INPUT,
    inputValue,
    inputName,
  };
};

/*
  thunk creators
*/

export const addProductThunk = newProduct => {
  return async dispatch => {
    const { data } = await axios.post('/api/products', newProduct);
    console.log('product added to database');
    dispatch(addProductAction(data));
  };
};
export const updateProductThunk = (updatedProduct, productId) => {
  return async dispatch => {
    const { data } = await axios.put(
      `/api/products/${productId}`,
      updatedProduct
    );
    dispatch(updateAction(productId, data));
  };
};

export const deleteProductThunk = productId => {
  return dispatch => {
    // http request to api route for deleting
    // dispatch to update state
  };
};

export const getProductThunk = productId => {
  return async dispatch => {
    // const dummyProduct = {
    //   id: 2,
    //   name: 'Flamethrower',
    //   price: 1000,
    //   description: 'It throws flames!',
    //   inventory: 5,
    //   imageUrl:
    //     'https://bloximages.chicago2.vip.townnews.com/umudynamo.com/content/tncms/assets/v3/editorial/8/7a/87af1dfe-9de1-11e5-a860-f3a3a84a7c7b/56672efd1aa54.image.png?resize=300%2C169',
    // };
    const { data } = await axios.get(`/api/products/${productId}`);
    dispatch(getProductAction(data));
  };
};

const initialState = {
  currentProduct: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return { ...state, currentProduct: action.product };
    case ADD_PRODUCT:
      return {
        ...state,
        currentProduct: { ...action.product, new: true },
      };
    // add to products array when it's created
    case UPDATE_PRODUCT:
      return {
        ...state,
        currentProduct: { ...action.updatedProduct, updated: true },
      };
    // will also need to update products array when that is created
    case DELETE_PRODUCT:
      return { ...state, currentProduct: null };
    // will also need to delete product from products array in state
    case CHANGE_INPUT:
      return {
        ...state,
        currentProduct: {
          ...state.currentProduct,
          [action.inputName]: action.inputValue,
        },
      };
    default:
      return state;
  }
}