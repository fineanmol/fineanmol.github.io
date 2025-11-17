import emoji from "react-easy-emoji";
import IU_logo from "./assets/images/IU_logo.png";
import gulogo from "./assets/images/gulogo.png";
import school from "./assets/images/school.jpg";
import knime from "./assets/images/knime.png";
import link11 from "./assets/images/link11.png";
import Shaadi from "./assets/images/Shaadi.png";
import infosys from "./assets/images/infosys.png";
import tfb from "./assets/images/tfb.jpeg";
import mirai from "./assets/images/mirai.webp";
import hindcon from "./assets/images/hindcon.png";
import Rockstar from "./assets/images/Rockstar.png";
import medal from "./assets/images/medal.jpg";
import digitalocean from "./assets/images/digitalocean.png";
import ibm from "./assets/images/ibm.png";

const illustration = {
  animated: true,
};

const greeting = {
  username: "Anmol Agarwal",
  title: "Hi all, I'm Anmol",
  subTitle: emoji(
    "A passionate individual who always thrive to work on end to end products 🚀 which develop sustainable and scalable social and technical systems to create impact.  "
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/18Z2EjozJsjy1OQeT0vLaCkhOFY0AYgsM?usp=sharing",
  repoLink: "https://github.com/fineanmol/fineanmol.github.io",
  displayGreeting: true,
};

const socialMediaLinks = {
  github: "https://github.com/fineanmol",
  linkedin: "https://www.linkedin.com/in/fineanmol/",
  gmail: "anmol.agarwal2004@yahoo.com",
  instagram: "http://instagram.com/fineanmol",
  display: true,
};

const skillsSection = {
  title: "What I do",
  subTitle: "Enthusiastic Frontend Engineer",
  skills: [
    emoji(
      "⚡ Develop interactive front-end interfaces using React, Vue.js, and TypeScript"
    ),
    emoji(
      "⚡ Optimize performance and bundle size for enterprise-scale applications"
    ),
    emoji(
      "⚡ Write reusable, modular components with Tailwind CSS, Material UI, and custom design systems"
    ),
    emoji(
      "⚡ Integrate RESTful & GraphQL APIs, ensuring robust data flow and state management (Redux, Vuex)"
    ),
    emoji(
      "⚡ Build and maintain CI/CD pipelines (GitLab CI, Docker) for rapid deployment"
    ),
  ],

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "fas fa-paint-brush",
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
      style: {
        hover: "#F7DF1E",
      },
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js",
      style: {
        hover: "#3178C6",
      },
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs",
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node-js",
    },

    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fab fa-google",
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "NoSQL",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git",
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "JIRA",
      fontAwesomeClassname: "fab fa-jira",
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux",
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android",
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "KNIME",
      fontAwesomeClassname: "fas fa-flask",
    },
  ],
  display: true,
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "IU University of Applied Sciences, Berlin, Germany",
      logo: IU_logo,
      subHeader: emoji("Master of Science in Data Science"),
      duration: "April 2024 – May 2025",
      desc: "Specializing in advanced machine learning, full-stack web development, and enterprise-scale data engineering solutions.",
      descBullets: [
        "Architecting production-ready MERN stack applications integrated with TensorFlow.js for real-time ML inference, serving 10K+ concurrent users.",
        "Developing scalable data pipelines using Node.js, Express.js, MongoDB, and React.js for big data analytics platforms on AWS and GCP.",
        "Implementing advanced deep learning models (CNNs, RNNs, Transformers) with Python, PyTorch, and TensorFlow for computer vision projects.",
        "Leading cross-functional team projects applying DevOps practices with Docker, Kubernetes, CI/CD, and microservices architecture patterns.",
        "Conducting research on AI-driven web optimization techniques, achieving 40% performance improvements in React applications with ML-powered caching.",
      ],
    },
    {
      schoolName: "Galgotias University, Delhi, India",
      logo: gulogo,
      subHeader: emoji(
        "Bachelor of Technology in Computer Science (🥉 Medalist)"
      ),
      duration: "September 2015 – August 2019",
      desc: "",
      descBullets: [
        "Graduated in the top 1% of my class, awarded Bronze Medal for academic excellence.",
        "Organized and led two university hackathons, mentoring 100+ participants in full-stack development.",
        "Completed coursework in Software Engineering, Web Security, Operating Systems, and Data Structures.",
        'Developed a campus-wide "Smart Attendance System" using ASP.NET and MS SQL, reducing manual attendance effort by 80%.',
        "Conducted research on Advanced Threat Detection Systems, contributing to improved security protocols.",
      ],
    },
    {
      schoolName: "Saraswati Vidya Mandir, India",
      logo: school,
      subHeader: "Senior Secondary School",
      duration: "March 2014 – April 2015",
      desc: "",
      descBullets: [
        "Achieved 90% marks across Mathematics, Physics, and Chemistry, demonstrating strong analytical and problem-solving skills.",
        "Excelled in advanced mathematics and physics coursework, building foundation for computer science and engineering concepts.",
        "Participated in regional science fairs and won 2nd place for innovative physics project on renewable energy solutions.",
        "Developed programming fundamentals through self-learning C++ and basic web development during final year.",
        "Maintained consistent academic performance while actively participating in extracurricular activities and STEM competitions.",
      ],
    },
  ],
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "85%",
    },
    {
      Stack: "Backend & APIs",
      progressPercentage: "80%",
    },
  ],
  displayCodersrank: false,
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Frontend Developer",
      company: "Link11 GmbH (Berlin, Germany)",
      companylogo: link11,
      date: "August 2025 – Present",
      desc: "Link11 is a leading European cybersecurity company specializing in cloud-based DDoS protection and IT security solutions, evolving into a unified security platform (WAAP).",
      descBullets: [
        "Contributing to the Fabric unification initiative—a Vue-based multi-frontend architecture driving consistency, scalability, and developer productivity.",
        "Developing the Fabric unified platform frontend with Vue 3, ensuring seamless integration across multiple security modules.",
        "Leveraging Storybook for component development, documentation, and cross-team collaboration.",
        "Tackling advanced TypeScript and front-end performance optimization issues within the core security framework.",
        "Consolidating DOSarrest, Reblaze, and core services into one end-to-end protection stack.",
      ],
    },
    {
      role: "Software Developer",
      company: "KNIME (Berlin, Germany)",
      companylogo: knime,
      date: "June 2024 – July 2025",
      desc: "KNIME is an open-source data analytics platform empowering organizations with advanced data science, machine learning, and workflow automation.",
      descBullets: [
        "Developed user-centric web/desktop applications using Vue.js, enhancing the user experience for data-driven decision-making.",
        "Migrated legacy components to modern Vue 3 TypeScript architecture, improving maintainability and reducing technical debt.",
        "Implemented comprehensive unit testing strategies using Jest, achieving over 98% code coverage and reducing production bugs.",
        "Created intuitive interfaces that simplify complex data analytics workflows for businesses and researchers.",
        "Collaborated with cross-functional teams to deliver features that improved platform adoption and user satisfaction.",
      ],
    },
    {
      role: "Software Engineer III",
      company: "Shaadi.com (Remote)",
      companylogo: Shaadi,
      date: "March 2022 – March 2024",
      desc: "Shaadi is India's leading & World's #1 Matchmaking Platform with 35Mn+ active users worldwide.",
      descBullets: [
        "Led development of user engagement features—onboarding, authentication, verification, and AI-driven recommendation systems.",
        "Migrated legacy codebase to TypeScript with React.js/Next.js framework, improving code quality and maintainability.",
        "Designed and built next-level interactive features using Redux for state management, increasing user engagement metrics.",
        "Worked on Application Tracking System with AI-driven processing, filters, and chat functionality with a team of 4 developers.",
        "Created user-friendly features that significantly increased user engagement based on product analysis and feedback.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Infosys Ltd. (Bangalore, India)",
      companylogo: infosys,
      date: "September 2019 – March 2022",
      desc: "",
      descBullets: [
        "Worked in an Agile SCRUM team to design and develop client/server web applications using React.js, Node.js, and Java Spring Boot.",
        "Refactored monolithic modules into microservices architecture—reduced average response time by 25% and improved horizontal scalability.",
        "Performed code reviews, pair programming, and static code analysis, ensuring 100% adherence to ESLint and SonarQube standards.",
        "Integrated RESTful APIs for banking clients, handling 1M+ transactions daily with 99.9% uptime SLA.",
        "Led sprint planning and delivery for enterprise banking solutions, consistently meeting project deadlines with zero production incidents.",
      ],
    },
    {
      role: "SDE Intern",
      company: "Infosys Ltd. (Bengaluru, India)",
      companylogo: infosys,
      date: "January 2019 – May 2019",
      desc: "",
      descBullets: [
        "Completed intensive 24-week Full-Stack Developer training program in Microsoft Track with distinction.",
        "Trained in ASP.NET, C#, MS SQL, CSS, Bootstrap, and server-less architecture on AWS, GCP, and Azure.",
        "Developed full-stack applications using ASP.NET MVC and MS SQL with responsive UI components.",
        "Gained hands-on experience with enterprise development practices, code reviews, and debugging.",
        "Built strong foundation in modern web development technologies and cloud platforms.",
      ],
    },
  ],
};

const openSource = {
  githubUserName: "fineanmol",
  githubConvertedToken: import.meta.env.VITE_GITHUB_TOKEN || "",
  showGithubProfile: true,
  display: true,
};

const bigProjects = {
  title: "Big Projects",
  subtitle: "STARTUPS AND ENTERPRISE PROJECTS I'VE CONTRIBUTED TO",
  projects: [
    {
      projectName: "KNIME Analytics Platform Frontend",
      projectDesc:
        "Designed and optimized the Workflow Canvas and Sidebar components in KNIME AP's web documentation. Improved rendering speed by 30% and increased test coverage to 95%.",
      footerLink: [
        {
          name: "View KNIME Frontend Repo",
          url: "https://github.com/knime/knime-frontend",
        },
      ],
    },
    {
      projectName: "Shaadi.com UI Modernization",
      projectDesc:
        "Led the migration from JavaScript to TypeScript + Next.js for Shaadi.com's core user flows. Reduced page load time by 40% and decreased bug count by 50%.",
      footerLink: [
        {
          name: "Read Case Study",
          url: "https://medium.com/@fineanmol/shaadi-ui-migration-case-study",
        },
      ],
    },
    {
      image: tfb,
      projectName: "TheFlyingBasket",
      projectDesc:
        "An online portal offering affordable, chemical-free groceries and personal care products delivered to your doorstep.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.facebook.com/theflyingbasket",
        },
      ],
    },
    {
      image: mirai,
      projectName: "Mirai Vizion",
      projectDesc:
        "An AI-based advertising platform enabling businesses to reach global audiences effortlessly.",
      footerLink: [
        {
          name: "Visit Mirai Vizion",
          url: "https://mirai-vizion.vercel.app/",
        },
      ],
    },
    {
      image: hindcon,
      projectName: "Hindcon.com",
      projectDesc:
        "An online portal providing affordable chemicals for home and industrial use, with doorstep delivery.",
      footerLink: [
        {
          name: "Visit Hindcon Chemicals",
          url: "https://hindcon.com/",
        },
      ],
    },
  ],
  display: true,
};

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Awards, Hackathons, and Certifications that showcase my contributions and skills.",
  achievementsCards: [
    {
      title: "Rockstar of the Month (Shaadi.com)",
      subtitle:
        "Awarded for exceptional code quality maintenance and resolving 50+ critical bugs within record time.",
      image: Rockstar,
      footerLink: [
        {
          name: "Nomination Details",
          url: "https://media.licdn.com/dms/image/v2/C4D2DAQHEFonWBeVq4A/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1676985317978?e=1749484800&v=beta&t=0_1OSHNTYWJEqKD4zOzesGqaxLpHBcUN3UQkemc-bjE",
        },
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1WixNhIn6Chp8IlOQc_ynbSSt3dH3ScRs/view?usp=sharing",
        },
      ],
    },
    {
      title: "Bronze Medalist (G.U.)",
      subtitle:
        "Awarded Bronze Medal for ranking in the top 1% of the Computer Science program at Galgotias University.",
      image: medal,
      footerLink: [
        {
          name: "View Medal",
          url: "https://www.linkedin.com/posts/fineanmol_medal-academicexcellence-medalist-activity-6744668235779645440-f-5i",
        },
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1KvFd_AFWmurTjPyKxSM5r0RWOgZPx-3d/view?usp=sharing",
        },
      ],
    },
    {
      title: "Hacktoberfest Open Source Contributor",
      subtitle:
        "Recognized by DigitalOcean from 2019 to 2022 for consistent contributions to open-source projects during Hacktoberfest.",
      image: digitalocean,
      footerLink: [
        {
          name: "Swags",
          url: "https://www.linkedin.com/posts/fineanmol_hacktoberfest-hacktoberfest2020-opensource-activity-6769234540062916608-ih0S",
        },
        {
          name: "Rewards",
          url: "https://www.linkedin.com/posts/fineanmol_hacktoberfest-hacktoberfest2020-opensource-activity-6769234540062916608-ih0S",
        },
      ],
    },
    {
      title: "IBM Quantum Business Badge",
      subtitle:
        "Earned for leveraging quantum computing technology to propose innovative business solutions.",
      image: ibm,
      footerLink: [
        {
          name: "Badge Details",
          url: "https://www.linkedin.com/posts/fineanmol_infosys-ibm-ibmquantum-activity-6789256112379105280-GtqI",
        },
      ],
    },
  ],
  display: true,
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "Sharing insights on Web Development, Data Science, and best practices.",
  blogs: [
    {
      url: "https://www.linkedin.com/posts/fineanmol_git-developer-softwaredeveloper-activity-6838040772248428544-OaW7",
      title: "Git commands",
      description:
        "Awesome notes on #git command by Tomomi Imura ( Creative Idea💡)...",
    },
    {
      url: "https://www.linkedin.com/posts/fineanmol_docker-activity-6857287152917626881-wwWJ",
      title: "What is Docker?",
      description: "",
    },
    {
      url: "https://www.linkedin.com/posts/fineanmol_kubernetes-kubernetes-kubernetessecurity-activity-6860672331719745536-mbUr",
      title: "What is Kubernetes?",
      description: "",
    },
    {
      url: "https://www.linkedin.com/posts/fineanmol_devops-devopscommunity-devops-activity-6861596540230799361-TkdW",
      title: "What is DevOps?",
      description: "",
    },
    {
      url: "https://www.linkedin.com/posts/fineanmol_cloudcomputing-cloud-cloudgovernance-activity-6866967266261565440-vEq6",
      title: "What is Cloud Computing?",
      description: "",
    },
    {
      url: "https://www.linkedin.com/posts/fineanmol_api-apiintegration-apimanagement-activity-6869510567439204352-RGtI",
      title: "What is API?",
      description: "",
    },
  ],
  display: true,
};

const talkSection = {
  title: "Talks & Workshops",
  subtitle: emoji(
    "I've shared knowledge on Full-Stack Development, Data Science, and Best Practices 🎙️"
  ),
  talks: [
    {
      title: "Refactoring Legacy Frontends to TypeScript",
      subtitle: "Internal workshop at Shaadi.com, 2023",
      slides_url: "https://bit.ly/shaadi-refactor-slides",
      event_url:
        "https://www.linkedin.com/posts/fineanmol_refactoring-legacy-frontends-activity-123456",
    },
    {
      title: "Building Real-Time Data Pipelines on GCP",
      subtitle: "Guest Lecture at IU Berlin, 2024",
      slides_url: "https://bit.ly/iu-gcp-pipelines",
      event_url: "https://www.youtube.com/watch?v=abcdefg",
    },
  ],
  display: false,
};

const podcastSection = {
  title: emoji("Podcast Pending🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  podcast: [
    // 'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false,
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi! My inbox is always open.",
  number: "+49 155 1020 0497 (Berlin)",
  emailAddress: "anmol.agarwal2004@yahoo.com",
};

const twitterDetails = {
  userName: "fineanmol",
  display: false,
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
