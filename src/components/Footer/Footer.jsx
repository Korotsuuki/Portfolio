import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        <p>© {currentYear} Benoît Diacre</p>
        <Link to="/LegalNotice">Mentions Légales</Link>
    </footer>

  )
}

export default Footer