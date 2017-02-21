import { connect } from 'react-redux'
import LineScore from '../components/LineScore'

const mapDispatchToProps = {
  search : (url) => url //does nothing, placeholder
}

const mapStateToProps = (state) => ({
    game: state.active_game,
    game_details: state.game_details
})

export default connect(mapStateToProps, mapDispatchToProps)(LineScore)