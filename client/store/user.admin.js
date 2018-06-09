import axios from 'axios';

const GET_ALL_USERS = 'GET_ALL_USERS';

const getAllUsersAction = users => {
  return {
    type: GET_ALL_USERS,
    users,
  };
};

export const getAllUsersThunk = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/users');
    dispatch(getAllUsersAction(data));
  };
};

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.users;
    default:
      return state;
  }
};
