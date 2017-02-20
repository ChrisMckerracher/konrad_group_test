import React from 'react'
import ListViewContainer from '../containers/ListViewContainer'
import SearchBarContainer from '../containers/SearchBarContainer'


export const SearchBar = (props) => (
  <div style = {{ width: "100px", height: "100px", backgroundColor: "red" }} onClick={ () => props.search(2016, 8, 4) }>
    "tmp"
  </div>
)

export default SearchBar
