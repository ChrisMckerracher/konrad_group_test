import React from 'react'
import { combineReducers } from 'redux'
import fetch from 'isomorphic-fetch'


export const SEARCH_DAY = 'SEARCH_DAY'
export const RECEIVE_DAY = 'RECEIVE_DAY'

// ------------------------------------
// Actions
// ------------------------------------
export function requestDay (year=2016, month=10, day=4) {
  return {
    type    : SEARCH_DAY,
    year,
    month,
    day
  }
}

export function receiveDay (year, month, day, json){
  return {
    type: RECEIVE_DAY,
    games: json.data.games,
    year,
    month,
    day
  }
}

export const actions = {
  searchDay,
  receiveDay,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SEARCH_DAY]    : (state, action) => state,
}


export function searchDay(year, month, day) {
  return dispatch => {
    dispatch(requestDay(year,month,day))
    month = month >= 10 ? month : "0" + month
    day = day >= 10 ? day : "0" + day
    year = String(year)
    month = String(month)
    day = String(day)
    console.log(year)
    let url = `http://gd2.mlb.com/components/game/mlb/year_${year}/month_${month}/day_${day}/master_scoreboard.json`
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveDay(year, month, day, json)))
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

export default function searchbarReducer (state = {isFetching: false, games: []}, action) {
  
  //const handler = ACTION_HANDLERS[action.type]

  switch (action.type) {
    case SEARCH_DAY:
      return Object.assign({}, state, {isFetching: true, year: action.year, month: action.month, day: action.day})
    case RECEIVE_DAY:
      return Object.assign({}, state, {isFetching:false, games: action.games.game, })
    default:
      return state
    
  }
  
}
