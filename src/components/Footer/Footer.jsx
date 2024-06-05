import React from 'react'
import { Link } from "react-router-dom";
import GradientCircleBottom from '../GradientCircleBottom/GradientCircleBottom.jsx'

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        <GradientCircleBottom/>
        <p>© {currentYear} Benoît Diacre</p>
        <Link to="/LegalNotice">Mentions Légales</Link>
    </footer>

  )
}

export default Footer