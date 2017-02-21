import React from 'react'
import { combineReducers } from 'redux'
import { padDayMonth, newDate } from '../../../utilities/date-time'


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

export function receiveDay (year, month, day, json, is_error=false){
  return {
    type: RECEIVE_DAY,
    games: json.data.games,
    year,
    month,
    day,
    is_error
  }
}


//todo: fix error where 404 doesnt list page correctly
export function searchDay(year, month, day) {

  return dispatch => {
    dispatch(requestDay(year,month,day))
    month = padDayMonth(month + 1)
    day = padDayMonth(day)
    year = String(year)
    month = String(month)
    day = String(day)
    let url = `http://gd2.mlb.com/components/game/mlb/year_${year}/month_${month}/day_${day}/master_scoreboard.json`
    console.log(url )
  
    return fetch(url)
      .then( response => {
          if (response.status >= 400) {
            dispatch(receiveDay(year, month, day, json, true))
          } else {
            response.json().then(json => dispatch(receiveDay(year, month, day, json)))
          }
      }
    ).catch( () => dispatch(receiveDay(year, month, day, {data: {games: ""}}, true)))
  }
}

// ------------------------------------
// Reducer
// ------------------------------------


export default function searchbarReducer (state = {isFetching: false, games: []}, action) {
  

  switch (action.type) {
    case SEARCH_DAY:
      return Object.assign({}, state, {isFetching: true, date: newDate(action.year, action.month, action.day) })
    case RECEIVE_DAY:
      return Object.assign({}, state, {isFetching:false, games: action.games.game, error: action.is_error })
    default:
      return state
    
  }
  
}
