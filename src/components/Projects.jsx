import React from 'react'
import Img from "../assets/forproject.jpeg"
import { EXPERIENCES, PROJECTS } from '../constants' // Add this line if you're using experiences
import project1 from "../assets/forproject.jpeg"


const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl capitalize'>Projects</h1>

      <div className="flex items-start gap-8">
        {/* Left side image */}

        {/* Right side text / dynamic content */}
        <div className='flex-1'>
          {PROJECTS.map((project, index) => (
            <div key={index} className='mb-12 flex flex-wrap lg:justify-between'>
              {/* Left side: Year */}
              <div className='w-full lg:w-1/4 mb-2'>
                <img src={project1} alt="tmp" />
              </div>

              {/* Right side: Details */}
              <div className='w-full lg:w-3/4'>
                <h2 className='text-xl font-bold'>{project.title}</h2>
                <p className='mt-2 text-neutral-300'>{project.description}</p>
                <div className='mt-3 flex flex-wrap gap-2'>
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className='rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-100'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
