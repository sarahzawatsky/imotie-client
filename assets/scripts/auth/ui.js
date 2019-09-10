'use strict'

const store = require('../store')
const seeMotiesTemplate = require('../templates/moties-listing.handlebars')
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
  // $('.content').show()
  $('.content').hide()
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
  $('.content').hide()
  $('.content').empty()
  $('.old-moties').hide()
}

// UPON SUCCESSFUL SUBMISSION OF MOTIE
const submitMotieSuccess = function () {
  $('#submit-motie').trigger('reset')
  $('#message').text('Your motie was submitted!')
}

// UPON SUCCESSFUL VIEWING OF ALL MOTIES
const seeAllMotiesSuccess = function (data) {
  $('.content').empty()
  console.log(data)
  const showMotiesHtml = seeMotiesTemplate({moties: data})
  $('.content').append(showMotiesHtml)
  $('.content').show()
  // store.moties = data
  // $('#message').text('your moties')
}

// UPON SUCCESSFUL DELETION OF A MOTIE
const deleteMotieSuccess = function () {
  // $('#all-moties').trigger('reset')
  $('#message').text('motie deleted')
}

// UPON SUCCESSFUL EDITING OF A MOTIE
const editMotieSuccess = function () {
  $('#all-moties').trigger('reset')
  $('#message').text('Here are your past moties')
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
  signOutSuccess,
  submitMotieSuccess,
  seeAllMotiesSuccess,
  deleteMotieSuccess,
  editMotieSuccess,
  failure
}
