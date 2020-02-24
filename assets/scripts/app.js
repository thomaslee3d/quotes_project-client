'use strict'

const quoteAuth = require('./auth/events')
const quoteUpdate = require
// const gameEvents = require('./games/events')
// const gameUi = require('./games/ui')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-in').on('submit', quoteAuth.onSignIn)
  $('#sign-up').on('submit', quoteAuth.onSignUp)
  $('#change-password').on('submit', quoteAuth.onSignUp)
  $('#add-quote').on('submit', quoteAuth.onAddQuote)
})
