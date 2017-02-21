import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import ListViewContainer from '../containers/ListViewContainer'
import SearchBarContainer from '../containers/SearchBarContainer'

export const HomeView = () => (
  <div>
    <SearchBarContainer/>
    <ListViewContainer/>
  </div>
)

export default HomeView
