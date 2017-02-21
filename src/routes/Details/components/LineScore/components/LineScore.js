import React from 'react'
import ReactTable from 'react-table'

import 'react-table/react-table.css'
import { populateLineScore } from '../utilities'

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

export default class LineScore extends React.Component {

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
