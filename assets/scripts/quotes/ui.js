'use strict'
const store = require('./../store')
const showQuotesTemplate = require('../templates/quote-listing.handlebars')

const onAddQuoteSuccess = function (response) {
  store.user = response.user
  console.log('Added a Quote Success ' + store.user)
  $('.user-message').text('A quote is Added!')
}

const onAddQuoteFailure = function (response) {
  store.user = response.user
  console.log('Added a Quote Failed to be Added ' + store.user)
  $('.user-message').text('A quote was not Added!')
  $('#add-quote').trigger('reset')
}
//   console.log(data)
//   // Use the template + send it the data
//   const showBooksHtml = showBooksTemplate({ books: data.books })
//   // handlebars magic putsthe data in the data in the spots we designated
//   // in putsthetemplate file
//   // use the complied HTML and append it to the page
//   $('.content').html(showBooksHtml)
// }
const onShowQuoteSuccess = function (data) {
  const showQuotesHtml = showQuotesTemplate({ quotes: data.quotes })
  $('.content').html(showQuotesHtml)
}

const onShowQuoteFailure = function (response) {
  console.log('onShowQuoteFailure')
}
const onDeleteQuoteSuccess = function (data) {
  console.log('onDeleteQuoteSuccess')
  const showQuotesHtml = showQuotesTemplate({ quotes: data.quotes })
  $('.content').html(showQuotesHtml)
}

const onDeleteQuoteFailure = function (response) {
  console.log('onDeleteQuoteFailure')
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
