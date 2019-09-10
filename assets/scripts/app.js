'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)

  $('#change-password').on('submit', authEvents.changePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#submit-motie').on('submit', authEvents.onSubmitMotie)
  $('#all-moties').on('submit', authEvents.onSeeAllMoties)

  // $('#edit-motie').on('submit', authEvents.onEditMotie)

  $('.content').on('click', '.delete-button', authEvents.onDeleteMotie)
  $('.content').on('click', '.edit-button', authEvents.onEditMotie)

  $('.settings').hide()
  $('.motie').hide()
  $('.old-moties').hide()
  $('.content').hide()
})
