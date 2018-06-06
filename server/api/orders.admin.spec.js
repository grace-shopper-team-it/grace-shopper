const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')
const Order = db.model('order')
const Product = db.model('product')
const productOrder = db.model('productOrder')


 //so I think I'm going to want to pull all orders and include productOrders as well....
//testing for route authentication is not working here....

 const myServer = 'http://localhost:8080'
 const adminDetails = {email: 'drevets@gmail.com', password: '12345'}

 const createAuthenticatedRequest = (server, loginDetails, done) => {
   const authenticatedRequest = request.agent();
   authenticatedRequest
    .get(server)
    .send(loginDetails)
    .end((err, res) => {
      if (err) {
        throw (err)
      }
      done(authenticatedRequest)
    })
 }

describe('Order routes', () => {
  describe('/api/orders', () => {
    it('GET /api/orders renders all orders in the database', () => {
      return request(app)
      .get('/api/orders')
      .expect(200)
      .then(res => {
        expect(res.body).to.be.an('array')
        expect(res.body[0].productOrders).to.have.property(length)
      })
    })
    it('GET /api/orders only shows orders to authorized users', () => {
      createAuthenticatedRequest(myServer, adminDetails, function(request){
        request
          .get('/api/orders')
          .expect(200, done)
      })
    })
  })
  describe('/api/orders/:id', () => {
    it('GET /api/orders/:id shows details of one order', () => {
      return request(app)
      .get('/api/orders/:3')
      .expect(200)
      .then(res => {
        expect(res.body).to.be.an('object')
        expect(res.body[0].productOrders).to.have.property(length)
      })
    })
    it('PUT /api/orders/:id updates one order', () => {
      return request(app)
      .put('/api/orders/:3', {status: 'Created'})
      .expect(200)
      .then(res => {
        expect(res.body).to.be.an('object')
        expect(res.body.status).to.equal('Created')
      })
    })
  })
})
