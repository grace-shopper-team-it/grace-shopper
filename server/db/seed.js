const db = require('../db');
const { User, Product, Review, Order, Category, ProductOrder } = require('./models');

const categories = [
  {
   name: 'Creepy'
  },
  {
    name: 'Squishy'
   },
   {
    name: 'Red'
   },
   {
    name: 'Squeaky'
   }
]

const users = [
  {
    firstName: 'Squeaks',
    lastName: 'The Clown',
    email: 'squeaks@clowntown.com',
    password: 'yoink!',
    isAdmin: true,
    googleId: null,
  },
  {
    firstName: 'Dinky',
    lastName: 'The Clown',
    email: 'dinky@clowntown.com',
    password: 'yoink!',
    isAdmin: true,
    googleId: null,
  },
  {
    firstName: 'Tatters',
    lastName: 'The Clown',
    email: 'tatters@clowntown.com',
    password: 'yoink!',
    isAdmin: true,
    googleId: null,
  },
  {
    firstName: 'Toodles',
    lastName: 'The Clown',
    email: 'toodles@clowntown.com',
    password: 'yoink!',
    isAdmin: false,
    googleId: null,
  },
  {
    firstName: 'Bim Bam',
    lastName: 'The Clown',
    email: 'bimbam@clowntown.com',
    password: 'yoink!',
    isAdmin: true,
    googleId: null,
  },
  {
    firstName: 'Snacks',
    lastName: 'The Creepy Clown',
    email: 'snacks@clowntown.com',
    password: 'yoink!',
    isAdmin: false,
    googleId: null,
  },
];

const productOrders = [{
  price: 20,
  cartQuantity: 2,
  orderId: 1,
  productId :3
}, {
  price: 20,
  cartQuantity: 3,
  orderId: 1,
  productId :1
}, {
  price: 20,
  cartQuantity: 3,
  orderId: 1,
  productId :5
}, {
  price: 20,
  cartQuantity: 3,
  orderId: 2,
  productId :2
}, {
  price: 20,
  cartQuantity: 1,
  orderId: 2,
  productId :3
}, {
  price: 20,
  cartQuantity: 1,
  orderId: 3,
  productId :4
}, {
  price: 20,
  cartQuantity: 1,
  orderId: 3,
  productId : 5
},
]

const products = [
  {
    name: 'Boots the Clown',
    description:
      'At this point, “creepy clowns” have been spotted in over a dozen cities, and at least one has supposedly lightly scratched a young boy. Whether or not we’re ready to admit it, our days of being able to walk down the street dressed as an evil jester with a chainsaw are over. Clown Purge has arrived. At this point, “creepy clowns” have been spotted in over a dozen cities, and at least one has supposedly lightly scratched a young boy. Whether or not we’re ready to admit it, our days of being able to walk down the street dressed as an evil jester with a chainsaw are over. Clown Purge has arrived.',
    price: 500,
    imageUrl: 'https://images.pexels.com/photos/208166/pexels-photo-208166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    inventory: 5,
  },
  {
    name: 'Shnauz the Nose',
    description:
      'At this point, “creepy clowns” have been spotted in over a dozen cities, and at least one has supposedly lightly scratched a young boy. Whether or not we’re ready to admit it, our days of being able to walk down the street dressed as an evil jester with a chainsaw are over. Clown Purge has arrived. At this point, “creepy clowns” have been spotted in over a dozen cities, and at least one has supposedly lightly scratched a young boy. Whether or not we’re ready to admit it, our days of being able to walk down the street dressed as an evil jester with a chainsaw are over. Clown Purge has arrived.',
    price: 500,
    imageUrl: 'https://images.pexels.com/photos/207990/pexels-photo-207990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    inventory: 5,
  },
  {
    name: 'Teeny the Hat',
    description:
      "At this point, “creepy clowns” have been spotted in over a dozen cities, and at least one has supposedly lightly scratched a young boy. Whether or not we’re ready to admit it, our days of being able to walk down the street dressed as an evil jester with a chainsaw are over. Clown Purge has arrived. At this point, “creepy clowns” have been spotted in over a dozen cities, and at least one has supposedly lightly scratched a young boy. Whether or not we’re ready to admit it, our days of being able to walk down the street dressed as an evil jester with a chainsaw are over. Clown Purge has arrived.",
    price: 500,
    imageUrl:
      'https://images.pexels.com/photos/208101/pexels-photo-208101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    inventory: 5,
  },
  {
    name: 'Flam the Clown',
    description:
      'At this point, “creepy clowns” have been spotted in over a dozen cities, and at least one has supposedly lightly scratched a young boy. Whether or not we’re ready to admit it, our days of being able to walk down the street dressed as an evil jester with a chainsaw are over. Clown Purge has arrived. At this point, “creepy clowns” have been spotted in over a dozen cities, and at least one has supposedly lightly scratched a young boy. Whether or not we’re ready to admit it, our days of being able to walk down the street dressed as an evil jester with a chainsaw are over. Clown Purge has arrived.',
    price: 500,
    imageUrl:
      'https://i1.wp.com/www.panelsonpages.com/wp-content/uploads/2009/10/drk-001-002.jpg',
    inventory: 5,
  },
  {
    name: 'Spork the Wary',
    description:
      'At this point, “creepy clowns” have been spotted in over a dozen cities, and at least one has supposedly lightly scratched a young boy. Whether or not we’re ready to admit it, our days of being able to walk down the street dressed as an evil jester with a chainsaw are over. Clown Purge has arrived. At this point, “creepy clowns” have been spotted in over a dozen cities, and at least one has supposedly lightly scratched a young boy. Whether or not we’re ready to admit it, our days of being able to walk down the street dressed as an evil jester with a chainsaw are over. Clown Purge has arrived..',
    price: 500,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSytzZVCaS-48L-unYj-3E_cNkUBdxMPX-sexyKQfId7i9G3ZnxVQ',
    inventory: 5,
  },
  {
    name: 'Baldy the Clown',
    description: 'At this point, “creepy clowns” have been spotted in over a dozen cities, and at least one has supposedly lightly scratched a young boy. Whether or not we’re ready to admit it, our days of being able to walk down the street dressed as an evil jester with a chainsaw are over. Clown Purge has arrived. At this point, “creepy clowns” have been spotted in over a dozen cities, and at least one has supposedly lightly scratched a young boy. Whether or not we’re ready to admit it, our days of being able to walk down the street dressed as an evil jester with a chainsaw are over. Clown Purge has arrived.',
    price: 500,
    imageUrl: 'https://images.pexels.com/photos/208166/pexels-photo-208166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    inventory: 5,
  },
  {
    name: 'Fangs the Clown',
    description: 'At this point, “creepy clowns” have been spotted in over a dozen cities, and at least one has supposedly lightly scratched a young boy. Whether or not we’re ready to admit it, our days of being able to walk down the street dressed as an evil jester with a chainsaw are over. Clown Purge has arrived. At this point, “creepy clowns” have been spotted in over a dozen cities, and at least one has supposedly lightly scratched a young boy. Whether or not we’re ready to admit it, our days of being able to walk down the street dressed as an evil jester with a chainsaw are over. Clown Purge has arrived.',
    price: 700,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtueQuuYtntc4vl2YCjCZZcS0WVB3mDwvDrPZoQqq9oa_DMe5',
    inventory: 5,
  },
  {
    name: 'Devil Clown',
    description: 'At this point, “creepy clowns” have been spotted in over a dozen cities, and at least one has supposedly lightly scratched a young boy. Whether or not we’re ready to admit it, our days of being able to walk down the street dressed as an evil jester with a chainsaw are over. Clown Purge has arrived. At this point, “creepy clowns” have been spotted in over a dozen cities, and at least one has supposedly lightly scratched a young boy. Whether or not we’re ready to admit it, our days of being able to walk down the street dressed as an evil jester with a chainsaw are over. Clown Purge has arrived.',
    price: 700,
    imageUrl: 'https://images.pexels.com/photos/476/man-person-red-white.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    inventory: 1,
  },
  {
    name: 'Foam Clown',
    description: "At this point, “creepy clowns” have been spotted in over a dozen cities, and at least one has supposedly lightly scratched a young boy. Whether or not we’re ready to admit it, our days of being able to walk down the street dressed as an evil jester with a chainsaw are over. Clown Purge has arrived. At this point, “creepy clowns” have been spotted in over a dozen cities, and at least one has supposedly lightly scratched a young boy. Whether or not we’re ready to admit it, our days of being able to walk down the street dressed as an evil jester with a chainsaw are over. Clown Purge has arrived.",
    price: 800,
    imageUrl: 'https://images.pexels.com/photos/792766/pexels-photo-792766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    inventory: 2,
  },
  {
    name: 'Large Sac',
    description: 'At this point, “creepy clowns” have been spotted in over a dozen cities, and at least one has supposedly lightly scratched a young boy. Whether or not we’re ready to admit it, our days of being able to walk down the street dressed as an evil jester with a chainsaw are over. Clown Purge has arrived. At this point, “creepy clowns” have been spotted in over a dozen cities, and at least one has supposedly lightly scratched a young boy. Whether or not we’re ready to admit it, our days of being able to walk down the street dressed as an evil jester with a chainsaw are over. Clown Purge has arrived.',
    price: 740,
    imageUrl: 'https://images.pexels.com/photos/3363/clown-fear-horror.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    inventory: 1,
  },
];

const reviews = [
  {
    content:
      'We took this ball to the beach and after close to 2 hours to pump it up, we pushed it around for about 10 fun filled minutes. That was when the wind picked it up and sent it huddling down the beach at about 40 knots. It destroyed everything in its path. Children screamed in terror at the giant inflatable monster that crushed their sand castles. Grown men were knocked down trying to save their families. The faster we chased it, the faster it rolled. It was like it was mocking us. Eventually, we had to stop running after it because its path of injury and destruction was going to cost us a fortune in legal fees. Rumor has it that it can still be seen stalking innocent families on the Florida panhandle. We lost it in South Carolina, so there is something to be said about its durability.',
    stars: 3,
  },
  {
    content:
      'We took this ball to the beach and after close to 2 hours to pump it up, we pushed it around for about 10 fun filled minutes. That was when the wind picked it up and sent it huddling down the beach at about 40 knots. It destroyed everything in its path. Children screamed in terror at the giant inflatable monster that crushed their sand castles. Grown men were knocked down trying to save their families. The faster we chased it, the faster it rolled. It was like it was mocking us. Eventually, we had to stop running after it because its path of injury and destruction was going to cost us a fortune in legal fees. Rumor has it that it can still be seen stalking innocent families on the Florida panhandle. We lost it in South Carolina, so there is something to be said about its durability.',
    stars: 4,
  },
  {
    content:
      'We took this ball to the beach and after close to 2 hours to pump it up, we pushed it around for about 10 fun filled minutes. That was when the wind picked it up and sent it huddling down the beach at about 40 knots. It destroyed everything in its path. Children screamed in terror at the giant inflatable monster that crushed their sand castles. Grown men were knocked down trying to save their families. The faster we chased it, the faster it rolled. It was like it was mocking us. Eventually, we had to stop running after it because its path of injury and destruction was going to cost us a fortune in legal fees. Rumor has it that it can still be seen stalking innocent families on the Florida panhandle. We lost it in South Carolina, so there is something to be said about its durability.',
    stars: 5,
  },
  {
    content:
      'We took this ball to the beach and after close to 2 hours to pump it up, we pushed it around for about 10 fun filled minutes. That was when the wind picked it up and sent it huddling down the beach at about 40 knots. It destroyed everything in its path. Children screamed in terror at the giant inflatable monster that crushed their sand castles. Grown men were knocked down trying to save their families. The faster we chased it, the faster it rolled. It was like it was mocking us. Eventually, we had to stop running after it because its path of injury and destruction was going to cost us a fortune in legal fees. Rumor has it that it can still be seen stalking innocent families on the Florida panhandle. We lost it in South Carolina, so there is something to be said about its durability.',
    stars: 3,
  },
  {
    content:
      'We took this ball to the beach and after close to 2 hours to pump it up, we pushed it around for about 10 fun filled minutes. That was when the wind picked it up and sent it huddling down the beach at about 40 knots. It destroyed everything in its path. Children screamed in terror at the giant inflatable monster that crushed their sand castles. Grown men were knocked down trying to save their families. The faster we chased it, the faster it rolled. It was like it was mocking us. Eventually, we had to stop running after it because its path of injury and destruction was going to cost us a fortune in legal fees. Rumor has it that it can still be seen stalking innocent families on the Florida panhandle. We lost it in South Carolina, so there is something to be said about its durability.',
    stars: 4,
  },
  {
    content:
      'We took this ball to the beach and after close to 2 hours to pump it up, we pushed it around for about 10 fun filled minutes. That was when the wind picked it up and sent it huddling down the beach at about 40 knots. It destroyed everything in its path. Children screamed in terror at the giant inflatable monster that crushed their sand castles. Grown men were knocked down trying to save their families. The faster we chased it, the faster it rolled. It was like it was mocking us. Eventually, we had to stop running after it because its path of injury and destruction was going to cost us a fortune in legal fees. Rumor has it that it can still be seen stalking innocent families on the Florida panhandle. We lost it in South Carolina, so there is something to be said about its durability.',
    stars: 4,
  },
];

const orders = [
  { status: 'Created', userEmail: 'squeaks@clowntown.com', street1: '444 tub Street', street2: null, city: 'Chicago', state: 'IL', zipCode: 60606 },
  { status: 'Processing', userEmail: 'dinky@clowntown.com', street1: '444 tub Street', street2: 'apt 2', city: 'Chicago', state: 'IL', zipCode: 60606 },
  { status: 'Created', userEmail: 'dinky@clowntown.com', street1: '444 tub Street', street2: 'apt 4', city: 'Chicago', state: 'IL', zipCode: 60606 },
  { status: 'Cancelled', userEmail: 'tatters@clowntown.com', street1: '444 tub Street', street2: 'apt 3', city: 'Chicago', state: 'IL', zipCode: 60606 },
  { status: 'Completed', userEmail: 'tatters@clowntown.com', street1: '444 tub Street', street2: null, city: 'Chicago', state: 'IL', zipCode: 60606 },
];

  function seed() {
    let createdUsers, createdProducts, createdReviews, createdOrders;

    // create products
    return Promise.all(products.map(product => Product.create(product)))
      .then(result => {
        createdProducts = result;

        //create users
        return Promise.all(users.map(user => User.create(user)));
      })
      .then(result => {
        createdUsers = result;
        // create reviews
        for (var i = 0; i < reviews.length; i++) {
          reviews[i].userId = createdUsers[i].id;
          reviews[i].productsId = createdUsers[i].id;
        }
        return Promise.all(reviews.map(review => Review.create(review)));
      })
      .then(result => {
        createdReviews = result;

        createdReviews.map((review, index) => {
          review.productId = createdProducts[index].id;
          review.save()
        })

        // create orders
        for (var i = 0; i < orders.length; i++) {
          orders[i].userId = createdUsers[i].id;
          orders[i].items = [
            {
              product: createdProducts[i],
              price: createdProducts[i].price,
              quantity: i + 1,
            },
          ];
        }
        return Promise.all(orders.map(order => Order.create(order)));
      })
      .then(result => {
        createdOrders = result

        //create Categories
        return Promise.all(categories.map(category => Category.create(category)))
      })
      .then(result => {
        createdCategories = result
        createdCategories.map(category => {
          category.addProducts(createdProducts)
          category.save()
        })

        //create Product Orders
        return Promise.all(productOrders.map(productOrder => ProductOrder.create(productOrder)))
      })
  }

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
