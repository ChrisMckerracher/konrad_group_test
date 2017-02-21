import { connect } from 'react-redux'
import { searchDay } from '../modules/searchbar'
import { incDecDate } from 'utilities/date-time'

import SearchBar from '../components/SearchBar'

const mapDispatchToProps = {
  search : (date, direction) => searchDay(...incDecDate(date, direction))
}

const mapStateToProps = (state) => ({
    games: state.games,
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)