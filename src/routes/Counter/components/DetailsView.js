import React from 'react'
import './DetailsView.scss'
import LineScoreContainer from '../containers/LineScoreContainer'
import StatsContainer from '../containers/StatsContainer'

export class DetailsView extends React.Component {
  
  componentWillMount() {
    this.props.search(this.props.game.game_data_directory)
  }

  render() {
    return (
      <div>
        <LineScoreContainer/>
        <StatsContainer/>
      </div>
    )
  }
}

export default DetailsView
