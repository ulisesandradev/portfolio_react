import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a passionate beginner frontend developer with a knack for building robust and scalable web applications. I continue to improve my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, PostgreSQL, and MongoDB. My goal is to leverage my experience to create innovative solutions and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am an industrial engineer passionate about innovation and efficiency. Currently, I am broadening my horizons as a student in a frontend development diploma. I am acquiring new skills in emerging technologies such as JavaScript, Node.js, and Next.js, among others. I firmly believe in the power of continuous education and adaptability in the constantly changing technological world. My goal is to combine my experience in industrial engineering with my new skills in frontend development to create innovative and efficient solutions.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Co-Op Diploma Web Development ",
    company: "Conerstone International Community College of Canada",
    description: `Web development consists of designing, crafting, and maintainging websites, will delve into the intricacies of back-end and front-end fundamentals, software architecture, databases, and data modeling, as well as component-based design.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB", "HTML", "CSS", "Postgres"],
  },
  {
    year: "2022 - 2023",
    role: "Data Entry Supervisor",
    company: "MIMSA",
    description: `As the responsible person for data capture in the ERP system, I audit the information recorded in the production areas and generate work instructions to train new employees.`,
    technologies: ["Microsoft Office", "ERP System", ],
  },
  {
    year: "2021 - 2022",
    role: "Warehouse Supervisor",
    company: "West Pak Avocado Inc.",
    description: `As part of my responsibilities, I conduct cycle counts of inventory in two warehouses, manage shipments of materials to subcontractors, handle requests for raw materials, and prepare quality non-conformity reports.`,
    technologies: ["Microsoft Office", "Invision System", ],
  },
  {
    year: "2020",
    role: "Production and Quality Intern",
    company: "Plastic Omnium",
    description: `As part of my operational work, I handle fuel tank deflashing, fuel pump assembly, general and final assembly. Additionally, I prepare daily reports on OEE (Overall Equipment Effectiveness), implement Lean strategies such as 5’s, VSM, and TPM, standardize work stations, create work instructions for operational areas with a focus on quality and safety risks, balance production lines, track take times and movements, and prepare quality alerts for incidents involving customers like Daimler, Ford, and General Motors. Furthermore, I provide support to the logistics department by coordinating product delivery for the final shipment to the concessionaire.`,
    technologies: ["AutoCAD", "Microsoft Office", "SAP"],
  },
];

export const PROJECTS = [
  {
    title: "Dental Clinic Website",
    image: project1,
    description:
      "A fully functional website with features like image comparison and animations",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Weather App",
    image: project2,
    description:
      "An application to check the specific weather of a city, using APIs to pull the data.",
    technologies: ["HTML", "CSS", "APIs"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap", "Javascript"],
  },
  {
    title: "Employee Management App",
    image: project4,
    description:
      "An application to manage the personal information of a company's employees",
    technologies: ["NodeJS", "NextJS", "CSS", "Express"],
  },
];

export const CONTACT = {
  address: "821 Cambie, Vancouver",
  phoneNo: "697 524 8795",
  email: "ulisesav@gmail.com",
};

