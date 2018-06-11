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
const ADD_EXISTING_CATEGORY = 'ADD_EXISTING_CATEGORY';
const GET_CATEGORIES = 'GET_CATEGORIES';

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

const addExistingCategoryAction = product => {
  return {
    type: ADD_EXISTING_CATEGORY,
    product,
  };
};

export const getCategories = categories => {
  return {
    type: GET_CATEGORIES,
    categories,
  };
};

/*
  thunk creators
*/

const initialState = {
  products: [],
  currentProduct: {},
  categories: [],
};

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

export const addExistingCategoryThunk = (productId, categoryId) => {
  return async dispatch => {
    const { data } = await axios.post(
      `/api/products/${productId}/new/categories/${categoryId}`
    );
    dispatch(addExistingCategoryAction(data));
  };
};

export const getAllCategoriesThunk = () => {
  return function thunk(dispatch) {
    return axios
      .get('/api/products/category')
      .then(res => res.data)
      .then(categories => {
        const action = getCategories(categories);
        dispatch(action);
      });
  };
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
        currentProduct: action.product,
      };
    // add to products array when it's created
    case ADD_EXISTING_CATEGORY:
      return {
        ...state,
        currentProduct: action.product,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        currentProduct: action.updatedProduct,
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
    case GET_CATEGORIES:
      return { ...state, categories: action.categories };
    default:
      return state;
  }
}
