'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// const getQuotesSuccess = (data) => {
//   // get data from api
//   console.log(data)
//   // Use the template + send it the data
//   const showQuotesHtml = showQuotesTemplate({ quotes: data.quotes })
//   // handlebars magic putsthe data in the data in the spots we designated
//   // in putsthetemplate file
//   // use the complied HTML and append it to the page
//   $('.content').html(showQuotesHtml)
// }

const onAddQuote = function (event) {
  event.preventDefault()

  const form = event.target
  const getForm = getFormFields(form)
  console.log(getForm)
  api.addQuote(getForm)
    .then(ui.onAddQuoteSuccess)
    .catch(ui.onAddQuoteFailure)
}

const onShowQuotes = function () {
  event.preventDefault()

  api.showQuotes()
    .then(ui.onShowQuotesSuccess)
    .catch(ui.onShowQuotesFailure)
}

const onDeleteQuotes = function () {
  event.preventDefault()
  // const form = event.target
  // const getForm = getFormFields(form)
  api.deleteQuotes
    .then(ui.onDeleteQuoteSuccess)
    .catch(ui.onDeleteQuoteSuccess)
}

const addHandlers = () => {
  $('#show-quotes-btn').on('click', onShowQuotes)
}

module.exports = {
  onAddQuote,
  onShowQuotes,
  onDeleteQuotes,
  addHandlers
}
