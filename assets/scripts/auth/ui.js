
const store = require('./../store')


const onSignUpSuccess = function (response) {
  store.user = response.user
  console.log('Sign Up Successful')
  $('.add-quote-container').hide()
  $('.sign-in-container').hide()
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
  console.log('Sign In Failure')
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
  $('.add-quote-container').show()
  $('.sign-up-container').hide()
  $('.sign-in-container').hide()
  $('.log-out-btn').show()
  $('.user-button-container').show()
  $('change-password-container').show()
  $('show-quotes-btn').show()
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
const onLogOutSuccess = function () {
  $('.user-message').text('Logged Out')
  $('#sign-in').trigger('reset')
  $('#change-password').trigger('reset')
  $('#user-buttons').trigger('reset')
}
const onLogOutFailure = function () {
  $('.user-message').text('Logged Out')
}
const onSignInFailure = function () {
  $('.user-message').text('Failed log out attempt!')
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function () {
  $('.user-message').text('you changed Your password... cool huh?')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('.user-message').text('You Did not change your password...wack huh?')
  $('#change-password').trigger('reset')
}

module.exports = {
  onSignInSuccess,
  onSignInFailure,
  onSignUpSuccess,
  onSignUpFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onLogOutSuccess,
  onLogOutFailure
}
