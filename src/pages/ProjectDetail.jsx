  import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../assets/utils/projectsData'
import "../assets/css/Work.css"

const ProjectDetail = () => {
  const { id } = useParams()
  const project = projects.find((item) => item.id === id)

  if (!project) {
    return (
      <div className="work-box">
        <div style={{ width: '100%', padding: '2rem', color: 'white' }}>
          <h2>Project not found</h2>
          <p>The project you are looking for does not exist or may have been removed.</p>
          <Link to="/projects" className="link button">Back to projects</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="work-box project-detail">
       
      <div className="project-detail-card">
        <Link to="/projects" className="link button">Back to projects</Link>
        <div className="project-detail-header">
          <div>
            <div className="project-detail-header">
              <p className="project-name">{project.name}</p>
              <div className="project-detail-actions">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="link button">
                Live demo
              </a>
            )}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="link button">
                Repository
              </a>
            )}
           
          </div>
            </div>
            
            <p className="project-detail-subtitle">{project.desc}</p>
            <p className="project-detail-tech"><span style={{ fontWeight: 'bold' }}>Tech stack:</span> {project.tech}</p>
          </div>
          
        </div>

        <div className="image" style={{ marginTop: '1.5rem',width:"100%" }}>
          <img src={project.image} alt={project.name} />
        </div>

        {project.details && (
          <div className="project-detail-section">
            {project.details.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        )}

        {project.sections && project.sections.map((section) => (
          <div className="project-detail-section" key={section.title}>
            <h3>{section.title}</h3>
            {section.content && <p>{section.content}</p>}
            {section.items && (
              <ul className="project-detail-list">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectDetail
