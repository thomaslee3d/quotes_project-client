'use strict'
const store = require('./../store')
const showQuotesTemplate = require('../templates/quote-listing.handlebars')

const onAddQuoteSuccess = function (response) {
  store.user = response.user
  console.log('Added a Quote Success ' + store.user)
  $('.user-message').text('A quote is Added!')
  $('#add-quote').trigger('reset')
}

const onAddQuoteFailure = function (response) {
  console.log('Nothing has been Added')
  $('.user-message').text('A quote Has not been Added!')
  $('#add-quote').trigger('reset')
}
// const getBooksSuccess = (data) => {
//   // get data from api
//   console.log(data)
//   // Use the template + send it the data
//   const showBooksHtml = showBooksTemplate({ books: data.books })
//   // handlebars magic putsthe data in the data in the spots we designated
//   // in putsthetemplate file
//   // use the complied HTML and append it to the page
//   $('.content').html(showBooksHtml)
// }
const onShowQuotesSuccess = function (data) {
  const showQuotesHtml = showQuotesTemplate({ quotes: data.quotes })
  $('.content').html(showQuotesHtml)
}

const onShowQuotesFailure = function (response) {
  console.log('onShowQuoteFailure')
}
const onDeleteQuotesSuccess = function (response) {
  console.log('onShowQuoteSuccess')
}

const onDeleteQuotesFailure = function (response) {
  console.log('onShowQuoteFailure')
}

module.exports = {
  onAddQuoteSuccess,
  onAddQuoteFailure,
  onShowQuotesSuccess,
  onShowQuotesFailure,
  onDeleteQuotesSuccess,
  onDeleteQuotesFailure
}
