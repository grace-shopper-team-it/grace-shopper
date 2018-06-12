import axios from 'axios';

//ACTION TYPES

const GET_ORDERS = 'GET_ORDERS';
const UPDATE_ORDER = 'UPDATE_ORDER';
const GET_ORDER = 'GET_ORDER'

//INITIAL STATE

const defaultOrders = {
  orders: [],
  order: {},
};

//ACTION CREATORS
const getOrders = orders => {
  return {
    type: GET_ORDERS,
    orders,
  };
};

const getOrder = order => {
  return {
    type: GET_ORDER,
    order
  }
}

const updateOrder = order => {
  return {
    type: UPDATE_ORDER,
    order,
  };
};

//THUNK CREATORS

export const fetchOrders = () => {
  return async dispatch => {
    const orders = await axios.get('/api/orders');
    dispatch(getOrders(orders.data));
  };
};

export const fetchOrder = (orderId) => {
  return async dispatch => {
    const order = await axios.get(`/api/orders/${orderId}`)
    dispatch(getOrder(order.data))
  }
}

export const updateOrderInDB = (orderId, update) => {
  const statusUpdate = {status: update}
  return async dispatch => {
    const updatedOrderData = await axios.put(`/api/orders/${orderId}`, statusUpdate)
    const updatedOrder = updatedOrderData.data
    dispatch(updateOrder(updatedOrder))
  }
}

export default function(state = defaultOrders, action) {
  switch (action.type) {
    case GET_ORDERS:
      return {...state, orders: action.orders};
    case GET_ORDER:
      return {...state, order: action.order}
    case UPDATE_ORDER:
      return {...state, order: action.order, orders: state.orders.map(order => {
        if (order.id === action.order.id) {
          return action.order;
        }
        return order;
      })}
    default:
      return state;
  }
}
