
const store = require('./../store')

const onSignUpSuccess = function (response) {
  store.user = response.user
  console.log('Sign Up S')
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  $('.user-message').text('Log In Success!')

  // $('.game-message').show()
  // $('.game-message').text("Click New Game to Start")
  // $('#new-game').show()
  // $('#log-out').show()
  // $('#sign-in').hide()
  // $('#sign-up').hide()
  // $('#change-password').show()
}
const onSignUpFailure = function (response) {
  store.user = response.user
  console.log('Sign In S')
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  $('.user-message').text('Log In Success!')

  // $('.game-message').show()
  // $('.game-message').text("Click New Game to Start")
  // $('#new-game').show()
  // $('#log-out').show()
  // $('#sign-in').hide()
  // $('#sign-up').hide()
  // $('#change-password').show()
}

const onSignInSuccess = function (response) {
  store.user = response.user
  console.log('Sign In S')
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  $('.user-message').text('Log In Success!')

  // $('.game-message').show()
  // $('.game-message').text("Click New Game to Start")
  // $('#new-game').show()
  // $('#log-out').show()
  // $('#sign-in').hide()
  // $('#sign-up').hide()
  // $('#change-password').show()
}

const onSignInFailure = function () {
  console.log('Sign In F')
  $('.user-message').text('Failed Sign In Attempt!')
  $('#sign-in').trigger('reset')
}

const onAddQuoteSuccess = function (response) {
  store.user = response.user
  console.log('Added a Quote Success ')
  $('.user-message').text('A quote is Added!')
  $('#add-quote').trigger('reset')
}
const onAddQuoteFailure = function () {
  console.log('Nothing has been Added')
  $('.user-message').text('A quote Has not been Added!')
  $('#add-quote').trigger('reset')
}

module.exports = {
  onSignInSuccess,
  onSignInFailure,
  onSignUpSuccess,
  onSignUpFailure,
  onAddQuoteSuccess,
  onAddQuoteFailure
}
