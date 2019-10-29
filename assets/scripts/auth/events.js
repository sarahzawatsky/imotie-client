'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

// EVENT HANDLERS

// SIGN UP
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

// SIGN IN
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

// CHANGE PASSWORD
const changePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}

// SIGN OUT
const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

// SEE ALL SETTINGS
const onSeeSettings = function (event) {
  event.preventDefault()

  $('.settings').show()
  $('.content').hide()
  $('.motie').hide()
  $('.about').hide()
  $('#message').text('your settings')
}

// SEE MOTIE FORM
const onSeeMotieForm = function (event) {
  event.preventDefault()
  $('.motie').show()
  $('.settings').hide()
  $('.content').hide()
  $('.about').hide()
  $('#message').text('create a motie')
}

// SUBMIT MOTIE
const onSubmitMotie = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.createMotie(data)
    .then(ui.submitMotieSuccess)
    .catch(ui.failure)
}

// SEE ALL MOTIES
const onSeeAllMoties = function (event) {
  event.preventDefault()

  $('.settings').hide()
  $('.motie').hide()
  $('.about').hide()

  api.seeAllMoties()
    .then(ui.seeAllMotiesSuccess)
    .catch(ui.failure)
}

// DELETE A MOTIE
const onDeleteMotie = (event) => {
  event.preventDefault()
  const data = event.target.dataset

  api.deleteMotie(data)
    .then(() => onSeeAllMoties(event))
    .then(ui.deleteMotieSuccess)
    .catch(ui.failure)
}

// EDIT A MOTIE
const onEditMotie = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.editMotie(data)
    .then(() => onSeeAllMoties(event))
    .then(ui.editMotieSuccess)
    .catch(ui.failure)
}

const onOpenModal = () => {
  $('form').trigger('reset')
  const currentMotie = $(event.target)
  const emotion = currentMotie.data('emotion')
  const intensity = currentMotie.data('intensity')
  const cause = currentMotie.data('edit-cause')
  const appearance = currentMotie.data('edit-appearance')
  const solution = currentMotie.data('edit-solution')
  $('#emotion').val(emotion)
  $('#intensity').val(intensity)
  $('#edit-cause').val(cause)
  $('#edit-appearance').val(appearance)
  $('#edit-solution').val(solution)
  // $('#motie-id').val(id)
  $('#motie-modal').modal('show')
}

// ABOUT IMOTIE
const onAbout = function (event) {
  event.preventDefault()
  $('.motie').hide()
  $('.settings').hide()
  $('.content').hide()
  $('.about').show()
  $('#message').text('about imotie')
}

module.exports = {
  onSignUp,
  onSignIn,
  changePassword,
  onSignOut,
  onSubmitMotie,
  onSeeAllMoties,
  onEditMotie,
  onDeleteMotie,
  onOpenModal,
  onSeeSettings,
  onSeeMotieForm,
  onAbout
}
