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

// SUBMIT MOTIE
const onSubmitMotie = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.createMotie(data)
    .then(ui.submitMotieSuccess)
    .catch(ui.failure)
}

// SEE ALL MOTIES -- CURRENTLY ABLE TO SEE ALL PAST LOGINS MOTIE HISTORY. NEEDS TO CLEAR ON SIGN OUT
const onSeeAllMoties = function (event) {
  event.preventDefault()

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
    .then(ui.editMotieSuccess)
    .catch(ui.failure)
}

const onOpenModal = function (event) {
  event.preventDefault()

  const id = $(event.target).data('id')
  console.log(id)
  $('#motie-id').val(id)
  $('#motie-modal').modal('show')
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
  onOpenModal
}
