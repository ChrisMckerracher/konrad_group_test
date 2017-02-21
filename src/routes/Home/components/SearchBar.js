import React from 'react'
import ListViewContainer from '../containers/ListViewContainer'
import SearchBarContainer from '../containers/SearchBarContainer'
import './SearchBar.scss'
 


export class SearchBar extends React.Component  {
  
  componentWillMount() {
    this.props.search(new Date(2016, 8, 4), 0)
  }
  
  render() {
    return (
      <div className="search-bar">
        <button onClick={ () => this.props.search(this.props.games.date, -1) }>
        "BACK"
        </button>
        <div style = {{ width: "100px", height: "100px", backgroundColor: "red" }}>
        {this.props.games.date ? String(this.props.games.date) : ""}
        </div>
        <button onClick={ () => this.props.search(this.props.games.date, 1) }>
        >
        </button>
      </div>
    )
  }
}

export default SearchBar
