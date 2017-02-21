import { connect } from 'react-redux'
import { searchDay } from '../modules/searchbar'

import SearchBar from '../components/SearchBar'

const milli_in_day = 86400000

const function incDecDate(date, direction) {
  let new_date = date
  if direction == -1 {
    new_date = new Date(date.getTime() - milli_in_day)
    
  } else if direction == 1 {
    new_date =  new Date(date.getTime() + milli_in_day)
    
  } else {//should always be 1, -1, or neutral
    let b = 1 //temp filler line
  }
  return [new_date.getFullYear(), new_date.getMonth(), new_date.getDate()]

}

const mapDispatchToProps = {
  search : (date, direction) => searchDay(...incDecDate(date,direction))
}

const mapStateToProps = (state) => ({
    games: state.games,
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)