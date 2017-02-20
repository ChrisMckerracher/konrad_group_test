import React from 'react'
import './ListItem.scss'

//ToDo: move to better place

        //<div>{ props.game.linescore }</div>

export function changeActiveRedirect (details, redirect, game) {
  details(game)
  redirect()
}

export const ListItem = (props) => (
    <button className="list-item" onClick={ () => changeActiveRedirect(props.details, props.redirect, props.game) }>
        <div>{ props.game.home_team_name }</div>
        <div>{ props.game.away_team_name}</div>
        <div>{ props.game.status.status }</div>
    </button>
    
)


export default ListItem