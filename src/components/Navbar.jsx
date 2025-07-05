import { FaLinkedin, FaGithub, FaBriefcase, FaProjectDiagram, FaEnvelope, FaFileAlt } from "react-icons/fa";


const Navbar = () => {
  return (
    <>
    <nav className="fixed top-1/2 left-6 transform -translate-y-1/2 flex flex-col items-center gap-6 z-50 text-white opacity-30 hover:opacity-100 transition-opacity duration-300">
     
      {/* Experience */}
      <div className="group relative flex flex-col items-center">
        <a
          href="#experience"
          className="hover:scale-125 hover:text-purple-500 transition-transform duration-300 ease-out"
        >
          <FaBriefcase size={26} />
        </a>


        <span
          className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 scale-95 translate-x-[-10px] group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 ease-out shadow-lg whitespace-nowrap"
        >
          Experience
        </span>
      </div>




      <div className="group relative flex flex-col items-center">
        <a
          href="#projects"
          className="hover:scale-125 hover:text-purple-500 transition-transform duration-300 ease-out"
        >
          <FaProjectDiagram size={26} />
        </a>


        <span
          className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 scale-95 translate-x-[-10px] group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 ease-out shadow-lg whitespace-nowrap"
        >
          Projects
        </span>
      </div>

      <div className="group relative flex flex-col items-center">
        <a href="#cv" target="_blank" aria-label="CV" className="hover:scale-125 hover:text-purple-500 transition-transform duration-300 ease-out">
          <FaFileAlt size={26} />
        </a>
        <span className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 scale-95 translate-x-[-10px] group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 ease-out shadow-lg whitespace-nowrap">
          CV
        </span>
      </div>


      


      <div className="group relative flex flex-col items-center">
        <a href="#contact" rel="noopener noreferrer"  className="hover:scale-125 hover:text-purple-500 transition-transform duration-300 ease-out">
          <FaEnvelope size={26} />
        </a>
        <span className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 scale-95 translate-x-[-10px] group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 ease-out shadow-lg whitespace-nowrap">
          Contact Me
        </span>
      </div>

      
      <div className="relative group">
        <a href="https://www.linkedin.com/in/akarsh-gopalam-0778b722a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-150 transition-transform duration-300">
          <FaLinkedin size={24} />
        </a>
        <span className="absolute left-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-sm font-semibold px-3 py-1 rounded shadow-lg whitespace-nowrap">
          LinkedIn
        </span>
      </div>


      
      <div className="relative group">
        <a href="https://github.com/luqeei1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-150 transition-transform duration-300">
          <FaGithub size={24} />
        </a>
        <span className="absolute left-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-sm font-semibold px-3 py-1 rounded shadow-lg whitespace-nowrap">
          GitHub
        </span>
      </div>
    </nav>
    </>
  );
 
};


export default Navbar;