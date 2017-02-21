import { connect } from 'react-redux'
import { searchDay } from '../modules/searchbar'

import SearchBar from '../components/SearchBar'

//incrementing date time by hand is a pain
//I had a couple bugs related to accounting for
//daylight saving
var moment = require('moment')

function incDecDate(date, amount) {
  let new_date = date
  if (amount == 0){
    new_date = moment("2016-7-4")
  }else{
    new_date = moment(new_date).add(amount, "day")
  }
  return [new_date.year(), new_date.month(), new_date.date()]

}

const mapDispatchToProps = {
  search : (date, direction) => searchDay(...incDecDate(date, direction))
}

const mapStateToProps = (state) => ({
    games: state.games,
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)