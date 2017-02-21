import React from 'react'
import ListViewContainer from '../containers/ListViewContainer'
import SearchBarContainer from '../containers/SearchBarContainer'
import '../styles/SearchBar.scss'
import { formatDate } from 'utilities/date-time'


 
export default class SearchBar extends React.Component  {
  
  componentWillMount() {
    if (this.props.games.games == "") {
      this.props.search("", 0)
    }
  }
  
  render() {
    let date = this.props.games.date
    return (
      <div className="search-bar">
        <button className="nav-button" onClick={ () => this.props.search(this.props.games.date, -1) }>
        {"<"}
        </button>
        <div className="date-info">
          <span>{date ? formatDate(date): ""}</span>
        </div>
        <button className="nav-button" onClick={ () => this.props.search(this.props.games.date, 1) }>
        >
        </button>
      </div>
    )
  }
}
