const { expect } = require('chai')
const db = require('../index')
const Product = db.model('product')

describe('Product model', () => {
  describe('Product attributes', () => {
    
    it('has a name which is not an empty string', async () => {

      await expect(
        Product.create({
          description: 'a Cody, yes',
          price: 14.99,
          quantity: 3,
          imageUrl: 'https://files.slack.com/files-pri/T024FPYBQ-FB1991EUC/image.png',
          ratings: [2, 3, 4, 5],
        })
      ).to.be.fulfilled
    })

    xit('has a description', async () => {
      await expect(
        Product.create({
          name: 'cody',
          description: 'a Cody, yes',
          price: 14.99,
          quantity: 3,
          imageUrl: 'https://files.slack.com/files-pri/T024FPYBQ-FB1991EUC/image.png',
          ratings: [2, 3, 4, 5],
        })
      ).to.be.rejected

    })

    xit('has a price', async () => {
      await expect(
        Product.create({
          name: 'cody',
          description: 'a Cody, yes',
          price: 14.99,
          quantity: 3,
          imageUrl: 'https://files.slack.com/files-pri/T024FPYBQ-FB1991EUC/image.png',
          ratings: [2, 3, 4, 5],
        })
      ).to.be.rejected
    })

    xit('has an inventory quantity', async () => {
      await expect(
        Product.create({
          name: 'cody',
          description: 'a Cody, yes',
          price: 14.99,
          quantity: 3,
          imageUrl: 'https://files.slack.com/files-pri/T024FPYBQ-FB1991EUC/image.png',
          ratings: [2, 3, 4, 5],
        })
      ).to.be.rejected
    })
   
    xit('has a default imageUrl if none is provided', async () => {
      await expect(
        Product.create({
          name: 'cody',
          description: 'a Cody, yes',
          price: 14.99,
          quantity: 3,
          imageUrl: 'https://files.slack.com/files-pri/T024FPYBQ-FB1991EUC/image.png',
          ratings: [2, 3, 4, 5],
        })
      ).to.be.rejected
    })

    xit('has a ratings array that collects integers of user ratings', async () => {
      await expect(
        Product.create({
          name: 'cody',
          description: 'a Cody, yes',
          price: 14.99,
          quantity: 3,
          imageUrl: 'https://files.slack.com/files-pri/T024FPYBQ-FB1991EUC/image.png',
          ratings: [2, 3, 4, 5],
        })
      ).to.be.rejected
    })

    xit('has a virtual column containing its average rating', async () => {
      await expect(
        Product.create({
          name: 'cody',
          description: 'a Cody, yes',
          price: 14.99,
          quantity: 3,
          imageUrl: 'https://files.slack.com/files-pri/T024FPYBQ-FB1991EUC/image.png',
          ratings: [2, 3, 4, 5],
        })
      ).to.be.rejected
    })

    })
})
