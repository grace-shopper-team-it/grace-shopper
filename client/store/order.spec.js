import { expect } from 'chai';
import { fetchOrders, updateOrderInDB } from './order';
import reducer from './order';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

const fakeOrders = [
  { id: 1, status: 'Created' },
  { id: 2, status: 'Created' },
  { id: 3, status: 'Created' },
];

const fakeUpdate = { id: 1, status: 'Cancelled' };

const fakeUpdatedOrders = [
  { id: 1, status: 'Cancelled' },
  { id: 2, status: 'Created' },
  { id: 3, status: 'Created' },
];

const updateAction = {
  type: 'UPDATE_ORDER',
  order: fakeUpdate,
};

const getOrdersAction = {
  type: 'GET_ORDERS',
  orders: fakeOrders,
};

describe('thunk creators', () => {
  let store;
  let mockAxios;

  const initialState = { orders: [] };

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    store = mockStore(initialState);
  });

  afterEach(() => {
    mockAxios.restore();
    store.clearActions();
  });

  describe('fetchOrders', () => {
    it('eventually dispatches the GET_ORDERS action', () => {
      const fakeOrders = [
        { id: 1, name: 'a clown shoe' },
        { id: 2, name: 'a clown nose' },
      ];

      mockAxios.onGet('/api/orders').replyOnce(200, fakeOrders);

      return store.dispatch(fetchOrders()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).to.equal('GET_ORDERS');
        expect(actions[0].orders).to.be.deep.equal(fakeOrders);
      });
    });
  });
  describe('updateOrderInDB', () => {
    xit('eventually dispatches the UPDATE_ORDER action', () => {
      //update an order'

      mockAxios.onPut('/api/orders/1').replyOnce(200, fakeUpdate);
      return store.dispatch(updateOrderInDB(1, fakeUpdate)).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).to.equal('UPDATE_ORDER');
        expect(actions[0].order).to.be.deep.equal(fakeUpdate);
      });
    });
  });
  describe('the reducer', () => {
    xit('correctly puts orders on state', () => {
      let orderState = reducer(initialState, getOrdersAction);
      expect(orderState).to.be.deep.equal(fakeOrders);
    });
    xit('correctly updates orders on state', () => {
      let orderState = reducer(fakeOrders, updateAction);
      expect(orderState).to.be.deep.equal(fakeUpdatedOrders);
    });
  });
});
