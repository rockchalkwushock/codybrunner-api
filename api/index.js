const express = require('express')

const middlewares = require('./middlewares')
const transporter = require('./transporter')
const template = require('../views/email')

const app = express()
const PORT = process.env.PORT || 4000

middlewares(app)

app.post('/form', (req, res) => {
  const data = req.body
  const html = template(data)
  transporter.sendMail({ html }, (error, info) => {
    if (error) {
      console.log(error)
    }
    console.log('Message sent: %s', info.messageId)
    res.send({ message: 'Your message was sent!' })
  })
})

app.listen(PORT, () => console.log(`Express Server running on ${PORT}`))
