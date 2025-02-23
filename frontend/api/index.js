const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer transporter configuration (using Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address (e.g., ihardik.002@gmail.com)
    pass: process.env.EMAIL_PASS, // Your Gmail App Password
  },
});

// Endpoint to send email
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: `"Hardik Kumar Singh" <ihardik.002@gmail.com>`, // Use your Gmail address
    to: 'ihardik.002@gmail.com', // Your Gmail recipient email
    subject: `New Portfolio Message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  // Beautified HTML confirmation email to sender with embedded logo
  const senderMailOptions = {
    from: `"Hardik Kumar Singh" <ihardik.002@gmail.com>`, // Use your Gmail address
    to: email, // Sender's email (real Gmail or any email they provide)
    replyTo: email, // Ensure replies go to the sender's email
    subject: 'Message Sent Successfully',
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Message Sent Successfully</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f5f5f5;
                  margin: 0;
                  padding: 0;
              }
              .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background-color: #ffffff;
                  border-radius: 8px;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                  overflow: hidden;
              }
              .logo {
                  width: 400px; /* Fixed width */
                  height: auto; /* Maintain aspect ratio */
                  display: block;
                  margin: 0 auto; /* Center the logo horizontally */
              }
              .header {
                  background: linear-gradient(45deg, #14b8a6, #7c3aed);
                  color: #ffffff;
                  padding: 20px;
                  text-align: center;
                  font-size: 24px;
                  font-weight: bold;
              }
              .content {
                  padding: 20px;
                  color: #333333;
                  line-height: 1.6;
              }
              .footer {
                  text-align: center;
                  padding: 15px;
                  color: #666666;
                  font-size: 12px;
                  background-color: #f5f5f5;
              }
          </style>
      </head>
      <body>
          <div className="container">
              <img src="cid:logo" alt="Hardik Kumar Singh Portfolio Logo" className="logo" />
              <div className="header">
                  Thank You for Your Message!
              </div>
              <div className="content">
                  <p>Dear ${name},</p>
                  <p>Thank you for reaching out through my portfolio. I’ve received your message, and I’ll get back to you as soon as possible.</p>
                  <p>Best regards,<br>Hardik Kumar Singh</p>
              </div>
              <div className="footer">
                  <p>This is an automated message from Hardik Kumar Singh's portfolio. Please reply to this email to contact me directly.</p>
              </div>
          </div>
      </body>
      </html>
    `,
    attachments: [{
      filename: 'logo.jpg', // Name of the file as it appears in the email (update if different)
      path: 'public/images/logo2.png', // Relative path from index.js to the image
      cid: 'logo' // Content-ID to reference in the HTML (must match src="cid:logo")
    }]
  };

  // Send both emails
  Promise.all([
    transporter.sendMail(mailOptions),
    transporter.sendMail(senderMailOptions),
  ])
    .then(() => {
      res.status(200).json({ message: 'Email sent successfully!' });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});