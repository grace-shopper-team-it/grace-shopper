import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import { AllOrders } from './AllOrders';
import {SingleOrderItem} from './SingleOrderItem'
import sinon from 'sinon'

//to test for: does this page render a list of orders?
//how to test for authorization with react components??
//do I need to import these from the AllOrders component??

fakeOrders = [{orderId: 1, date: 1/2/3, products: [prod1, prod2,], status: 'Completed'}, {orderId: 1, date: 1/2/3, products: [prod1, prod2], status: 'Fulfilled'}, {orderId: 1, date: 1/2/3, products: [prod1, prod2], status: 'Completed'}]

describe('AllOrders component', () => {
  const mockGetOrders = sinon.spy(getOrders);
  const allOrdersWrapper

  sinon.spy(AllOrders.prototype, 'componentDidMount')

  beforeEach(() => {
    allOrdersWrapper = shallow(<AllOrders orders={fakeOrders}/>)
  });

  afterEach(() => {
    mockGetOrders.restore()
  });

  it('renders a list of orders', () => {
    const orderList = allOrdersWrapper.find(<SingleOrderItem/>).render()
    expect(orderList.children().length).to.equal(fakeOrders.length)
  });
  it('calls componentDidMount', () => {
    const wrapper = mount(<AllOrders/>)
    expect(AllOrders.prototype.componentDidMount.calledOnce).to.equal.(true)
  })
  it('calls getOrders upon mounting', () => {
    expect(mockGetOrders).calledOnce.to.equal.(true)
  });
  it('can sort orders based on their status', () => {

  });
  it('renders a search box', () => {

  });
  it('can search orders based on status', () => {

  })
})
