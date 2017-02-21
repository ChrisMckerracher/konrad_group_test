import React from 'react'
import ListViewContainer from '../containers/ListViewContainer'
import SearchBarContainer from '../containers/SearchBarContainer'
import './SearchBar.scss'
 


export class SearchBar extends React.Component  {
  
  componentWillMount() {
    if (this.props.games.games.length == 0) {
      this.props.search("", 0)
    }
  }
  
  render() {
    return (
      <div className="search-bar">
        <button className="nav-button" onClick={ () => this.props.search(this.props.games.date, -1) }>
        {"<"}
        </button>
        <div className="date-info">
        {this.props.games.date ? String(this.props.games.date) : ""}
        </div>
        <button className="nav-button" onClick={ () => this.props.search(this.props.games.date, 1) }>
        >
        </button>
      </div>
    )
  }
}

export default SearchBar
