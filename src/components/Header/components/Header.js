import React from 'react'
import { IndexLink, Link } from 'react-router'
import '../styles/Header.scss'

export const Header = () => (
  <div>
    <h1>Hello Konrad Group!</h1>
    <IndexLink to='/' activeClassName='route--active'>
      List of Games
    </IndexLink>
    {' · '}
    <Link to='/details' activeClassName='route--active'>
      Game Details
    </Link>
  </div>
)

export default Header
