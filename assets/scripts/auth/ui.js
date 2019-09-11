'use strict'

const store = require('../store')
const seeMotiesTemplate = require('../templates/moties-listing.handlebars')
// FEATURES UPON SUCCESS AND FAILURE

// UPON SUCCESSFUL SIGN-UP
const signUpSuccess = function (data) {
  $('#message').text('successfully signed up! sign in below using your name and password.')
  $('#sign-up').trigger('reset')
}

// UPON SUCCESSFUL SIGN-IN
const signInSuccess = function (data) {
  store.user = data.user
  $('#sign-in').trigger('reset')
  $('#message').text('hello!  how are you feeling today?')
  $('.settings').show()
  $('.motie').show()
  $('.old-moties').hide()
  // $('.content').show()
  $('#imotie-navbar').show()
  $('.content').hide()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.settings').hide()
  $('.about').hide()
  $('.welcome').hide()
}

// UPON SUCCESSFUL PASSWORD CHANGE
const changePasswordSuccess = function () {
  $('#change-password').trigger('reset')
  $('#message').text('password successfully changed!')
}

// UPON SUCCESSFUL SIGN-OUT
const signOutSuccess = function () {
  store.user = null
  $('#message').text('you have signed out')
  $('#sign-up').show()
  $('#sign-in').show()
  $('.motie').hide()
  $('.settings').hide()
  $('.content').hide()
  $('.content').empty()
  $('.old-moties').hide()
  $('#imotie-navbar').hide()
  $('.about').hide()
}

// UPON SUCCESSFUL SUBMISSION OF MOTIE
const submitMotieSuccess = function () {
  $('#submit-motie').trigger('reset')
  $('#message').text('your motie was submitted!')
}

// UPON SUCCESSFUL VIEWING OF ALL MOTIES
const seeAllMotiesSuccess = function (data) {
  $('.content').empty()
  const showMotiesHtml = seeMotiesTemplate({moties: data})
  $('.content').append(showMotiesHtml)
  $('.content').show()
  // store.moties = data
  $('#message').text('your moties')
}

// UPON SUCCESSFUL DELETION OF A MOTIE
const deleteMotieSuccess = function () {
  // $('#all-moties').trigger('reset')
  $('#message').text('motie deleted')
}

// UPON SUCCESSFUL EDITING OF A MOTIE
const editMotieSuccess = function () {
  $('#message').text('successfully edited motie')
  $('#motie-modal').modal('hide')
  // $('#motie-modal').form('reset')
  $('form').trigger('reset')
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
