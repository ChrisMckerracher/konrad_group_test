import { connect } from 'react-redux'
import { searchGame } from '../modules/linescore'
import LineScore from '../components/LineScore'

const mapDispatchToProps = {
  search : (url) => searchGame(url)
}

const mapStateToProps = (state) => ({
    game: state.active_game,
    game_details: state.game_details
})

export default connect(mapStateToProps, mapDispatchToProps)(LineScore)