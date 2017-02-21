import React from 'react'
import ReactTable from 'react-table'
import { populateStats } from '../utilities'

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
    if (boxscore && boxscore.batting) {
      return (
        <div>
          <button onClick = { () => this.props.setTeam(0) }>
            {boxscore.home_sname}
          </button>
          <button onClick = { () => this.props.setTeam(1) }>
            {boxscore.away_sname}
            </button>
          <ReactTable
            data={ populateStats(boxscore.batting)[this.props.active_team] }
            columns={columns}
            defaultPageSize={5}
          />
        </div>
      )
    } else {
      return (
        <div> No Game Selected! </div>
      )
    }
  }
}
