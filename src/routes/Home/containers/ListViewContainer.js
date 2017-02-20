import { connect } from 'react-redux'
import { setActiveGame } from '../modules/listview'
import { push } from 'react-router-redux'



import ListView from '../components/ListView'

var DETAILS_URL = '/details'

const mapDispatchToProps = {
  details : (game) => setActiveGame(game),
  redirect : () => push(DETAILS_URL)
}

const mapStateToProps = (state) => ({
    games: state.games
})

export default connect(mapStateToProps, mapDispatchToProps)(ListView)