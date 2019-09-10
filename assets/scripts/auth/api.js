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
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// SUBMIT A NEW MOTIE
const createMotie = function (data) {
  return $.ajax({
    url: config.apiUrl + '/moties',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

// SEE ALL MOTIES
const seeAllMoties = function (data) {
  return $.ajax({
    url: config.apiUrl + '/moties',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

// EDIT A MOTIE
const editMotie = function (data) {
  return $.ajax({
    url: config.apiUrl + '/moties/' + store.motie.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

// DELETE A MOTIE
const deleteMotie = function (data) {
  return $.ajax({
    url: config.apiUrl + '/moties/' + data.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createMotie,
  seeAllMoties,
  editMotie,
  deleteMotie
}
