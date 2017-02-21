import React from 'react'
import ReactTable from 'react-table'
import { populateStats } from '../utilities'
import { getActiveTeamName } from '../../../utilities'

import '../styles/Stats.scss'
import 'react-table/react-table.css'

const columns = [
  {
  header: 'Name',
  accessor: 'name'
  }, {
    header: 'AB',
    accessor: 'AB'
  }, {
    header: 'R',
    accessor: 'R'
  }, {
    header: 'H',
    accessor: 'H'
  }, {
    header: 'RBI',
    accessor: 'RBI'
  }, {
    header: 'BB',
    accessor: 'BB'
  }, {
    header: 'SO',
    accessor: 'SO'
  }, {
    header: 'AVG',
    accessor: 'AVG'
  }
]

export default class Stats extends React.Component {
  
  render() {
    let boxscore = this.props.game_details.boxscore
    let active_team = getActiveTeamName(this.props.active_team, boxscore.home_sname, boxscore.away_sname)
    return (
      <div className="stats">
        <div className="stats-title">
          Batting Info for { active_team }
        </div>
        <ReactTable
          data={ populateStats(boxscore.batting)[this.props.active_team] }
          columns={columns}
          defaultPageSize={10}
        />
      </div>
    )
  }
}
