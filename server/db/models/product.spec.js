const { expect } = require('chai')
const chai = require('chai')
const db = require('../index')
const Product = db.model('product')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

describe('Product model', () => {
  describe('Product attributes', () => {
    
    it('has a name which is not an empty string', async () => {
      try {
        await Product.create({
            description: 'a Cody, yes',
            price: 14.99,
            inventory: 3,
            imageUrl: 'https://files.slack.com/files-pri/T024FPYBQ-FB1991EUC/image.png',
            ratings: [2, 3, 4, 5],
          })
        } catch (error) {
          expect(error.message).to.include('notNull Violation')
        }
      })

    it('has a description and is not an empty string', async () => {
      try { 
        await Product.create({
            name: 'cody',
            description: '',
            price: 14.99,
            inventory: 3,
            imageUrl: 'https://files.slack.com/files-pri/T024FPYBQ-FB1991EUC/image.png',
            ratings: [2, 3, 4, 5],
          })
        } catch (error) {
          expect(error.message).to.include('Validation error')
        }
    })

    it('has a price', async () => {
      try {
        await Product.create({
          name: 'cody',
          description: 'a Cody, yes',
          inventory: 3,
          imageUrl: 'https://files.slack.com/files-pri/T024FPYBQ-FB1991EUC/image.png',
          ratings: [2, 3, 4, 5],
        })
      } catch (error) {
        expect(error.message).to.include('notNull Violation')
      }
    })

    it('has an inventory quantity', async () => {
      try {
        await Product.create({
          name: 'cody',
          description: 'a Cody, yes',
          price: 14.99,
          imageUrl: 'https://files.slack.com/files-pri/T024FPYBQ-FB1991EUC/image.png',
          ratings: [2, 3, 4, 5],
        })
      } catch (error) {
        expect(error.message).to.include('notNull Violation')
      }
    })
   
    it('has a default imageUrl if none is provided', async () => {
        const product = await Product.create({
            name: 'cody',
            description: 'a Cody, yes',
            price: 14.99,
            inventory: 3,
            ratings: [2, 3, 4, 5],
          })
          expect(product.imageUrl).to.include('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9Mk3VEey9qFFa0Oul4kPVnA51QBAHa4whl4NfsOdwerioFYr')
    })
  })
})
