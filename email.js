const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'funclowntown666',
    pass: 'clownsclowns'
  }
});

const mailOptions = {
  from: 'funclowntown@gmail.com',
  to: 'tophersjones@gmail.com',
  subject: 'Thanks for your order!',
  html: '<p>thanks for your order from ClownTown! Expect your clown to arrive in between 2 - 5 business weeks!</p>'
}

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err)
  }
  else {
    console.log(info)
  }
});
