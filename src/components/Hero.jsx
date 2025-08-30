import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import akarsh_photo from "../assets/bday.jpeg";


const Hero = () => {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${akarsh_photo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="relative z-10 px-6 lg:px-16 text-center lg:items-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-300 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
          >
            Akarsh Gopalam
          </motion.h1>
          <div className="flex flex-col items-center lg:items-center mt-4">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl font-medium text-white mt-6"
            >
              <span className="mr-2 text-purple-200">I am a</span>
              <span
                className="font-bold drop-shadow-lg bg-gradient-to-r from-blue-300 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                style={{
                  borderBottom: "4px solid",
                  borderImage: "linear-gradient(to right, #93c5fd, #a78bfa, #f472b6) 1",
                }}
              >
                <Typewriter
                  words={["Student", "Software Engineer", "Tech Enthusiast"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={40}
                  delaySpeed={2000}
                />
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Hero;
