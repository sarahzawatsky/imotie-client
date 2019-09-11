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

//   const data = event.target.dataset
//   $("DATA").sort(function(a, b) {
//     if (a.id < b.id) {
//       return -1;
//     } else {
//       return 1;
//     }
//   }).each(function () { console.log($(this).attr("id"))
// }

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
  console.log('edit data', data)

  api.editMotie(data)
    .then(() => onSeeAllMoties(event))
    .then(ui.editMotieSuccess)
    .catch(ui.failure)
}

const onOpenModal = function (event) {
  event.preventDefault()

  const id = $(event.target).data('id')
  console.log(id)
  $('#motie-id').val(id)
  $('#motie-modal').modal('show')
  $('#motie-modal').trigger('reset')
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
