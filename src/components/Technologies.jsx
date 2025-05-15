import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { SiExpress } from "react-icons/si";
import { motion } from 'motion/react';

const icon = (duration) => ({
    initial : {y : -10},
    animate : {
        y : [10, -10],
        transition : {
            duration : duration,
            ease : 'linear',
            repeat : Infinity,
            repeatType : 'reverse'
        }
    }

}) 

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 whileInView={{opacity : 1}} initial={{opacity:0}} transition={{duration : 1.5}}className='my-20 text-center text-4xl'> Technologies </motion.h2>
        <div className='flex flex-wrap items-center justify-center gap-4'> 
            <motion.div variants={icon(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'> 
                <RiReactjsLine className='text-7xl text-cyan-400 '/>
            </motion.div>
            <motion.div variants={icon(1)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'> 
                <SiMongodb className='text-7xl text-green-400 '/>
            </motion.div>
            <motion.div variants={icon(4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'> 
                <FaNodeJs className='text-7xl text-green-400 '/>
            </motion.div>
            <motion.div variants={icon(5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'> 
                <SiExpress className='text-7xl text-black-400 '/>
            </motion.div>
        </div>
      
    </div>
  )
}

export default Technologies
