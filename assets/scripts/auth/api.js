'use strict'

const config = require('../config')
const store = require('../store')

// SIGN UP
const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

// SIGN IN
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

// CHANGE PASSWORD
const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

// SIGN OUT
const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token // accessing the token from store that we added onto store in ui.js
    }
  })
}

// CREATE MOTIE
const createMotie = function (emotion, intensity, cause, appearance, solution) {
  return $.ajax({
    url: config.apiUrl + '/moties',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      moties: {
        emotion: emotion,
        intensity: intensity,
        cause: cause,
        appearance: appearance,
        solution: solution
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createMotie
}
