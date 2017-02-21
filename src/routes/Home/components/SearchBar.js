import React from 'react'
import ListViewContainer from '../containers/ListViewContainer'
import SearchBarContainer from '../containers/SearchBarContainer'
import './SearchBar.scss'


export const SearchBar = (props) => (
  <div className="search-bar">
    <button onClick={ () => props.search(props.games.date, -1) }>
    "BACK"
    </button>
    <div style = {{ width: "100px", height: "100px", backgroundColor: "red" }} onClick={ () => props.search(new Date(2016, 8, 4), 0) }>
    {props.games.date ? String(props.games.date) : ""}
    </div>
    <button onClick={ () => props.search(props.games.date, 1) }>
    >
    </button>
  </div>
)

export default SearchBar
