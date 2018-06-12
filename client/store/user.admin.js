import axios from 'axios';

const GET_ALL_USERS = 'GET_ALL_USERS';
const GET_USER_INFO = 'GET_USER_INFO';
const CHANGE_USER_STATUS = 'CHANGE_USER_STATUS';

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
const changeUserStatusAction = user => {
  return {
    type: CHANGE_USER_STATUS,
    user,
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
export const changeUserStatusThunk = (userId, formData) => {
  return async dispatch => {
    const { data } = await axios.put(`/api/users/${userId}`, formData);
    dispatch(changeUserStatusAction(data));
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
    case CHANGE_USER_STATUS:
      return { ...state, selectedUser: action.user };
    default:
      return state;
  }
};
