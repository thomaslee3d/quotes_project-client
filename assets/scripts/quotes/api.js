'use strict'

const config = require('./../config')
const store = require('./../store')

const addQuote = function (data) {
  return $.ajax({
    url: `${config.apiUrl}/quotes`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
    //   given_name: data.name,
    //   quote: data.quote
    // }
  })
}

const showQuotes = function () {
  return $.ajax({
    url: `${config.apiUrl}/quotes`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteQuotesBtn = function (data) {
  return $.ajax({
    url: `${config.apiUrl}quotes/${data}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const deleteQuotes = function (data) {
  return $.ajax({
    url: `${config.apiUrl}quotes/${store.quote.id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  addQuote,
  showQuotes,
  deleteQuotes,
  deleteQuotesBtn
}
