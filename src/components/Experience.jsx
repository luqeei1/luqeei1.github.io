import React from 'react'
import { EXPERIENCES } from '../constants'

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl capitalize'>experience</h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className='mb-12 flex flex-wrap lg:justify-between'>
            {/* Left side: Year */}
            <div className='w-full lg:w-1/4 mb-2'>
              <p className='text-lg font-semibold text-neutral-400'>{experience.year}</p>
            </div>

            {/* Right side: Details */}
            <div className='w-full lg:w-3/4'>
              <h2 className='text-xl font-bold'>{experience.role} @ {experience.company}</h2>
              <p className='mt-2 text-neutral-300'>{experience.description}</p>
              <div className='mt-3 flex flex-wrap gap-2'>
                {experience.technologies.map((tech, idx) => (
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
  )
}

export default Experience
