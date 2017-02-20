import React from 'react'
import { push } from 'react-router-redux'

export const SET_ACTIVE_GAME = 'SET_ACTIVE_GAME'
export const DETAILS_URL = '/details'

// -----
// Helper Functions
// ----
export function changeActiveRedirect (details, game) {
  console.log(game)
  //details(game)
  //push(DETAILS_URL)
}


// ------------------------------------
// Actions
// ------------------------------------
export function setActiveGame (value = 0) {
  return {
    type    : SET_ACTIVE_GAME,
    payload : value
  }
}

export const actions = {
  setActiveGame,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_ACTIVE_GAME]    : (state, action) => action.payload,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = ""
export default function listviewReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

