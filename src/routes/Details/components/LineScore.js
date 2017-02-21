import React from 'react'
import ReactTable from 'react-table'

import 'react-table/react-table.css'

const columns = [
  {
  header: 'Team',
  accessor: 'team'
  }, {
    header: '1',
    accessor: '1'
  }, {
    header: '2',
    accessor: '2'
  }, {
    header: '3',
    accessor: '3'
  }, {
    header: '4',
    accessor: '4'
  }, {
    header: '5',
    accessor: '5'
  }, {
    header: '6',
    accessor: '6'
  }, {
    header: '7',
    accessor: '7'
  }, {
    header: '8',
    accessor: '8'
  }, {
    header: '9',
    accessor: '9'
  }, {
    header: 'H',
    accessor: 'H'
  }, {
    header: 'E',
    accessor: 'E'
  },
]

function concat(obj1,obj2) {
  return Object.assign(obj1, obj2) //not immuatable, fix if time
}

function populateLineScore(linescore, home_name, away_name){
  let home_inning = {"team": home_name}
  let away_inning = {"team": away_name}
  linescore.inning_line_score.map((inning) => home_inning[inning.inning] = inning.home)
  home_inning = concat(home_inning, {'H': linescore.home_team_runs})
  home_inning = concat(home_inning, {'E': linescore.home_team_errors})
  
  linescore.inning_line_score.map((inning) => away_inning[inning.inning] = inning.away)
  away_inning = concat(away_inning, {'H': linescore.away_team_runs})
  away_inning = concat(away_inning, {'E': linescore.away_team_errors})
  
  console.log(home_inning)
  
  return [home_inning, away_inning]
}
export class LineScore extends React.Component {

  render() {
    //mainly want to check linescore's existence. Short circuit for sanity
    if (this.props.game_details.boxscore && this.props.game_details.boxscore.linescore) {
      return (
        <ReactTable
          data={ populateLineScore(this.props.game_details.boxscore.linescore,
            this.props.game_details.boxscore.home_sname,
            this.props.game_details.boxscore.away_sname)  }
          columns={columns}
          defaultPageSize={2}
          showPagination={false}
        />
      )
    } else {
      return (
        <div> Sorry! </div>
      )
    }
  }
}

export default LineScore
