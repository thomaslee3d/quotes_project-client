'use strict'

let apiUrl
const apiUrls = {
  production: 'https://thomaslee3d.github.io/quotes_project-client//',
  development: 'https://thomaslee3d.github.io/quotes_project-client/'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
