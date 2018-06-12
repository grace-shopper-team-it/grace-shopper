const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'funclowntown666',
    pass: 'clownsclowns'
  }
});

const orderConfSubj = 'Your new friend is getting ready for a big trip!';
const shippingConfSubj = 'Your new friend is in a box!';
const deliveredConfSubj = 'Your new friend has been delivered!';
const cancelledConfSubj = "We're sorry you can't afford one of our products :(";

const orderConf = "<p>Thanks for your order from ClownTown! Expect your clown to arrive in 2 - 5 business weeks! Be nice to your clown! Unless your clown doesn't want you to be! He he he!</p> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Clown_chili_peppers.jpg/220px-Clown_chili_peppers.jpg' />";
const shippingConf = "<p>Thanks for your order from ClownTown! Your clown has shipped! Your clown is boxed comfortably! Your clown likes the box and all the packing materials! Beep Beep!</p> <img src='http://photos.costume-works.com/full/scary_clown_carrying_a_jack_in_the_box4.jpg' />";
const deliveredConf = "<p>Thanks for shopping at ClownTown! Your clown was delivered! Please rate us five noses! Ha ha ha! Like clown noses! Remember we love our clowns and we want you to love them too! If you don't like your clown for whatever reason feel free to write us a long letter about it!</p> <img src='https://c8.alamy.com/comp/BF462Y/clown-writing-with-large-pencil-BF462Y.jpg' />";
const cancelledConf = "<p>We know life can be tough, we're very sorry you don't have enough money to buy your item! Hopefully you become more successful someday!</p> <img src='https://thumbs.dreamstime.com/b/funny-clown-holding-money-13116443.jpg' />";

module.exports = { transporter, orderConf, shippingConf, cancelledConf, deliveredConf, orderConfSubj, shippingConfSubj, deliveredConfSubj, cancelledConfSubj };
