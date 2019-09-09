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

// SELECT FEELINGS
const onSelectEmotion = function (event) {
  event.preventDefault()

  api.createMotie()
    .then(ui.selectEmotionSuccess)
    .catch(ui.failure)
}

// SUBMIT MOTIE
const onSubmitMotie = function (event) {
  event.preventDefault()

  api.createMotie()
    .then(ui.submitMotieSuccess)
    .catch(ui.failure)
}
module.exports = {
  onSignUp,
  onSignIn,
  changePassword,
  onSignOut,
  onSelectEmotion,
  onSubmitMotie
}
