const { expect } = require('chai');
const db = require('../index');
const User = db.model('user');
const Order = db.model('order')
const Review = db.model('review')
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

describe('Review model', () => {
  describe('Associations', () => {

  });
  describe('data fields', () => {

  })
})
