
import React from 'react';
import { PROJECTS } from '../constants';


const Projects = () => {
  return (
    <section id="projects">
      <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl capitalize">Projects</h1>


        <div className="flex items-start gap-8">
          <div className="flex-1">
            {PROJECTS.map((project, index) => (
              <div key={index} className="mb-12 flex flex-wrap lg:justify-between">
                {/* Left side: Image */}
                <div className="w-full lg:w-1/4 mb-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-md object-cover w-full h-auto max-h-48"
                  />
                </div>


                {/* Right side: Project info */}
                <div className="w-full lg:w-3/4">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <p className="mt-2 text-neutral-300">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-100"
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
    </section>
  );
};


export default Projects;
