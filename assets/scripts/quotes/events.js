'use strict'
const getFormFields = require('.././../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onAddQuote = function (event) {
  event.preventDefault()
  const form = event.target
  const getForm = getFormFields(form)
  api.addQuote(getForm)
    .then(ui.onAddQuoteSuccess)
    .catch(ui.onAddQuoteFailure)
}

const onShowQuotes = function (event) {
  event.preventDefault()
  api.showQuotes()
    .then(ui.onShowQuoteSuccess)
    .catch(ui.onShowQuoteFailure)
}

const onDeleteQuotes = function (event) {
  event.preventDefault()
  ui.clearQuotes()
  const form = event.target
  const getForm = getFormFields(form)
  api.deleteQuotes(getForm)
    .then(function () {
      onShowQuotes(event)
    })
    .catch(ui.onDeleteQuoteFailure)
}

const onDeleteQuoteBtn = function (event) {
  event.preventDefault()
  ui.clearQuotes()
  const id = $(event.target).data('id')
  api.deleteQuotesBtn(id)
    .then(function () {
      onShowQuotes(event)
    })
    .catch(ui.onDeleteQuoteFailure)
}

const addHandlers = () => {
  $('.add-quote').on('submit', onShowQuotes)
  $('#log-out').on('click', ui.clearQuotes)
  $('#show-quotes-btn').on('click', onShowQuotes)
  $('.content').on('submit', '.dynamic-data', '.dynamic-quote', onDeleteQuoteBtn)
}

module.exports = {
  onAddQuote,
  onShowQuotes,
  onDeleteQuotes,
  onDeleteQuoteBtn,
  addHandlers
}
