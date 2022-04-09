import React from 'react'

export default function Projects({ project = {} }) {
  const handleProjectClick = (url) => {
    window.open(url, '_ blank');
  }
  return (
    <div className='p-5 border hover:cursor-pointer mainBoxes' onClick={() => handleProjectClick(project.url)}>
      <div className='zoom'>

        <img className="w-full aspect-auto" src={project.image} />
        <div className="p-2">
          <span className='text-xs'>Status: {project.status}</span>
          <h4 className='underline underline-offset-4 '>{project.title || 'SvelteJS TODO App'}</h4>
          <div className='text-sm font-extralight mt-2' >{project.description}</div>
        </div>
      </div>
    </div>
  )
}
