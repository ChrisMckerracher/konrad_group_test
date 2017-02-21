import React from 'react'
import ReactTable from 'react-table'
import { formatDate } from 'utilities/date-time'
import '../styles/Header.scss'
import { getActiveTeamName } from '../../../utilities'
import { isActive } from '../utilities'

export default class Header extends React.Component {
  
  render() {
    let boxscore = this.props.game_details.boxscore
    let date = this.props.games.date
    let active_team = getActiveTeamName(this.props.active_team, boxscore.home_sname, boxscore.away_sname)
    return (
      <div className="header">
        <div className="date">
          {date ? formatDate(date): ""}
        </div>
        <div className="teams-playing">
          <div className={ isActive(boxscore.home_sname, active_team) }
            onClick = { () => this.props.setTeam(0) }>
            {boxscore.home_sname}
          </div>
          <div className={ isActive(boxscore.away_sname, active_team) }
            onClick = { () => this.props.setTeam(1) }>
            {boxscore.away_sname}
          </div>
        </div>
      </div>
    )
  }
}
