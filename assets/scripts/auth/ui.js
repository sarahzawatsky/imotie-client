'use strict'

// const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Successfully signed up! Sign in below using your name and password.')
  $('#sign-up').trigger('reset')
}

module.exports = {
  signUpSuccess
}
