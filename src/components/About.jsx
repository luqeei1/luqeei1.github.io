import React from 'react';
import mrb from '../assets/mrb.jpeg';
import { motion } from 'framer-motion';
const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl font-bold bg-gradient-to-r from-blue-300 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg underline decoration-purple-300'>About Me</h2>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <motion.div whileInView={{opacity : 1, x : 0}} initial={{opacity : 0, x : -100}} transition={{duration : 0.5}} className='flex items-center justify-center'>
            <img  className='rounded-2xl' src={mrb} alt="about" />
          </motion.div>
        </div>


        <div className='w-full lg:w-1/2'>
            <motion.div whileInView={{opacity : 1, x : 0}} initial={{opacity : 0, x : 200 }} transition={{duration : 0.5}}  className='flex justify-center lg:justify-start'>
              <p className='my-2 max-w-xl py-6'>


              Hello, my name is Akarsh Bharadwaj Gopalam. I am an undergraduate student at Imperial College London studying Electronic and Information Engineering (Computer Engineering).
              I have a passion for software engineering and technology and I am always eager to learn new skills and take on new challenges. I have experience in various programming languages and frameworks,
              some being from modules I have taken during university and others from personal projects. Outside academia, I enjoy
              going on walks with friends, family or with my dog. I am a strong believer that physical activity is important for mental and physical well-being, and I actively try to incorporate this into my daily routine.

              <br />
              <br />
              <p>Below, you can see my different programming skills:</p>


             <div className="max-w-md mx-auto translate-x-[-10%] translate-y-[10%]">
                <p className="text-lg font-semibold text-purple-500 mb-4">Languages:</p>
                <ul className="flex flex-wrap gap-3">
                  {[
                    "JavaScript/TypeScript",
                    "Python",
                    "SystemVerilog",
                    "C++",
                    "HTML/CSS",
                  ].map((skill) => (
                    <li key={skill}>
                      <p className="w-fit inline-block rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-100 shadow-md">
                        {skill}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className='text-lg font-semibold text-purple-500 mb-4 mt-4'>Frameworks:</p>
                <ul className='flex flex-wrap gap-3'>
                  {[
                    "React",
                    "Next.js",
                    "Tailwind CSS",
                    "Node.js",
                    "ExpressJS",
                    "FastAPI",
                   
                  ].map((skill) => (
                    <li key={skill}>
                      <p className="w-fit inline-block rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-100 shadow-md">
                        {skill}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className='text-lg font-semibold text-purple-500 mb-4 mt-4'>Tools:</div>
                <ul className='flex flex-wrap gap-3'>
                  {[
                    "Git",
                    "GitHub",
                    "Postman",
                    "VS Code",
                    "MongoDB",
                    "PostgreSQL",
                    "AWS EC2",
                    "SQLite"
                  ].map((skill) => (
                    <li key={skill}>
                      <p className="w-fit inline-block rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-100 shadow-md">
                        {skill}
                      </p>
                    </li>
                  ))}
                </ul>


                <p className='mt-10'> My academic interests include machine learning, natural language processing, AI and full stack development. </p>
              </div>






              </p>


            </motion.div>


          </div>
      </div>
    </div>  
  );
}


export default About;
