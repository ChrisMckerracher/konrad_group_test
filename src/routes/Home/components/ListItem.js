import React from 'react'
import './ListItem.scss'

//ToDo: move to better place

        //<div>{ props.game.linescore }</div>

export function changeActiveRedirect (details, redirect, game) {
  details(game)
  redirect()
}

function winningTeam(int, linescore) {//0 or 1, should use enum
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


export const ListItem = (props) => (
    <div className="list-item" onClick={ () =>
    changeActiveRedirect(props.details, props.redirect, props.game) }>
        <div className="teams">
          <div className={ winningTeam(0, props.game.linescore) }>
            Home Team: { props.game.home_team_city + " " + props.game.home_team_name }
          </div>
          <div className={winningTeam(1, props.game.linescore)}>
            Away Team: { props.game.away_team_city + " " + props.game.away_team_name}
          </div>
        </div>
        <div className="status">
          Status: { props.game.status.status }
        </div>
    </div>
    
)


export default ListItem