import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from "prop-types"

function Thumb({ projects }) {
  return (
    <>
    {projects.map((project) => (
        <div key={`routePath${project.id}`} className='thumb'>
            <NavLink to={`/project/${project.id}`}>
                <img src={project.img} alt={`photo ${project.title}`}/>
                <div className='info__projet'>
                    <h2 key={`${project.id}`}>{project.title}</h2>
                    <p key={`${project.id}`}>{project.resume}</p>
                </div>
            </NavLink>
        </div>
    ))}
    </>
  )
}

Thumb.propTypes = {
    projects : PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired,
            title:PropTypes.string.isRequired,
            img:PropTypes.string.isRequired,
            resume:PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default Thumb