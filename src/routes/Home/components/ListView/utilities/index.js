import React from 'react'
import ListItem from "../components/ListItem"


export function sort_by_team(games, team) {
  let team_list = []
  let i
  for (i = 0; i < games.length; i++){
    if (games[i].home_name_abbrev == team || games[i].away_name_abbrev == team) {
      team_list.push(games[i])
    }
  }
  
  for (i = 0; i < games.length; i++){
    if (!(games[i].home_name_abbrev == team || games[i].away_name_abbrev == team)) {
      team_list.push(games[i])
    }
  }
  return team_list
}


export function winningTeam(int, linescore) {//0 or 1, should use enum
  if (!linescore) {
    return ""
  }
  let score = linescore.r
  if (score.home > score.away){
    return int == 0 ? "winning-team" : ""
    
  } else if (score.away > score.home) {
    return int == 1 ? "winning-team" : ""
    
  } else {
    return ""
  }
}

export function changeActiveRedirect (details, redirect, game) {
  details(game)
  redirect()
}

function mapGames(games, details, redirect) {
    return (
      sort_by_team(games, "TOR").map((current_game) =>
      <ListItem details = { details } redirect = { redirect } game={ current_game } key={ current_game.id }/>
      )
    )
}

export function populateView(games_list, details, redirect) {
  if (games_list.error || !(games_list.games)  ) {
    return "No Games Today"
  }
  if (!(games_list.games.length) && games_list.games.game_type) { //not a list, but is a game object
      return mapGames([games_list.games], details, redirect)
  }
  if (games_list.isFetching) {
    return "Loading"
  }
  return mapGames(games_list.games, details, redirect)
}