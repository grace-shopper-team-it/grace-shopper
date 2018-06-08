// const db = require('../server/db');
// const { User, Product, Review, Order, Category } = require('../server/db/models');

// const users = [
//   {
//     firstName: 'Forrest',
//     lastName: 'Weiswolf',
//     email: 'forrest@puppybook.com',
//     password: 'forrest',
//     isAdmin: true,
//     googleId: null,
//   },
//   {
//     firstName: 'Elisabeth',
//     lastName: 'Seite',
//     email: 'eli@puppybook.com',
//     password: 'eli',
//     isAdmin: true,
//     googleId: null,
//   },
//   {
//     firstName: 'Jannine',
//     lastName: 'Chain',
//     email: 'j9@puppybook.com',
//     password: 'j9',
//     isAdmin: true,
//     googleId: null,
//   },
//   {
//     firstName: 'Swyx',
//     lastName: 'Chain',
//     email: 'swyx@puppybook.com',
//     password: 'swyx',
//     isAdmin: false,
//     googleId: null,
//   },
//   {
//     firstName: 'Admin',
//     lastName: 'Chon',
//     email: 'admin@admin.com',
//     password: 'admin',
//     isAdmin: true,
//     googleId: null,
//   },
//   {
//     firstName: 'User',
//     lastName: 'Awesome',
//     email: 'user@user.com',
//     password: 'user',
//     isAdmin: false,
//     googleId: null,
//   },
// ];

// const products = [
//   {
//     name: 'Strawberry',
//     description:
//       'Whether it is in the show ring, competing in obedience, training for water rescue or working with draft carts and sleds, our Newfoundlands posses all the qualities attributed to this breed. Our Newfoundlands are raised in a loving family environment with acres of fenced in woodlands to play. Our Newfoundlands are a part of our family and as a family we participate in their obedience and conformation classes as well as many other events.',
//     price: 500,
//     imageUrl: 'https://www.google.com/imgres',
//     inventory: 5,
//   },
//   {
//     name: 'Caramel',
//     description:
//       'We have puppies available occasionally throughout the year.  Our litters are bred for character, conformation, companionship and overall good health.  We use our own studs on some of our litters, and some are sired by an outside stud that has been carefully selected to insure our standards of quality are met. Most of all we are gratified by the number of families who over three generations have returned to us for their family companions.  We will be happy to share with you specific information with reference to litters expected and puppies currently available. Please e-mail us at totanapiperhill@aol.com and we will be happy to give you information on pedigrees and prices of the puppies and when they may be available. A 6 month old German/American cross female from a long-coated mother(Que Sera Sera) and a normal coated father (Wild Bill Hickok). Today, the effort continues undiminished with a sound breeding program drawing from the best of American and German lines assuring that our shepherd progeny will continue to fulfill the achievements of the past while maintaining the high standards of our breeding goals in promoting German Shepherds of good character and correct conformation for the home, show and working environments.',
//     price: 500,
//     imageUrl: 'https://www.google.com/imgres',
//     inventory: 5,
//   },
//   {
//     name: 'Caramel',
//     description:
//       "Samoyeds can and do fit into every lifestyle you can imagine. They live in the suburban, big Cities like NY City in Manhattan where they live in apartments, the countryside, and even on boats!! What appears to be a large dog, is actually a medium size dog ranging from 36 to 55 lbs in the females and 50 to 75 lbs in the boys. They appear big due to their beautiful coats, big bone structure and long beautiful necks. If you live an active life, your Samoyed will live an active life, if you sled, they will sled, if you hike, they will hike, if you like to watch movies, they will watch movies, if you like to work and play on the computer, well, they will play with themselves! They are quite entertaining and love to love you. It's quite simple actually. The Samoyed was truly bred as a companion dog to love and care for you the best possible way they can, and they deserve all of that back from us in the best way that we can.",
//     price: 500,
//     imageUrl:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtueQuuYtntc4vl2YCjCZZcS0WVB3mDwvDrPZoQqq9oa_DMe5',
//     inventory: 5,
//   },
//   {
//     name: 'Fiddlesticks',
//     description:
//       'Our English style labs are AKC, OFA, OFEL, CERF registered. They enjoy 12 wooded acres surrounded by Connecticut State Park and Killingworth Land Trust, and swim in lab-friendly Pond Meadow Brook. We breed for sound health and good temperament. We raise our puppies in a home environment and socialize them through frequent handling and play. From their third to 16th day, we give them a series of gentle neurological stimulation (The Bio Sensor Program) to improve cardio vascular performance, tolerance to stress and resistance to disease. Also, during the 8-weeks they are with us, they listen to National Public Radio (NPR). We microchip all of our puppies to help in their return to you in the event they are lost or stolen.',
//     price: 500,
//     imageUrl:
//       'https://i1.wp.com/www.panelsonpages.com/wp-content/uploads/2009/10/drk-001-002.jpg',
//     inventory: 5,
//   },
//   {
//     name: 'Tatertots',
//     description:
//       'All of our dogs come from excellent pedigrees with champion lines, sweet and gentle temperaments, and great looks.  Our dogs and puppies are surrounded by attention and love from day one, and we socialize our pups from birth to help ensure that you get the sweetest addition to your family. All of our breeding dogs have OFA hip, elbow, eye and heart clearances. Five of our breeding dogs are referred to as “English Cream Goldens”, while in the United States their beautiful coats are recognized as light goldens. In the United Kingdom and most countries around the world, they are recognized by this name because of their attractive coats and gentle temperament. Our dogs are all AKC credentialed, have been trained and have gentle and well mannered temperaments.  We use call names for our dogs and not their given names for the simple reason it makes them easier to train.  For more information on their given names, feel free to contact us. Because of our own personal preferences, we made the decision long ago to focus our breeding efforts on the Light Golden category of the breed.',
//     price: 500,
//     imageUrl:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSytzZVCaS-48L-unYj-3E_cNkUBdxMPX-sexyKQfId7i9G3ZnxVQ',
//     inventory: 5,
//   },
//   {
//     name: 'Milkshakes',
//     description: 'Some description here',
//     price: 500,
//     // imageUrl: '',
//     inventory: 5,
//   },
//   {
//     name: 'Donut',
//     description: 'Malamute description here',
//     price: 700,
//     // imageUrl: '',
//     inventory: 5,
//   },
//   {
//     name: 'Cody',
//     description: 'Other descriptions of pugs here',
//     price: 700,
//     // imageUrl: '',
//     inventory: 1,
//   },
//   {
//     name: 'Porkchops',
//     description: "Cassio likes corgi's",
//     price: 800,
//     // imageUrl: '',
//     inventory: 2,
//   },
//   {
//     name: 'Cookies And Cream',
//     description: 'Chow chow likes BEARS!',
//     price: 740,
//     // imageUrl: '',
//     inventory: 1,
//   },
// ];

// const reviews = [
//   {
//     content:
//       'Human-centered design thinker-maker-doer parallax driven parallax 360 campaign food-truck piverate pitch deck paradigm. Parallax integrate convergence thinker-maker-doer 360 campaign pitch deck co-working paradigm cortado. Entrepreneur sticky note SpaceTeam user story workflow integrate thinker-maker-doer Steve Jobs innovate. Thinker-maker-doer affordances unicorn actionable insight food-truck quantitative vs. qualitative big data waterfall is so 2000 and late responsive paradigm 360 campaign. Disrupt long shadow thought leader actionable insight iterate venture capital actionable insight viral big data personas.',
//     stars: 3,
//   },
//   {
//     content:
//       'Personas unicorn unicorn minimum viable product responsive bootstrapping actionable insight minimum viable product engaging. Physical computing minimum viable product long shadow pair programming affordances convergence iterate earned media. Latte pivot personas driven engaging paradigm moleskine agile 360 campaign quantitative vs. qualitative intuitive disrupt. Convergence paradigm 360 campaign parallax pivot earned media entrepreneur integrate moleskine.',
//     stars: 4,
//   },
//   {
//     content:
//       'Latte iterate pair programming user centered design minimum viable product paradigm workflow bootstrapping intuitive viral human-centered design. Workflow waterfall is so 2000 and late human-centered design thinker-maker-doer viral user story responsive. Physical computing unicorn venture capital hacker physical computing 360 campaign moleskine personas hacker human-centered design entrepreneur 360 campaign intuitive. Earned media disrupt fund ship it pivot unicorn innovate pivot integrate workflow innovate. Pitch deck engaging user centered design driven earned media co-working ideate piverate.',
//     stars: 5,
//   },
//   {
//     content:
//       'Intuitive big data intuitive responsive experiential pair programming earned media parallax SpaceTeam disrupt. Venture capital co-working physical computing experiential innovate personas convergence moleskine pivot ideate entrepreneur quantitative vs. qualitative. Bootstrapping prototype agile food-truck quantitative vs. qualitative workflow responsive ship it. Paradigm entrepreneur convergence engaging co-working food-truck cortado workflow. Ideate paradigm Steve Jobs human-centered design SpaceTeam fund SpaceTeam integrate cortado grok bootstrapping waterfall is so 2000 and late venture capital.',
//     stars: 3,
//   },
//   {
//     content:
//       'Fund venture capital waterfall is so 2000 and late innovate experiential hacker actionable insight innovate driven. Actionable insight pivot driven venture capital human-centered design user story convergence workflow actionable insight. Workflow fund affordances 360 campaign co-working actionable insight long shadow latte Steve Jobs venture capital. User centered design ship it entrepreneur viral engaging human-centered design prototype physical computing agile intuitive parallax.',
//     stars: 4,
//   },
// ];

// const orders = [
//   { status: 'Created', items: [] },
//   { status: 'Processing', items: [] },
//   { status: 'Created', items: [] },
//   { status: 'Cancelled', items: [] },
//   { status: 'Completed', items: [] },
// ];

// const categories = [{ name: 'nice' }, { name: 'creepy' }];

// function seed() {
//   let createdUsers,
//     createdProducts,
//     createdCategory,
//     createdReviews,
//     createdOrders;

//   // create products
//   return Promise.all(products.map(product => Product.create(product)))
//     .then(result => {
//       createdProducts = result;

//       //create category
//       return Promise.all(categories.map(category => Category.create(category)));
//     })
//     .then(result => {
//       createdCategory = result;

//       // create users
//       return Promise.all(users.map(user => User.create(user)));
//     })
//     .then(result => {
//       createdUsers = result;
//       // create reviews
//       for (var i = 0; i < reviews.length; i++) {
//         reviews[i].userId = createdUsers[i].id;
//         reviews[i].productsId = createdProducts[i].id;
//       }
//       return Promise.all(reviews.map(review => Review.create(review)));
//     })
//     .then(result => {
//       createdReviews = result;
//       // create orders
//       for (var i = 0; i < orders.length; i++) {
//         orders[i].userId = createdUsers[i].id;
//         orders[i].items = [
//           {
//             product: createdProducts[i],
//             price: createdProducts[i].price,
//             quantity: i + 1,
//           },
//         ];
//       }
//       return Promise.all(orders.map(order => Order.create(order)));
//     });
// }

// const main = () => {
//   console.log('Syncing db...');
//   db.sync({ force: true })
//     .then(() => {
//       console.log('Seeding databse...');
//       return seed();
//     })
//     .catch(err => {
//       console.log('Error while seeding');
//       console.log(err.stack);
//     })
//     .then(() => {
//       db.close();
//       return null;
//     });
// };

// main();
