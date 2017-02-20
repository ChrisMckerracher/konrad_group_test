import React from 'react'

export const SEARCH_DAY = 'SEARCH_DAY'

// ------------------------------------
// Actions
// ------------------------------------
export function searchDay (value = 1) {
  return {
    type    : SEARCH_DAY,
    payload : value
  }
}

export const actions = {
  searchDay,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SEARCH_DAY]    : (state, action) => state,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = ["1","2","3"]
export default function searchbarReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
