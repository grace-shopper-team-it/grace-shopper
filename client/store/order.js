import axios from 'axios';

//ACTION TYPES

const GET_ORDERS = 'GET_ORDERS';
const UPDATE_ORDER = 'UPDATE_ORDER';

//INITIAL STATE

const defaultOrders = [];

//ACTION CREATORS
const getOrders = orders => {
  return {
    type: GET_ORDERS,
    orders,
  };
};

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

export const updateOrderInDB = (orderId, update) => {
  return async dispatch => {
    const updatedOrder = await axios.put(`/api/orders/${orderId}`, update)
    dispatch(updateOrder(updatedOrder.data))
  }
}

export default function(state = defaultOrders, action) {
  console.log('state.orders', state.orders, 'state', state)
  switch (action.type) {
    case GET_ORDERS:
      return action.orders;
    case UPDATE_ORDER:
      return state.map(order => {
        if (order.id === action.order.id) {
          return action.order;
        }
        return order;
      });
    default:
      return state;
  }
}
