'use strict'

const config = require('./../config')
const store = require('./../store')

const addQuote = function (data) {
  console.log('This is my Add Quote Ajax Patch Request')
  return $.ajax({
    url: config.apiUrl + 'quotes',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  addQuote
}
