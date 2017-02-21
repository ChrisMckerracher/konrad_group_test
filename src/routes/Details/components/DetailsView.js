import React from 'react'
import '../styles/DetailsView.scss'
import LineScoreContainer from '../containers/LineScoreContainer'
import StatsContainer from '../containers/StatsContainer'
import HeaderContainer from '../containers/HeaderContainer'

export default class DetailsView extends React.Component {
  
  componentWillMount() {
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
      } else {
        return(
          <div>
            <HeaderContainer/>
            <LineScoreContainer/>
            <StatsContainer/>
          </div>
        )
      }
    
  }
}
