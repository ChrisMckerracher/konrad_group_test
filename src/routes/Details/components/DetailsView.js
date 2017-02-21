import React from 'react'
import '../styles/DetailsView.scss'
import LineScoreContainer from '../containers/LineScoreContainer'
import StatsContainer from '../containers/StatsContainer'
import HeaderContainer from '../containers/HeaderContainer'

export default class DetailsView extends React.Component {
  
  componentWillMount() {
    if (this.props.location == null){
      window.location.href = "/" //if the user navigates directly to /details
    }
    if (this.props.game != "") {
      this.props.search(this.props.game.game_data_directory)
    }
  }

  render() {
      if (this.props.game_details.isFetching){
        return (
          <div>
            Loading
          </div>
        )
      } else if (this.props.game_details.boxscore && this.props.game_details.boxscore.linescore) {
        return(
          <div>
            <HeaderContainer/>
            <LineScoreContainer/>
            <StatsContainer/>
          </div>
        )
      } else {
        return (
          <div>
            "No Game Selected!"
          </div>
        )
      }
  }
}
