import React from 'react'
import './ListView.scss'
import ListItem from "./ListItem"
import changeActiveRedirect from "../containers/ListViewContainer"

//Special case: will act like No Games if theres 1 element
//ToDo: give unique ids
function mapGames(games, details, redirect) {
    console.log(games)
    return (
      games.map((current_game) =>
      <ListItem details = { details } redirect = { redirect } game={ current_game } />
      )
    )
}
export const ListView = (props) => (
  <div className='list-view'>
    { props.games.games.length  ?
    mapGames(props.games.games, props.details, props.redirect) : "No Games Today" }
  </div>
)

export default ListView