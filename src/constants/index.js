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
    year: "July 2025 - September 2025",
    role: "Software Engineering and AI Intern",
    company: "OncoFlow",
    description: `
    ◦ Built OncoFlow’s early-stage healthcare AI pipeline and app using React (TypeScript) and TailwindCSS. Engineered an Express.js (TypeScript) notification service with Nodemailer, using connection pooling and
    persistent SMTP connections with a 5-minute reuse timeout, cutting email notification latency by 42%. Implemented Redis caching in Docker, reducing repeated LLM chat suggestions queries by 50%+. Contributed to and tested AI prompts by creating a pipeline using Python FastAPI on an AWS EC2
    instance, ensuring that the selected LLM extracted PDF information accurately and offered medical-grade AI guidance based on patient data and preexisting databases.
    `,
    technologies: ["TypeScript", "React", "Python", "FastAPI", "Express.js", "AWS EC2", "Redis", "Docker"],
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
     "Built a polyglot finance app with a Next.js (TypeScript) + TailwindCSS frontend (deployed via Vercel), an Express.js (TypeScript) backend (deployed via Render) and a FastAPI microservice (deployed via Render) for SciPy-based financial computations and yfinance/Marketaux APIs. Engineered a Sharpe Ratio optimizer with user-defined weight constraints, returning the portfolio’s optimal weight allocations and key metrics such as annualized Sharpe Ratio, annual return and annual risk. Created a Chart.js Historical Data view for opening/closing price comparison between 2 stocks. Integrated Marketaux API for real-time financial news, applying 20 minute TTL caching in the Express.js backend to reduce API calls and cut latency by 93%. Implemented JWT authentication with bcrypt hashing, MongoDB persistence and protected routes for",
    technologies: ["Python", "FastAPI", "Express.js", "TypeScript", "Charts.js", "Next.js", "Tailwind CSS", "MongoDB"],
  },
  {
    title: "Travel App",
    image: travel,
    description: `
    
    Developed a multi-page travel app with a React (TypeScript) + TailwindCSS frontend and a FastAPI backend, using PostgreSQL for destination storage. Implemented NLP-based destination matching with sentence transformers to semantically analyze queries
    and return top 3 matches from 200+ destinations via vector similarity, further allowing for wishlist saving.
    Integrated support for displaying destination data for climate and average temperature.
    Incorporated OpenStreetMap API with search functionality, persistent user destination history and dynamic
    map rendering of queried and stored locations.
    Created per-destination journals to document experiences, implementing caching that reduced MongoDB
    query load by 50% and decreased data access times from ≈ 38 ms to ≈ 0.002 ms (19,000x improvement).`,
    technologies: ["TypeScript", "React", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL", "MongoDB"],
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