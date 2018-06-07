import axios from 'axios';

/*
  action types
*/

const ADD_PRODUCT = 'ADD_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const CHANGE_INPUT = 'CHANGE_INPUT';
const GET_PRODUCT = 'GET_PRODUCT';
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';

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

export const getAllProducts = products => {
  return {
    type: GET_ALL_PRODUCTS,
    products,
  };
};

/*
  thunk creators
*/

export const addProductThunk = newProduct => {
  return async dispatch => {
    const { data } = await axios.post('/api/products', newProduct);
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
  return async dispatch => {
    await axios.delete(`/api/products/${productId}`);
    dispatch(deleteAction(productId));
  };
};

export const getProductThunk = productId => {
  return async dispatch => {
    const { data } = await axios.get(`/api/products/${productId}`);
    dispatch(getProductAction(data));
  };
};

const initialState = {
  products: [],
  // currentProduct: {
  //   id: 1,
  //   name: 'Basketball',
  //   price: 30,
  //   averageRating: 4.5,
  //   description: "You use it to play basketball. It's some obscure game",
  //   stock: 50,
  //   imageUrl:
  //     'https://i5.walmartimages.com/asr/62f061c8-9eae-460b-8964-84877f89dfc6_1.63cb4384ad2e3927105b7cfe8aa71fcc.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
  // },
};

export const getAllProductsThunk = () => {
  return function thunk(dispatch) {
    return axios
      .get('/api/products')
      .then(res => res.data)
      .then(products => {
        const action = getAllProducts(products);
        dispatch(action);
      });
  };
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, products: action.products };
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
