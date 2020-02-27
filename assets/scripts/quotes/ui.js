'use strict'

const store = require('./../store')
const showQuotesTemplate = require('../templates/quote-listing.handlebars')

const onAddQuoteSuccess = function (response) {
  store.user = response.user
  $('.add-quote-container').on('submit', quoteAuth.onShowQuotes)
  $('.add-quote-container').show()
  $('.user-message').text('A quote is Added!')
  $('.content').empty()
}

const onAddQuoteFailure = function (response) {
  store.user = response.user
  $('.user-message').text('A quote was not Added!')
  $('#add-quote').trigger('reset')
}

const onShowQuoteSuccess = function (data) {
  const showQuotesHtml = showQuotesTemplate({ quotes: data.quotes })
  $('.content').html(showQuotesHtml)
}

const onShowQuoteFailure = function (response) {
  $('.user-message').text('Failed to show quotes!')
}
const onDeleteQuoteSuccess = function (data) {
  $('.content').empty()
  $('.user-message').text('A quote was Deleted!')
  const showQuotesHtml = showQuotesTemplate({ quotes: data.quotes })
  $('.content').html(showQuotesHtml)
}

const onDeleteQuoteFailure = function (response) {
  $('.user-message').text('Failed to Delete Quote!')
}
const clearQuotes = () => {
  $('.content').empty()
}

module.exports = {
  onAddQuoteSuccess,
  onAddQuoteFailure,
  onShowQuoteSuccess,
  onShowQuoteFailure,
  onDeleteQuoteSuccess,
  onDeleteQuoteFailure,
  clearQuotes
}
