// Native
const { join } = require('path')

// Modules
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const methodOverride = require('method-override')
const RateLimit = require('express-rate-limit')

require('dotenv-safe').load()

module.exports = app => {
  app.use(compression())
  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
  app.use(helmet())
  app.use(
    cors({
      methods: ['GET', 'POST'],
      origin: process.env.DOMAINS
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
