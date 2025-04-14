import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a second year Electronic and Information Engineering student at Imperial College London with an avid interest in technology ranging from software engineering to big data. I have a strong skill set within programming, having strong skills in Python, C++ and JavaScript. I am currently furthering my abilities within full stack development learning technologies such as ReactJS, ExpressJS, NodeJS and NextJS within JavaScript as well as TypeScript. `;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "June 2024",
    role: "Insight with the Digital Science Sector",
    company: "British Petroleum (BP)",
    description: `Attended meetings with the Digital Science team exploring topics such as embodied AI and deep learning.
                  Designed a WeBots C++ project with an e-puck using 8 distance sensors, to not collide with surroundings.
                  Presented my WeBots project via PowerPoint to the principle of Digital Science.`,
    technologies: ["C++"],
  },
  {
    year: "July 2022",
    role: "Engineering Taster Week",
    company: "BAE Systems",
    description: `Had the opportunity to delve into various sectors within BAE following a competitive admissions process.
Explored how upcoming technology can be used to aid design processes leading to beneficial outcomes. 
Presented a group design project, against 7+ teams, on a search and rescue drone.
Created a Python program to choose a base from a selection of 15 along a 2,000km2 shoreline to deploy from, based on distance from the desired target.
Awarded a Silver Industrial Cadets Award.`,
    technologies: ["python", "Microsoft Powerpoint"],
  },
  {
    year: "September 2020 - April 2023",
    role: "Intern",
    company: "British School Of Rock, Twickenham",
    description: `Began teaching guitar to children at different skill levels, up to 5 per class. 
Conversed with parents and presented my ideas to the team for optimal teaching strategies. 
Assisted the team with tasks, including repairing faulty equipment and analysing required payments.`,
    technologies: ["communication"],
  }
  
];

export const PROJECTS = [
  {
    title: "RISCV CPU",
    image: project1,
    description:
      "Collaborated in a team of 4 and designed a RISC V-32I processor from scratch in SystemVerilog, further developing a pipelined processor with two way set associative cache. ",
    technologies: ["SystemVerilog", "C++", "Git" ],
  },
  {
    title: "Health Data Analysis Using K-means Clustering ",
    image: project2,
    description:
      "Used the Sklearn and Matplotlib libraries to carry out the elbow method to find a suitable value of K, utilising it in the K-means clustering algorithm to group my sleep hours, noise exposure and steps walked in a day into clusters",
    technologies: ["Python", "Pandas", "Numpy", "Matplotlib", "Sklearn"],
  },
  {
    title: "Methods To Mathematics Based Questions : Remembering Tool",
    image: project3,
    description:
      "Created a front end ’memory cards’ learning program designed to remember steps in mathematical methods",
    technologies: ["HTML", "CSS", "JavaScript"],
  }
];

export const CONTACT = {
  phoneNo: "+44 7388 075987",
  email: "abgopalam@gmail.com",
};
