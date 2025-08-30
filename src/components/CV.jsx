import React from 'react'
import { motion } from 'framer-motion'
import akarshcv from '../assets/projects/Akarsh_Bharadwaj_Gopalam_CV.pdf'
const CV = () => {
  return (
    <section id='cv' className='border-b border-neutral-900 pb-5'>
        <div className='flex flex-col items-center justify-center my-20'> 
            <motion.a
            href={akarshcv}
            target="_blank"
            className="text-white bg-purple-600 px-10 py-10 rounded hover:bg-purple-700"
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.95 }}
            >
            Download CV
            </motion.a>
        </div>

    </section>
  )
}

export default CV
