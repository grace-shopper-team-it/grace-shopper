const { expect } = require('chai');
const assert = require('assert');
const request = require('supertest');
const db = require('../db');
const app = require('../index');
const User = db.model('user');
const Order = db.model('order');
const Product = db.model('product');
const productOrder = db.model('productOrder');

//so I think I'm going to want to pull all orders and include productOrders as well....
//testing for route authentication is not working here....
//check out Kevin's telk telk

describe('Order routes', () => {
  const authUser = { email: 'forrest@puppybook.com', password: 'forrest' };

  describe('behavior for authenticated users', () => {
    const authenticatedUser = request.agent(app);

    beforeEach((done) => {
      authenticatedUser
        .post('/auth/login')
        .send(authUser)
        .end((err, res) => {
          if (err) throw err;
          assert(res.statusCode === 200, 'Login failed for tests with authentication');
          done();
        });
    });

    it('GET /api/orders renders all orders in the database', () => {
      return authenticatedUser
        .get('/api/orders')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array');
        });
    });
    it('GET /api/orders/:id shows details of one order', () => {
      return authenticatedUser
        .get('/api/orders/3')
        .expect(200)
        .then(res => {
          console.log('res.body', res.body);
          expect(res.body).to.be.an('object');
          expect(res.body.products.length).to.exist;
        });
    });
    it('PUT /api/orders/:id updates one order', () => {
      return authenticatedUser
        .put('/api/orders/3')
        .send({ status: 'Created' })
        .expect(200)
        .then(res => {
          expect(res.body[0]).to.be.an('object');
          expect(res.body[0].status).to.equal('Created');
        });
    });
  });
  describe('behavior for unauthenticated users', () => {
    it('GET /api/orders returns 403 status', () => {
      return request(app)
        .get('/api/orders')
        .expect(403)
        .then(res => {
          expect(res.text).to.equal('Not Authorized');
        });
    });
    it('GET /api/orders/:id returns 403 status', () => {
      return request(app)
        .get('/api/orders/3')
        .expect(403)
        .then(res => {
          expect(res.text).to.equal('Not Authorized');
        });
    });
    it('PUT /api/orders/:id returns 403 status', () => {
      return request(app)
        .put('/api/orders/3')
        .send({ status: 'Created' })
        .expect(403)
        .then(res => {
          expect(res.text).to.equal('Not Authorized');
        });
    });
  });
  describe('behavior for users that are not logged in', () => {
    it('GET /api/orders returns 403 status', () => {
      return request(app)
        .get('/api/orders/3')
        .expect(403)
        .then(res => {
          expect(res.text).to.equal('Not Authorized');
        });
    });
    it('GET /api/orders/:id returns 403 status', () => {
      return request(app)
        .get('/api/orders/3')
        .expect(403)
        .then(res => {
          expect(res.text).to.equal('Not Authorized');
        });
    });
    it('PUT /api/orders/:id returns 403 status', () => {
      return request(app)
        .get('/api/orders/3')
        .expect(403)
        .then(res => {
          expect(res.text).to.equal('Not Authorized');
        });
    });
  });
});
