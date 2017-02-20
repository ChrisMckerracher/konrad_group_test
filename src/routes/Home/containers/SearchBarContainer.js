import { connect } from 'react-redux'
import { searchDay } from '../modules/searchbar'

import SearchBar from '../components/SearchBar'

const mapDispatchToProps = {
  search : (year, month, day) => searchDay(year, month, day)
}

const mapStateToProps = (state) => ({
    games: state.games
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)