import React from 'react'

// CSS Import
import '../assets/css/Navigation.css';

export const DOCK_ICONS = (props) => {
  return (
    <li>
      <img src={props.icon}  className="dock-icons"/>
    </li>
  )
}
