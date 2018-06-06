const { expect } = require('chai');
const request = require('supertest');
const db = require('../db');
const app = require('../index');
const Product = db.model('products');

describe('Products routes', () => {
  let cody;
  beforeEach(() => {
    return db.sync({ force: true });
  });
});

describe('api/products/', () => {
  let product1;
  let product2;
  beforeEach(function() {
    let promise1 = Product.create({
      name: 'clown',
      rating: 3.5,
      description: 'eiugrh fIOWAHGUIRW ofejhguieroils',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/41PKN8W5CDL.jpg',
      stock: 5,
      price: 30,
    });
    let promise2 = Products.create({
      name: 'nice clown',
      rating: 3.0,
      description: 'eiugrh fIOWAHGUIRW',
      imageUrl:
        'https://thetoystimeforgot.com/wp-content/uploads/2017/12/RONALD-MCDONALD1.jpg',
      stock: 3,
      price: 20,
    });
    return Promise.all([promise1, promise2]).then(results => {
      [product1, product2] = results;
    });
  });
});

describe('GET requests: ', () => {
  it('/api/products', () => {
    return request(app)
      .get('/api/products')
      .expect(200)
      .then(res => {
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.lengthOf(2);
      });
  });
  it('/api/products/:id', () => {
    return request(app)
      .get('/api/products/' + product1.id)
      .expect(200)
      .then(res => {
        expect(res.body).to.be.an('object');
        expect(res.body.name).to.be.equal(product1.name);
        expect(res.body.rating).to.be.equal(product1.rating);
      });
  });
});
