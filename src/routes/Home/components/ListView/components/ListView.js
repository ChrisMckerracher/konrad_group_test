import React from 'react'
import '../styles/ListView.scss'
import ListItem from "./ListItem"
import { sort_by_team } from "../utilities"

//Special case: will act like No Games if theres 1 element
//ToDo: give unique ids
function mapGames(games, details, redirect) {
    return (
      sort_by_team(games, "TOR").map((current_game) =>
      <ListItem details = { details } redirect = { redirect } game={ current_game } />
      )
    )
}
export const ListView = (props) => (
  <div className='list-view'>
    { props.games.games.length  ?
    mapGames(props.games.games, props.details, props.redirect) :
    props.games.isFetching? "Loading": "No Games Today" }
  </div>
)

export default ListView