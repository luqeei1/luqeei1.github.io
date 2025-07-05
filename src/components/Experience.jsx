import React from 'react'
import { EXPERIENCES } from '../constants'
import {motion} from 'framer-motion'


const Experience = () => {
  return (
    <div id='experience' className='border-b border-neutral-900 pb-4 pt-0.5'>
      <motion.h1 className='my-20 text-center text-4xl capitalize text-purple-500 underline decoration-purple-300'>experience</motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className='mb-12 flex flex-wrap lg:justify-between'>
            <motion.div
              whileInView={{opacity : 1, x : 0}}
              initial={{opacity : 0, x : -100}}
              transition={{duration : 0.5}}
           
            className='w-full lg:w-1/4 mb-2'>
              <p className='text-lg font-semibold text-neutral-400'>{experience.year}</p>
            </motion.div>


            <motion.div
              whileInView={{opacity : 1, x : 0}}
              initial={{opacity : 0, x : 100}}
              transition={{duration : 0.5}}
           
            className='w-full lg:w-3/4'>
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
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default Experience
