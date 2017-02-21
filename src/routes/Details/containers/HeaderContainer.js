import { connect } from 'react-redux'
import { setTeam } from '../modules/header'

import Header from '../components/Header'

const mapDispatchToProps = {
  setTeam : (int) => setTeam(int)
}

const mapStateToProps = (state) => ({
    game: state.active_game,
    game_details: state.game_details,
    active_team: state.active_team,
    games: state.games
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)