'use strict'

const store = require('../store')

// FEATURES UPON SUCCESS AND FAILURE\

// UPON SUCCESSFUL SIGN-UP
const signUpSuccess = function (data) {
  $('#message').text('Successfully signed up! Sign in below using your name and password.')
  $('#sign-up').trigger('reset')
}

// UPON SUCCESSFUL SIGN-IN
const signInSuccess = function (data) {
  store.user = data.user
  $('#sign-in').trigger('reset')
  $('#message').text('Hello!  How are you feeling today?')
  // $('#grid').hide()
  // $('#stats').show()
  // $('#games').show()
  $('#sign-out').show()
  $('#change-password').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

// UPON SUCCESSFUL PASSWORD CHANGE
const changePasswordSuccess = function () {
  $('#change-password').trigger('reset')
  $('#message').text('Password successfully changed!')
  // $('#message').removeClass()
  // $('#message').addClass('success') // CSS CLASS FOR STYLING
}

// UPON UNSUCCESSFUL USE OF FEATURE
const failure = function () {
  $('#message').text('Error! Try again!')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-password').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  failure
}
