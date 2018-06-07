const { expect } = require('chai');
const request = require('supertest');
const db = require('../db');
const app = require('../index');
const { Product } = require('../db/models');

const formData = {
  name: 'Gibson Les Paul',
  description: 'Jimmy Page...need I say more?',
  price: 1000,
  inventory: 30,
  imageUrl:
    'https://images.reverb.com/image/upload/s--NTsE5Ca7--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1445355108/hwznlfqvvut4ysxuczmf.jpg',
  categories: 'hello goodbye',
};

describe('Products routes', () => {
  let cody;

  xdescribe('api/products/', () => {
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

  xdescribe('GET requests: ', () => {
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

  describe('POST requests', () => {
    it('/api/products', () => {
      return request(app)
        .post('/api/products')
        .send(formData)
        .expect(201)
        .then(res => {
          expect(res.body).to.be.an('object');
          expect(res.body.name).to.equal('Gibson Les Paul');
          expect(res.body.inventory).to.equal(30);
        });
    });
  });
  xdescribe('PUT requests', () => {
    it('/api/products/:id', async () => {
      const superCool = await Product.create({
        name: 'Super Cool',
        description: 'It is super cool',
        price: 5,
        inventory: 6,
        imageUrl:
          'https://images.reverb.com/image/upload/s--gF-GRKEs--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1360300164/y48agn5ayq6bbfyfzs9t.jpg',
      });
      return request(app)
        .put('/api/products/1')
        .send(formData)
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object');
          return Product.findById(1).then(product => {
            expect(product.name).to.equal('Gibson Les Paul');
            expect(product.inventory).to.equal(30);
          });
        });
    });
  });
});
