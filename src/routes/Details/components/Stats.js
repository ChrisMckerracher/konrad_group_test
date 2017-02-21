import React from 'react'
import ReactTable from 'react-table'

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

function populateStats(batting){
  //0 is always home, 1 away
  let home_batting = batting[0].batter.map((batter) => (
    {"name": batter.name_display_first_last, "AB": batter.ab,
    "R": batter.r, "H": batter.h, "RBI": batter.rbi, "BB": batter.bb,
    "SO": batter.so, "AVG": batter.avg}))
  
  let away_batting = batting[1].batter.map((batter) => (
    {"name": batter.name_display_first_last, "AB": batter.ab,
    "R": batter.r, "H": batter.h, "RBI": batter.rbi, "BB": batter.bb,
    "SO": batter.so, "AVG": batter.avg }))

  return [home_batting, away_batting]
}
export class Stats extends React.Component {
  
  render() {
    if (this.props.game_details.boxscore && this.props.game_details.boxscore.batting) {
      return (
        <div>
          <button onClick = { () => this.props.setTeam(0) }>
            {this.props.game_details.boxscore.home_sname}
          </button>
          <button onClick = { () => this.props.setTeam(1) }>
            {this.props.game_details.boxscore.away_sname}
            </button>
          <ReactTable
            data={ populateStats(this.props.game_details.boxscore.batting)[this.props.active_team]  }
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


export default Stats
