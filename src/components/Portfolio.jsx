import { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero'; // Make sure you're importing Hero
import About from './About';
import Technologies from './Technologies';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import CV from './CV'; 






function Portfolio() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-300 selection:text-purple-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-black bg-[size:20px_20px]"></div>
      </div>


      <div className="container mx-auto px-8">
        <Hero />
        <About />
        <Navbar />
        <Experience />
        <Projects />
        <CV />
        <Contact />
      </div>
    </div>
  );
}


export default Portfolio;
