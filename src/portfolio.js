import emoji from "react-easy-emoji";

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
      logo: require("./assets/images/IU_logo.png"),
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
      logo: require("./assets/images/gulogo.png"),
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
      logo: require("./assets/images/school.jpg"),
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
      company: "KNIME (Berlin, Germany)",
      companylogo: require("./assets/images/knime.png"),
      date: "April 2024 – Present",
      desc: "",
      descBullets: [
        "Develop and maintain core frontend components for KNIME Analytics Platform's web documentation using Vue.js, TypeScript, and Tailwind CSS.",
        "Refactored legacy UI modules to improve performance by 30% and reduce bundle size using Vite.js and tree-shaking.",
        "Implemented comprehensive testing strategy with Vitest achieving 95% unit test coverage for context menus and dynamic layouts.",
        "Integrated XSS protection via DOMPurify for workflow editors, ensuring type safety and security in enterprise-grade applications.",
        "Collaborate with UX designers to deliver responsive, accessible interfaces, improving user satisfaction scores by 20%.",
      ],
    },
    {
      role: "Software Engineer II",
      company: "Shaadi.com (Mumbai, India)",
      companylogo: require("./assets/images/Shaadi.png"),
      date: "March 2022 – March 2024",
      desc: "",
      descBullets: [
        "Led migration of legacy codebase to TypeScript + React.js/Next.js, reducing critical bugs by 40%.",
        "Designed and implemented custom React Hooks and Redux workflows for state management in large-scale matrimonial platform.",
        "Optimized page load performance (LCP < 2s) across key user journeys using code-splitting and lazy loading.",
        "Built A/B testing framework using Google Optimize to measure feature impact—improved user engagement by 15%.",
        "Mentored a team of 3 junior developers on best practices in frontend architecture, component testing, and CI/CD pipelines.",
      ],
    },
    {
      role: "Senior Systems Engineer",
      company: "Infosys Ltd. (Bangalore, India)",
      companylogo: require("./assets/images/infosys.png"),
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
      company: "Infosys Ltd. (Bangalore, India)",
      companylogo: require("./assets/images/infosys.png"),
      date: "January 2019 – May 2019",
      desc: "",
      descBullets: [
        "Completed intensive 24-week Full-Stack Developer training program in ASP.NET, C#, MS SQL, and Bootstrap with distinction.",
        'Developed "Campus Health Monitoring" dashboard using ASP.NET MVC and MS SQL—enabled real-time data visualization for 500+ users.',
        "Implemented responsive UI components with Bootstrap and jQuery, ensuring cross-browser compatibility and mobile responsiveness.",
        "Designed and optimized database schemas in MS SQL Server, improving query performance by 40% for reporting modules.",
        "Collaborated with senior developers on code reviews and debugging, gaining hands-on experience with enterprise development practices.",
      ],
    },
  ],
};

const openSource = {
  githubUserName: "fineanmol",
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN || "",
  showGithubProfile: true,
  display: true,
};

const bigProjects = {
  title: "Big Projects",
  subtitle: "STARTUPS AND ENTERPRISE PROJECTS I'VE CONTRIBUTED TO",
  projects: [
    {
      // image: require("./assets/images/KNIME_AP_Canvas.png"),
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
      // image: require("./assets/images/Shaadi_Migration.png"),
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
      // image: require("./assets/images/SmartAttendance.png"),
      projectName: "Smart Attendance System",
      projectDesc:
        "Built an ASP.NET & MS SQL-based attendance management solution for Galgotias University. Automated roll-call and reporting, saving 80% of manual effort.",
      footerLink: [
        {
          name: "University Project Repo",
          url: "https://github.com/fineanmol/smart-attendance",
        },
      ],
    },
    {
      image: require("./assets/images/tfb.jpeg"),
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
      image: require("./assets/images/mirai.webp"),
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
      image: require("./assets/images/hindcon.png"),
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
      image: require("./assets/images/Rockstar.png"),
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
      image: require("./assets/images/medal.jpg"),
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
      image: require("./assets/images/digitalocean.png"),
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
      image: require("./assets/images/ibm.png"),
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
  number: "+49 155 1020 3327 (Berlin)",
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
