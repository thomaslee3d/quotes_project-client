'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
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

module.exports = {
  onAddQuote
}
