
const store = require('./../store')

const onSignUpSuccess = function (response) {
  store.user = response.user
  console.log('Sign Up Successful')
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
  console.log('Sign In Failed')
  $('.user-message').text('Failed Sign In Attempt!')
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function () {
  console.log('You changed Your Password')
  $('.user-message').text('you changed Your password... cool huh?')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function () {
  console.log('You Did not change your password...wack huh?')
  $('.user-message').text('You Did not change your password...wack huh?')
  $('#change-password').trigger('reset')
}

module.exports = {
  onSignInSuccess,
  onSignInFailure,
  onSignUpSuccess,
  onSignUpFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
