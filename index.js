'use strict'

const fs = require('fs')

const express = require('express')
const bodyParser = require('body-parser')
const expressSanitizer = require('express-sanitizer')
const cors = require('cors')

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

;(function () {
  // Environment
  const env = JSON.parse(fs.readFileSync('env.json', 'utf8'))

  // Create express application
  const app = express()
  // Load third party express middlewares
  app.use(bodyParser.json()) // Parse data sent to Express
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(expressSanitizer()) // Sanitizes input
  app.use(cors()) // Enable CORS

  // Enable webpack in development environment
  if (env.environment === 'development') {
    const webConfig = require('./webpack.config')
    const middlewareConfig = {
      publicPath: '/assets/',
      stats: {
        colors: true
      }
    }
    const webpackCompiler = webpack(webConfig)

    // Webpack middlewares
    app.use(webpackDevMiddleware(webpackCompiler, middlewareConfig))
    app.use(webpackHotMiddleware(webpackCompiler))
  }

  // Put your Express code here
  app.use((req, res, next) => {
    // This is an example middleware
    next()
  })

  // Frontend files such as index.html and webpack's bundle.js
  app.use(express.static('public'))

  // Route everything except /assets to index.html to be parsed by frontend router
  app.get(/^((?!\/assets\/).)*$/, (req, res) => {
    res.sendFile('/index.html', {
      root: 'public'
    })
  })

  // Start Express
  app.listen(process.env.PORT || env.port)
})()
