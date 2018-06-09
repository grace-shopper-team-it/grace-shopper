import axios from 'axios';

/*
  action types
*/

const ADD_REVIEW = 'ADD_REVIEW';

/*
  action creators
*/

const addReview = review => {
  return {
    types: ADD_REVIEW,
    review,
  };
};

/*
  thunk creators
*/

export const addReviewThunk = (newReview, productId) => {
  return async dispatch => {
    const { data } = await axios.post(`/api/products/${productId}/reviews`);
    dispatch(addReview(data));
  };
};

const initialState = {
  review: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_REVIEW:
      return { ...state, review: action.review };
    default:
      return state;
  }
}
