import React from 'react'
import ListViewContainer from '../containers/ListViewContainer'
import SearchBarContainer from '../containers/SearchBarContainer'
import './SearchBar.scss'
 
export default class SearchBar extends React.Component  {
  
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
        {this.props.games.date ?
          `${this.props.games.date.format('dddd')} ${this.props.games.date.format("MMM")} ${this.props.games.date.date()} ${this.props.games.date.year()}`
          : ""}
        </div>
        <button className="nav-button" onClick={ () => this.props.search(this.props.games.date, 1) }>
        >
        </button>
      </div>
    )
  }
}
