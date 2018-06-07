import axios from 'axios';

/*
  action types
*/

const GET_CATEGORIES = 'GET_CATEGORIES';

/*
  action creators
*/

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
  categories: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
