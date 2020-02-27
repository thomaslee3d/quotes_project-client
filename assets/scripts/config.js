'use strict'

let apiUrl
const apiUrls = {
  production: 'https://pacific-savannah-14495.herokuapp.com/',
  development: 'https://pacific-savannah-14495.herokuapp.com/'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
