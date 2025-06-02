/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
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
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/fineanmol",
  linkedin: "https://www.linkedin.com/in/fineanmol/",
  gmail: "anmol.agarwal2004@yahoo.com",
  instagram: "http://instagram.com/fineanmol",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Enthusiastic Frontend Engineer & Data Science Enthusiast",
  skills: [
    emoji(
      "⚡ Develop highly interactive front-end interfaces using React, Vue.js, and TypeScript"
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
    emoji(
      "⚡ Apply machine learning models (TensorFlow, PyTorch) to real-world data science projects"
    ),
    emoji(
      "⚡ Utilize cloud platforms (AWS, GCP) for hosting, streaming, and scalable data pipelines"
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
      fontAwesomeClassname: "fab fa-tachometer-alt",
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
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "IU University of Applied Sciences, Berlin, Germany",
      logo: require("./assets/images/IU_logo.png"),
      subHeader: emoji("Master of Science in Data Science"),
      duration: "April 2024 – May 2025",
      desc: "Focusing on machine learning, deep learning, and large-scale data pipelines.",
      descBullets: [
        "Pursuing advanced coursework in Data Science with a focus on practical applications in AI, web development, and software engineering.",
        emoji(
          "Maintaining a top-tier GPA, demonstrating consistent academic excellence."
        ),
        "Built end-to-end data pipelines on GCP, leveraging Pub/Sub, Dataflow, and BigQuery for real-time analytics.",
        "Collaborated on a group project to deploy a deep learning model (TensorFlow) on AWS for real-time image classification.",
        "Co-authored a mini-research paper on semi-supervised learning techniques for limited-data scenarios.",
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
        "Developed a campus-wide “Smart Attendance System” using ASP.NET and MS SQL, reducing manual attendance effort by 80%.",
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
        "Achieved 90% marks across Mathematics, Physics, and Chemistry.",
        "Demonstrated strong analytical and quantitative aptitude in rigorous coursework.",
        "Participated in regional science fairs—won 2nd place for a physics project on renewable energy.",
      ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "85%",
    },
    {
      Stack: "Backend & APIs",
      progressPercentage: "80%",
    },
    {
      Stack: "Data Science & ML",
      progressPercentage: "75%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer",
      company: "KNIME (Berlin, Germany)",
      companylogo: require("./assets/images/knime.png"),
      date: "April 2024 – Present",
      desc: "",
      descBullets: [
        "Develop and maintain core frontend components for KNIME Analytics Platform’s web documentation using Vue.js, TypeScript, and Tailwind CSS.",
        "Refactored legacy UI modules to improve performance by 30% and reduce bundle size using Vite.js and tree-shaking.",
        "Implemented and tested context menus, hint systems, and dynamic layouts—achieved 95% unit test coverage with Vitest.",
        "Integrated XSS protection via DOMPurify for dynamic node descriptions in workflow editors, ensuring type safety in TypeScript.",
        "Collaborate with UX designers to deliver a responsive, accessible interface for KNIME AP documentation, improving user satisfaction scores by 20%.",
        "Set up a local KNIME documentation environment using Docker for cross-platform compatibility and streamlined onboarding.",
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
        "Refactored monolithic modules into microservices—reduced average response time by 25% and improved horizontal scalability.",
        "Performed code reviews, pair programming, and static code analysis, ensuring 100% adherence to ESLint and SonarQube standards.",
        "Integrated RESTful APIs for banking clients, handling 1M+ transactions daily with 99.9% uptime SLA.",
      ],
    },
    {
      role: "SDE Intern",
      company: "Infosys Ltd. (Bangalore, India)",
      companylogo: require("./assets/images/infosys.png"),
      date: "January 2019 – May 2019",
      descBullets: [
        "Completed a 24-week Full-Stack Developer training program in ASP.NET, C#, MS SQL, and Bootstrap.",
        "Developed a “Campus Health Monitoring” dashboard using ASP.NET MVC and MS SQL—enabled real-time data visualization for 500+ users.",
      ],
    },
  ],
};

/* Open Source Section to View Your GitHub Pinned Projects
   (Token moved to environment variable; display only public repos.) */
const openSource = {
  githubUserName: "fineanmol", // Change to your GitHub username to view GitHub projects
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN || "", // GitHub Personal Access Token
  showGithubProfile: true, // Set true to show GitHub section, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "STARTUPS AND ENTERPRISE PROJECTS I’VE CONTRIBUTED TO",
  projects: [
    {
      // image: require("./assets/images/KNIME_AP_Canvas.png"),
      projectName: "KNIME Analytics Platform Frontend",
      projectDesc:
        "Designed and optimized the Workflow Canvas and Sidebar components in KNIME AP's web documentation. Improved rendering speed by 30% and increased test coverage to 95%.",
      footerLink: [
        {
          name: "View KNIME Frontend Repo",
          url: "https://github.com/knime/knime-frontend", // Example link
        },
      ],
    },
    {
      // image: require("./assets/images/Shaadi_Migration.png"),
      projectName: "Shaadi.com UI Modernization",
      projectDesc:
        "Led the migration from JavaScript to TypeScript + Next.js for Shaadi.com’s core user flows. Reduced page load time by 40% and decreased bug count by 50%.",
      footerLink: [
        {
          name: "Read Case Study",
          url: "https://medium.com/@fineanmol/shaadi-ui-migration-case-study", // Example link
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
          url: "https://github.com/fineanmol/smart-attendance", // Example link
        },
      ],
    },
    {
      image: require("./assets/images/tfb.jpeg"),
      projectName: "TheFlyingBasket",
      projectDesc:
        "It is an online portal where you can get Affordable Chemical Free Fruits, Vegetables, All Grocery items and Personal care in best price at your door step. You can select and purchase a wide variety of fruits and vegetables merely sitting at home.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.facebook.com/theflyingbasket",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/mirai.webp"),
      projectName: "Mirai Vizion",
      projectDesc:
        "An AI-based product that helps the customer to advertise their products in no time. It Isn't great not only in cities, states, but you can also advertise your products in countries with this tech.",
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
        "It is an online portal where you can get Affordable Chemicals for your home and Factory plant in best price at your door step. You can select and purchase a wide variety of waterproofing and repair servicing chemicals merely sitting at home.",
      footerLink: [
        {
          name: "Visit Hindcon Chemicals",
          url: "https://hindcon.com/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks, hackathons, etc

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
          url: "https://media.licdn.com/dms/image/C4D2DAQHEFonWBeVq4A/profile-treasury-image-shrink_1920_1920/0/1676985317978?e=1688911200&v=beta&t=eOD8IoC_NJUtgSbYY1XZk_25fIde6pzRNyXMIKHxVv0",
        },
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1ikrDTDqTSy7O6Tld0Eyb2paJxMLN5NS7/view?usp=sharing",
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
          url: "https://drive.google.com/file/d/1GFkMfo0ry98NWunm0Zw4QXZ7kRyR1-2x/view?usp=sharing",
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
        {
          name: "Final Project",
          url: "https://www.linkedin.com/posts/fineanmol_hacktoberfest-hacktoberfest2020-opensource-activity-6769234540062916608-ih0S",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

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
  display: true, // Set false to hide this section, defaults to true
};

// Talks Section

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
  display: false, // Set false to hide this section, defaults to true
};

const podcastSection = {
  title: emoji("Podcast Pending🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // 'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Contact Section

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi! My inbox is always open.",
  number: "+49 155 1020 3327 (Berlin)",
  emailAddress: "anmol.agarwal2004@yahoo.com",
};

// Twitter Section

const twitterDetails = {
  userName: "fineanmol", // Replace with your Twitter handle (without @) if you’d like to show tweets
  display: false, // Set true to display this section, defaults to false
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
