import React from 'react'

export const SET_ACTIVE_GAME = 'SET_ACTIVE_GAME'

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

