import { connect } from 'react-redux'

import Stats from '../components/Stats'

const mapDispatchToProps = {
  setTeam : (int) => int
}

const mapStateToProps = (state) => ({
    game: state.active_game,
    game_details: state.game_details,
    active_team: state.active_team
})

export default connect(mapStateToProps, mapDispatchToProps)(Stats)