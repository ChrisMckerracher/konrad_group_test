import React from 'react'
import { combineReducers } from 'redux'
import fetch from 'isomorphic-fetch'


export const SEARCH_GAME = 'SEARCH_GAME'
export const RECEIVE_GAME = 'RECEIVE_GAME'

// ------------------------------------
// Actions
// ------------------------------------
export function requestGame (url) {
  return {
    type    : SEARCH_GAME,
    url,
  }
}

export function receiveGame (url, json){
  return {
    type: RECEIVE_GAME,
    url,
    boxscore: json.data.boxscore,
  }
}

export const actions = {
  requestGame,
  receiveGame,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SEARCH_GAME]    : (state, action) => state,
}


export function searchGame(game_url) {
  return dispatch => {
    dispatch(requestGame(game_url))
    let url = `http://gd2.mlb.com${game_url}/boxscore.json`
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveGame(game_url, json)))
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

export default function linescoreReducer (state = {isFetching: false, boxscore: []}, action) {
  
  switch (action.type) {
    case SEARCH_GAME:
      return Object.assign({}, state, {isFetching: true})
    case RECEIVE_GAME:
      return Object.assign({}, state, {isFetching:false, boxscore: action.boxscore, })
    default:
      return state
    
  }
}
