const { createTransport } = require('nodemailer')

require('dotenv-safe').load()

module.exports = createTransport({
  host: 'smtp.mail.me.com',
  port: 587, // as specified by Apple.
  secure: false, // as specified by Apple.
  auth: {
    user: process.env.ICLOUD_USER,
    pass: process.env.ICLOUD_PASS
  }
})
