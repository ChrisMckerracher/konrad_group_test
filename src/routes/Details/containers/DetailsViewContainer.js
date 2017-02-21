import { connect } from 'react-redux'
import DetailsView from '../components/DetailsView'
import { searchGame } from '../modules/detailsview'


const mapDispatchToProps = {
  search : (url) => searchGame(url)
}

const mapStateToProps = (state) => ({
    game: state.active_game,
    game_details: state.game_details
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailsView)