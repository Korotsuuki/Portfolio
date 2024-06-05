import React from 'react'
import projects from "../../data/projects.json"
import Thumb from "../Thumb/Thumb.jsx"

function Projects() {
  return (
    <section className='gallery_title'>
        <h1>Mes Projets</h1>
        <div className='gallery'>
            <Thumb projects={projects}/>
        </div>
    </section>
  )
}

export default Projects