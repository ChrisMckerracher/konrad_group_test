import React from 'react'
import '../styles/ListItem.scss'
import { winningTeam, changeActiveRedirect } from "../utilities"

export const ListItem = (props) => (
    <div className="list-item" onClick={ () =>
    changeActiveRedirect(props.details, props.redirect, props.game) }>
        <div className="teams">
          <div className={ winningTeam(0, props.game.linescore) }>
            Home Team: { props.game.home_team_city }
          </div>
          <div className={winningTeam(1, props.game.linescore)}>
            Away Team: { props.game.away_team_city }
          </div>
        </div>
        <div className="status">
          Status: { props.game.status.status }
        </div>
    </div>
    
)

export default ListItem