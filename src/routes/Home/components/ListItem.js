import React from 'react'
import './ListItem.scss'

//ToDo: move to better place


export function changeActiveRedirect (details, redirect, game) {
  details(game)
  redirect()
}

export const ListItem = (props) => (
    <button className="list-item" onClick={ () => changeActiveRedirect(props.details, props.redirect, props.game) }>
        { props.game }
    </button>
    
)


export default ListItem