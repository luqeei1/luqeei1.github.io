import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import space from '../assets/space.jpg';


function HomePage() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${space})` }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div> {/* Dark overlay for better contrast */}
     
      <div className="flex flex-col items-center justify-center translate-y-[-50px] z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-cyan-400 my-10 underline"
        >
          Akarsh Bharadwaj Gopalam
        </motion.h1>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-2xl text-white mb-10"
        >
          <div className="flex flex-row items-center justify-center space-x-2">
            <span className="text-white">I am a</span>
            <Typewriter
              words={['Student', 'Software Engineer', 'Tech Enthusiast']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
              className="text-purple-300 font-medium"
            />
          </div>
        </motion.div>


        {/* Optional glowing button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-cyan-600/20 border border-cyan-400 rounded-lg text-cyan-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
        >
          Explore My Work
        </motion.button>
      </div>
    </div>
  );
}


export default HomePage;