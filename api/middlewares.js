// Native
const { join } = require('path')

// Modules
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const exphbs = require('express-handlebars')
const express = require('express')
const helmet = require('helmet')
const methodOverride = require('method-override')
const RateLimit = require('express-rate-limit')

module.exports = app => {
  app.engine('handlebars', exphbs)
  app.set('view engine', 'handlebars')
  app.use('../public', express.static(join(__dirname, 'public')))
  app.use(compression())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(helmet())
  app.use(
    cors({
      methods: 'GET',
      origin: 'https://codybrunner.me'
    })
  )
  app.use(methodOverride())
  app.use(
    new RateLimit({
      delayMs: 0,
      max: 100,
      windowMs: 15 * 60 * 1000
    })
  )
}
