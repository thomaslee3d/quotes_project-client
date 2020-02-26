const store = require('./../store')

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
  onAddQuoteSuccess,
  onAddQuoteFailure
}
