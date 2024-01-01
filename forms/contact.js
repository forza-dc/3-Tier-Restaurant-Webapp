// contact.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

// Replace 'contact@example.com' with your real receiving email address
const receivingEmailAddress = 'contact@example.com';

app.post('/contact', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your_email@gmail.com', // replace with your Gmail email address
      pass: 'your_password' // replace with your Gmail password
    }
  });

  const mailOptions = {
    from: req.body.email,
    to: receivingEmailAddress,
    subject: req.body.subject,
    html: `
      <p>From: ${req.body.name}</p>
      <p>Email: ${req.body.email}</p>
      <p>Message: ${req.body.message}</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.send('Contact form submitted successfully!');
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
