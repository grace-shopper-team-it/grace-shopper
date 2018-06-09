import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import { AllOrders } from './AllOrders';
import sinon from 'sinon'

//to test for: does this page render a list of orders?
//how to test for authorization with react components??

describe('AllOrders component', () => {
  const mockGetOrders = sinon.spy();
  const mockUpdateOrder = sinon.spy();
  it('renders a list of orders', () => {
    let wrapper;
  });

})
