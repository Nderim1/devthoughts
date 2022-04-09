import React from 'react'
import ProjectCard from '/components/ProjectCard.js'
import { projects } from '/utils/projects'

export default function index() {
  return (<>
    <h2 className='text-2xl mb-5'>Projects</h2>
    <div>
      Projects I am currently working on or have worked on during these last couple of years.
    </div>
    <span className='text-tiny'>AKA my project graveyard!</span>
    <div className='grid gap-4 sm:grid-cols-2 mt-5'>
      {projects.map((project, index) => {

        return <ProjectCard key={index} project={project} />
      })}
    </div>
  </>)
}
