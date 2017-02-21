import React from 'react'
import '../styles/ListView.scss'
import { sort_by_team, populateView } from "../utilities"

//Special case: will act like No Games if theres 1 element
//ToDo: give unique ids

export const ListView = (props) => (
  <div className='list-view'>
    { populateView(props.games, props.details, props.redirect) }
  </div>
)

export default ListView