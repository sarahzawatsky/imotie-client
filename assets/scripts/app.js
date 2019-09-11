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

  $('#resubmit-motie').on('submit', authEvents.onEditMotie)

  $('#home-navbar').on('click', authEvents.onSeeMotieForm)
  $('#my-moties-navbar').on('click', authEvents.onSeeAllMoties)
  $('#settings-navbar').on('click', authEvents.onSeeSettings)
  $('#signout-navbar').on('click', authEvents.onSignOut)

  $('.content').on('click', '.delete-button', authEvents.onDeleteMotie)
  $('.content').on('click', '.launch-edit-modal', authEvents.onOpenModal)

  $('.settings').hide()
  $('.motie').hide()
  $('.old-moties').hide()
  $('.content').hide()
  $('#imotie-navbar').hide()
  $('#sign-out').hide()
})

// id="my-moties-navbar"
