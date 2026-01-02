export const siteConfig = {
  name: "Florjan Dhima",
  title: "Software Engineer",
  accentColor: "#22A7F0",
  social: {
    email: "dflorian251@gmail.com",
    linkedin: "https://www.linkedin.com/in/florjan-dhima-511837257/",
    twitter: "https://x.com/fdhima1",
    github: "https://github.com/fdhima",
  },
  aboutMe:
    "Software Engineer with a strong foundation in backend development, data-driven applications, and virtualization technologies. I have hands-on experience building APIs, designing databases, automating infrastructure with Proxmox, and developing machine learning-powered web applications using Python and Streamlit. I enjoy working on practical systems that combine software engineering, data analysis, and cybersecurity concepts, and I am always eager to learn and apply new technologies in real-world projects.",
  skills: [
    "Python",
    "JavaScript",
    "SQL",
    "PHP",
    "Streamlit",
    "ReactJS",
    "Linux",
    "Docker",
    "Proxmox",
    "Git",
    "Machine Learning",
  ],
  projects: [
    {
      name: "HAHE Analysis",
      description:
        "Exploratory data analysis and visualization project for the Hellenic Authority for Higher Education dataset. Includes dataset construction, cleaning, and statistical insights.",
      link: "https://github.com/fdhima/hahe-analysis",
      skills: ["Python", "Pandas", "Data Analysis", "Visualization"],
    },
    {
      name: "StreamML",
      description:
        "Machine learning web application for interactive data analysis and visualization. Implements clustering workflows using K-Means and Hierarchical Clustering through a Streamlit-based UI.",
      link: "https://github.com/dflorian251/Decision-Support-Systems",
      skills: ["Python", "Streamlit", "Machine Learning", "Data Analysis"],
    },
    {
      name: "MarketingDSS",
      description:
        "Web-based Decision Support System leveraging Random Forest models for predictive analytics, developed and deployed using Streamlit.",
      link: "https://marketing-dss.streamlit.app/",
      skills: ["Python", "Streamlit", "Random Forest", "Data Science"],
    },
    {
      name: "TrelloClone",
      description:
        "Full-stack task management application inspired by Trello, featuring user authentication, task CRUD operations, assignments, and push notifications.",
      link: "https://github.com/dflorian251/Internet-Technologies",
      skills: ["JavaScript", "PHP", "MySQL", "HTML", "CSS"],
    },
  ],
  experience: [
    {
      company: "PDMFC",
      title: "Software Developer",
      dateRange: "Sep 2024 - Dec 2025",
      bullets: [
        "Designed and automated virtual machine deployment workflows using Proxmox.",
        "Developed provisioning and configuration scripts to standardize VM environments.",
        "Implemented cybersecurity simulation scenarios across distributed virtual machines.",
        "Designed relational database schemas and migrations for Sigma detection rules.",
        "Built backend services to retrieve Sigma rules, convert them to SQL, and schedule query execution.",
        "Developed REST APIs for managing and interacting with Sigma detection rules.",
        "Implemented a self-sovereign identity (SSI) authentication flow following community standards.",
      ],
    },
    {
      company: "CWA",
      title: "Software Developer Intern",
      dateRange: "Jul 2024 - Sep 2024",
      bullets: [
        "Developed scheduled CRON jobs in TypeScript to clean up stale and pending requests.",
        "Implemented mobile UI components using the Ionic framework.",
      ],
    },
  ],

  education: [
    {
      school: "Ionian University",
      degree: "BSc in Informatics",
      dateRange: "2021 - 2015",
      achievements: [
        "GPA: 8.83/10",
        "Ranking top 3% at throughtout all years.",
        "Thesis: Design and Implementation of a 6G Testbed for Pilot Planning."
      ],
    },
  ],
};
