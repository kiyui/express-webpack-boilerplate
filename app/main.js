'use strict'

// Use webpack normally
require('./main.scss')

;(function () {
  console.log('I am the main application entrypoint')
  const container = document.getElementById('app-container')
  container.innerHTML = 'Hello World'
})()
