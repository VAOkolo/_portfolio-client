import React from 'react'
import Panda from '../../Assets/pandaplog.png'
import "../../Styles/projects.css"

export default function ProjectCard({project}) {
    console.log(project.img)
  return (
    <div className='project-card'>
        <img src={project.img}></img>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className='btn-div'>
            <button className="github-btn"><a href={project.githubLink}>Github</a></button>
            <button className="live-btn"><a href={project.link}>Link</a></button>
        </div>
    </div>
  )
}
