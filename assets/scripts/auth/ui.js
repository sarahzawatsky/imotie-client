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
  $('#message').text('hello!  how are you feeling today?')
  $('.settings').show()
  $('.motie').show()
  $('.old-moties').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

// UPON SUCCESSFUL PASSWORD CHANGE
const changePasswordSuccess = function () {
  $('#change-password').trigger('reset')
  $('#message').text('Password successfully changed!')
}

// UPON SUCCESSFUL SIGN-OUT
const signOutSuccess = function () {
  store.user = null
  $('#message').text('You have successfully signed out.')
  $('#sign-up').show()
  $('#sign-in').show()
  $('.motie').hide()
  $('.settings').hide()
}

// // UPON SUCCESSFUL SELECTION OF EMOTION
// const selectEmotionSuccess = function () {
//   $('#select-emotion').trigger('reset')
//   $('#message').text('You have selected an emotion.  How would you rate your emotion?')
//   // STRETCH: identify which emotion was selected anad offer a specific, tailored message.
// }

// UPON SUCCESSFUL SUBMISSION OF MOTIE
const submitMotieSuccess = function () {
  $('#submit-motie').trigger('reset')
  $('#message').text('Your motie was submitted!')
}

// UPON SUCCESSFUL VIEWING OF ALL MOTIES
const seeAllMotiesSuccess = function () {
  $('#all-moties').trigger('reset')
  $('#message').text('Here are your past moties')
}
//
// // UPON SUCCESSFUL EDITING OF A MOTIE
// const editMotieSuccess = function () {
//   $('#all-moties').trigger('reset')
//   $('#message').text('Here are your past moties')
// }

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
  signOutSuccess,
  submitMotieSuccess,
  seeAllMotiesSuccess,
  failure
}
