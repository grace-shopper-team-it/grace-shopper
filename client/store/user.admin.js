import axios from 'axios';

const GET_ALL_USERS = 'GET_ALL_USERS';
const GET_USER_INFO = 'GET_USER_INFO';
const UPDATE_USER = 'UPDATE_USER';
const DELETE_USER = 'DELETE_USER';

const getAllUsersAction = users => {
  return {
    type: GET_ALL_USERS,
    users,
  };
};
const getUserInfoAction = user => {
  return {
    type: GET_USER_INFO,
    user,
  };
};
const updateUserAction = user => {
  return {
    type: UPDATE_USER,
    user,
  };
};
const deleteUserAction = userId => {
  return {
    type: DELETE_USER,
    userId,
  };
};

export const getAllUsersThunk = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/users');
    dispatch(getAllUsersAction(data));
  };
};
export const getUserInfoThunk = userId => {
  return async dispatch => {
    const { data } = await axios.get(`/api/users/${userId}`);
    dispatch(getUserInfoAction(data));
  };
};
export const updateUserThunk = (userId, formData) => {
  return async dispatch => {
    const { data } = await axios.put(`/api/users/${userId}`, formData);
    dispatch(updateUserAction(data));
  };
};
export const deleteUserThunk = userId => {
  return async dispatch => {
    await axios.delete(`/api/users/${userId}`);
    dispatch(deleteUserAction(userId));
  };
};

const initialState = {
  users: [],
  selectedUser: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: action.users };
    case GET_USER_INFO:
      return { ...state, selectedUser: action.user };
    case UPDATE_USER:
      return { ...state, selectedUser: action.user };
    case DELETE_USER:
      const updatedUserList = state.users.filter(
        user => user.id !== action.userId
      );
      return { ...state, users: updatedUserList };
    default:
      return state;
  }
};
