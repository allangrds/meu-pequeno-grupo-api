require('dotenv').config()

const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_AUTH_USER,
    pass: process.env.MAIL_AUTH_PASSWORD,
  },
})

const sendEmail = ({
  from = 'naoresponsa@meupequenogrupo.com.br',
  to,
  subject,
  text,
  html,
}) => {
  const mailOptions = {
    from,
    to,
    subject,
    text,
    html,
  }

  return transport.sendMail(mailOptions)
}

module.exports = sendEmail
