import React from 'react'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import projects from "../../data/projects.json"
import { Link } from 'react-router-dom'
const findProjectID = (id) => {
    return projects.find((project) => project.id === id);
  };
  console.log(projects);
function ShowProject() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = findProjectID(id);
    console.log(project);
    console.log("id n°",id);

    useEffect(() => {
        if (!project) {
            navigate("/error");
        }
    }, [id, project, navigate]);

        if(!location) {
            return null
        }
  return (
    <section className='ContainerProjectPage'>
            <h1>{project.title}</h1>
            <h2>Description:</h2>
                <p>{project.description}</p>
            <h2>Technologies</h2>
            <ul>
                {project.technologies.map((techno,index)=>(
                    <li key={("techno",index)}>{techno}</li>
                ))}
            </ul>
            <div className='Links'>
                <Link to={project.github} target='_blank'>Code</Link>
                <Link to={project.link} target='_blank'>Site web</Link>
            </div>
            <div className='container-img'>
                <img className='image' src={project.img} alt={project.title}/>
            </div>
    </section>
  )
}

export default ShowProject