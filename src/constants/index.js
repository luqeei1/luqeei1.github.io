import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import stock from "../assets/stock.png";
import riscv from "../assets/riscv1.png";
import travel from "../assets/travel.jpg";
import saving from "../assets/saving.jpg";
import akarsh from "../assets/akarshport.png";



export const HERO_CONTENT = `I am a second year Electronic and Information Engineering student at Imperial College London with an avid interest in technology ranging from software engineering to big data. I have a strong skill set within programming, having strong skills in Python, C++ and JavaScript. I am currently furthering my abilities within full stack development learning technologies such as ReactJS, ExpressJS, NodeJS and NextJS within JavaScript as well as TypeScript. `;






export const EXPERIENCES = [
  {
    year: "July 2025 - August 2025",
    role: "Incoming Software Engineering Intern",
    company: "OncoFlow",
    description: `Joining OncoFlow for 8 weeks as a Software Engineering Intern, working with the AI and platform teams to train AI models as well as develop full stack applications.`,
    technologies: ["TypeScript", "ReactJS", "NextJS", "Python", "FastAPI"],
  },
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
    technologies: ["Python", "Microsoft Powerpoint"],
  },
  {
    year: "September 2020 - April 2023",
    role: "Intern",
    company: "British School Of Rock, Twickenham",
    description: `Began teaching guitar to children at different skill levels, up to 5 per class.
Conversed with parents and presented my ideas to the team for optimal teaching strategies.
Assisted the team with tasks, including repairing faulty equipment and analysing required payments.`,
    technologies: ["Communication"],
  }
];
export const PROJECTS = [
  {
    title: "RISC-V 32I CPU",
    image: riscv,
    description:
      "Collaborated in a team of 4 to design a RISC V-32I processor from scratch in SystemVerilog, further developing a pipelined processor with two way set associative cache. Designed and implemented the data memory module within the processor and wrote GTests in C++ to verify the functionality of the component. Created a testbench using C++ to assess the processor’s ability to plot a probability generating function given a dataset, optimizing for improved plotting speed.",
    technologies: ["SystemVerilog", "C++", "Git" ],
  },
  {
    title: "Asset Optimization Using The Sharpe Ratio",
    image: stock,
    description:
      "Currently working on a full stack app that optimizes asset allocation using the Sharpe Ratio. Currently, the app allows users to enter a list of assets as well as their desired risk tolerances and constraints to calculate the optimal asset allocation. In addition to this, the app also allows for users to compare stock performances via monitoring opening and closing prices graphically, which I plot using Charts.js. Next steps include a news section where users can monitor performances of their assets and a section where users save their portfolios.",
    technologies: ["Python", "FastAPI", "Express.js", "TypeScript", "Charts.js", "Next.js", "Tailwind CSS", "MongoDB"],
  },
  {
    title: "Travel App",
    image: travel,
    description: "Currently working on a travel app allowing users to find their ideal destination. Currently, I have created a section allowing users to input a description of their ideal destination and using sentence transformer, I am able to find the top 5 results from the PostgreSQL database. In addition, I have enabled users to locate their destinations on a map using open map api. Next steps for this project is to allow users to save their visited destinations as well as compare the best prices for flights for a given destination.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Money Savings Goal Planner ",
    image: saving,
    description:
      "Designed an app that allows users to set savings goals and update their savings progress. Developed the frontend using TypeScript, Next.js and Tailwind CSS, incorporating features such as allowing users to enter a ’reason’ for their savings and ’amount saved so far’ to display their progress. Utilized Next.js App routing to allow users to access further details for each goal.Used Python FastAPI on the backend to communicate and store information in a PostgresSQL database.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL"],
  }, 
  {
    title: "Portfolio Website (this site)",
    image: akarsh,
    description: "Developed a personal portfolio website to showcase my projects and skills. The website is built using React (in JavaScript), Tailwind CSS, and Framer Motion for animations. It features a responsive design, smooth scrolling and holds my CV for those interested.", 
    technologies: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
  }
];

export const CONTACT = {
  phoneNo: "+44 7388 075987",
  email: "abgopalam@gmail.com",
};