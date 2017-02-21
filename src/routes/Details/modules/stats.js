// ------------------------------------
// Constants
// ------------------------------------
export const SET_ACTIVE_TEAM = 'SET_ACTIVE_TEAM'

// ------------------------------------
// Actions
// ------------------------------------
export function setTeam (value = 0) {
  return {
    type    : SET_ACTIVE_TEAM,
    payload : value
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_ACTIVE_TEAM]    : (state, action) => action.payload,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function statsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
