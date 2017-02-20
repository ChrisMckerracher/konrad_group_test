import React from 'react'
import './ListView.scss'
import ListItem from "./ListItem"
import changeActiveRedirect from "../containers/ListViewContainer"

function mapGames(games, details, redirect) {
    return (
      games.map((current_game) =>
      <ListItem key={ current_game } details = { details } redirect = { redirect } game={ current_game } />
      )
    )
}
export const ListView = (props) => (
  <div className='list-view'>
    { props.games ? mapGames(props.games, props.details, props.redirect) : "No Games" }
  </div>
)

export default ListView