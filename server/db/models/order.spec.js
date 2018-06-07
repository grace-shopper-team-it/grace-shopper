const { expect } = require('chai');
const chai = require('chai');
const db = require('../index');
const User = db.model('user');
const Order = db.model('order');
const Product = db.model('product');

const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

// xdescribe('Order model associations', async () => {
  // let codyOrder;
  // let foundCody;
  // let newProduct;
  // let newProduct2;
  // let cody;
  // await db.sync({force: true})
  // try {
  //   [cody, created] = await User.findOrCreate({where: {
  //     firstName: 'Cody',
  //     lastName: 'Bone',
  //     email: 'hellothere@gmail.com',
  //     password: '12345',
  //   }});
  //   codyOrder = await Order.build({ status: 'Created' });
  //   await codyOrder.save();
  //   //find created user instance
  //   foundCody = await User.findOne({
  //     where: {
  //       email: 'hellothere@gmail.com',
  //     },
  //   });
  //   //create products
  //   newProduct = await Product.build({
  //     name: 'shoes',
  //     description: 'some shoes',
  //     price: 3.5,
  //     inventory: 5,
  //   });
  //   newProduct2 = await Product.build({
  //     name: 'shirt',
  //     description: 'some shirt',
  //     price: 1.5,
  //     inventory: 3,
  //   });
  //   //save products
  //   await newProduct.save();
  //   await newProduct2.save();
  // } catch (error) {
  //   console.error(error);
  // }
//   it('has a user id', async () => {
//     await codyOrder.setUser(foundCody);
//     expect(codyOrder.userId).to.equal(cody[0].id);
//   });
//   //create new order
//   const codyOrder = await Order.create({ status: 'Created' });
//   //find created user instance
//   const foundCody = await User.findOne({
//     where: {
//       email: 'hello@gmail.com',
//     },
//   });
//   //create products
//   const newProduct = await Product.build({
//     name: 'shoes',
//     description: 'some shoes',
//     price: 3.5,
//     quantity: 5,
//   });
//   const newProduct2 = await Product.build({
//     name: 'shirt',
//     description: 'some shirt',
//     price: 1.5,
//     quantity: 3,
//   });
//   //save products
//   await db.save();
//   describe('Associations', () => {
//     it('has a user id', async () => {
//       await order.setUser(foundCody);
//       expect(order.userId).to.equal(cody.id);
//     });
//     it('can have many products', async () => {
//       await order.setProducts([newProduct, newProduct2]);
//       expect(order.getProducts()).to.deep.equal([newProduct, newProduct2]);
//     });
//   });
//   it('can have many products', async () => {
//     await codyOrder.setProducts([newProduct, newProduct2]);
//     expect(codyOrder.getProducts()).to.deep.equal([newProduct, newProduct2]);
//   });
//   describe('Order model data fields', () => {
//     it('must have one of four types of status: Created, Processing, Cancelled, Completed', () => {
//       it('should throw error when status is of wrong type', async () => {
//         try {
//           const order = await Order.create({ status: 'fulfilled' });
//         } catch (err) {
//           expect(err).to.be.an.instanceOf(Sequelize.ValidationError);
//         }
//       });
//     });
//     it('must belong to either a user or a guest session', async () => {
//       try {
//         const order3 = await Order.build({ guestId: 2, status: 'Processing' });
//         order3.save();
//         expect(order3.userId).to.equal(null);
//       } catch (err) {
//         console.error(error);
//       }
//     });
//   });
// });

//these tests are not working and I do not know why note from
