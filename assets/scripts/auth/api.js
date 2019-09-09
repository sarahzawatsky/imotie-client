'use strict'

const config = require('../config')
// const store = require('../store')

// SIGN UP
const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

module.exports = {
  signUp
}
