const { expect } = require('chai');
const db = require('../db');
const app = require('../index');
const agent = require('supertest')(app);
const Order = db.model('order')

describe('Order Post routes for cart checkout', () => {

  let newOrder1
  beforeEach(() => {
    newOrder1 = { status: 'Created', userEmail: 'person@gmail.com', street1: '344 Tub St', city: 'Boston', state: 'IL', zipCode: 60609 }
    const newOrder2 = { status: 'Created', userEmail: 'person2@gmail.com', street1: '324 Tub St', city: 'Boston', state: 'IL', zipCode: 60608 }
  });
    
    it('Post routes post orders to the DB', async () => {
      const response = await agent.post('/api/orderinfo')
      .send(newOrder1)
      .expect(201);
      console.log(response.body)
      const createdOrder = await Order.findById(response.body.id);
      expect(createdOrder.userEmail).to.be.equal('person@gmail.com');
  });
});
