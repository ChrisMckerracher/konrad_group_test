import React from 'react'
import './ListView.scss'
import ListItem from "./ListItem"
import changeActiveRedirect from "../containers/ListViewContainer"

//Special case: will act like No Games if theres 1 element
//ToDo: give unique ids
function mapGames(games, details, redirect) {
    console.log(games)
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

function sort_by_team(games, team) {
  let team_list = []
  let i
  for (i = 0; i < games.length; i++){
    if (games[i].home_name_abbrev == team || games[i].away_name_abbrev == team) {
      team_list.push(games[i])
      console.log("here")
    }
  }
  
  for (i = 0; i < games.length; i++){
    if (!(games[i].home_name_abbrev == team || games[i].away_name_abbrev == team)) {
      team_list.push(games[i])
    }
  }
  return team_list
}

export default ListView