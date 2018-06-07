import { expect } from 'chai';
import { fetchOrders, updateOrder } from './user';
import reducer from './user';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = { orders: []};

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })
  describe('fetchOrders', () => {
    it('eventually dispatches the GET_ORDERS action', () => {
      const user = {email: 'forrest@puppybook.com', password: 'forrest'};
      mockAxios.onGet('/api/orders').replyOnce(200)
      return store.dispatch(fetchOrders()).then(() => {
        const actions = store.actions();
        expect(actions[0].type).to.be.equal('GET_ORDERS')
        expect(actions[0].orders.length).to.exist
      })
    })
  })
})

//when I come back, make sure all of this is working...now let's think about how I want to spend my weekend!
