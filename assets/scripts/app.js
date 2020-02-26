'use strict'

const userAuth = require('./auth/events')
const quoteAuth = require('./quotes/events')
// const gameEvents = require('./games/events')
// const gameUi = require('./games/ui')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-in').on('submit', userAuth.onSignIn)
  $('#sign-up').on('submit', userAuth.onSignUp)
  $('#change-password').on('submit', userAuth.onChangePassword)
  $('#add-quote').on('submit', quoteAuth.onAddQuote)
  quoteAuth.addHandlers()
})
