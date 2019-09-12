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
  $('#about-navbar').on('click', authEvents.onAbout)

  $('.content').on('click', '.delete-button', authEvents.onDeleteMotie)
  $('.content').on('click', '.launch-edit-modal', authEvents.onOpenModal)

  $('.settings').hide()
  $('.motie').hide()
  $('.old-moties').hide()
  $('.content').hide()
  $('#imotie-navbar').hide()
  $('#sign-out').hide()
  $('.about').hide()
})

$(function () {
  $('#sign-in-link').click(function (e) {
    $('#sign-in').delay(100).fadeIn(100)
    $('#sign-up').fadeOut(100)
    $('#sign-up-link').removeClass('active')
    $(this).addClass('active')
    e.preventDefault()
  })
  $('#sign-up-link').click(function (e) {
    $('#sign-up').delay(100).fadeIn(100)
    $('#sign-in').fadeOut(100)
    $('#sign-in-link').removeClass('active')
    $(this).addClass('active')
    e.preventDefault()
  })
})
