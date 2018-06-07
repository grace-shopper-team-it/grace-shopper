import axios from 'axios';

/*
  action types
*/

const GET_CATEGORIES = 'GET_CATEGORIES';

/*
  action creators
*/

const initialState = {
  categories: [],
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

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, categories: action.categories };
    default:
      return state;
  }
}
