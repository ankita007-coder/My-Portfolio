import React from 'react'
import { Link } from 'react-router-dom'
import { SingleProject } from '../components';
import "../assets/css/Work.css"
import { projects } from '../assets/utils/projectsData';

const Projects = () => {
  return (
    <div className='work-box'>
      {
        projects.map((project) => {
          return (
            <Link to={`/project/${project.id}`} className='project' key={project.id}>
              <SingleProject {...project} />
            </Link>
          )
        })
      }
    </div>
  )
}

export default Projects
