import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <div className='navigation'>
        <ul>
            <NavLink to="/" className={({isActive}) => (isActive ? "link-active" : "")}>
                <li>Accueil</li>
            </NavLink>
              <li>Projets</li>
              <li>À propos</li>
              <li><a href='mailto:diacre.benoit@outlook.fr'>Contact</a></li>
        </ul>
    </div>
  )
}

export default Navigation