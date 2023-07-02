/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';



const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Anmol Agarwal',
  title: "Hi all, I'm Anmol",
  subTitle: emoji(
    'A passionate individual who always thrive to work on end to end products 🚀 which develop sustainable and scalable social and technical systems to create impact.  '
  ),
  resumeLink:
    'https://drive.google.com/drive/folders/18Z2EjozJsjy1OQeT0vLaCkhOFY0AYgsM?usp=sharing',
    repoLink:'https://github.com/fineanmol/fineanmol.github.io',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/fineanmol',
  linkedin: 'https://www.linkedin.com/in/fineanmol/',
  gmail: 'anmol.agarwal2004@yahoo.com',
  // facebook: 'https://www.facebook.com/fineanmol',
  // twitter: 'https://twitter.com/fineanmol',
  instagram: 'http://instagram.com/fineanmol',
  //medium: '',
  // stackoverflow: '',
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Develop interactive front-end/UI for web and mobile apps'
    ),
    emoji('⚡ Mobile app development using JavaScript, Kotlin, and Java'),
    emoji('⚡ Integration of third-party services (Firebase, AWS, Digital Ocean)'),
    emoji('⚡ Experience with multiple cloud platforms'),
    emoji("⚡ Hosting and maintaining websites on virtual machines with database integration"),
    emoji('⚡ Deploying deep learning models on the cloud for mobile devices'),
    emoji("⚡ Setting up streaming jobs between DB and server on GCP and AWS"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'Html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'CSS3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'fab fa-sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
      style: {
        hover: "#F7DF1E",
      },
    },
    {
      skillName: 'ReactjS',
      fontAwesomeClassname: 'fab fa-react',
    
    },
    {
      skillName: 'NodejS',
      fontAwesomeClassname: 'fab fa-node',
      
    },
    
    {
      skillName: 'NPM',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'SQL-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'Android',
      fontAwesomeClassname: 'fab fa-android',
    },
    {
      skillName: 'AWS',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'Firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
    {
      skillName: 'Python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

const fullStackSection = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji('⚡ Experience working on multiple cloud platforms'),
    emoji('⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'),
    emoji("⚡ Deploying deep learning models on cloud to use on mobile devices"),
    emoji("⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'Html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'CSS3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'fab fa-sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
      style: {
        hover: "#F7DF1E",
      },
    },
    {
      skillName: 'ReactjS',
      fontAwesomeClassname: 'fab fa-react',
    
    },
    {
      skillName: 'NodejS',
      fontAwesomeClassname: 'fab fa-node',
      
    },
    
    {
      skillName: 'NPM',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'SQL-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'Android',
      fontAwesomeClassname: 'fab fa-android',
    },
    {
      skillName: 'AWS',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'Firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
    {
      skillName: 'Python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Galgotias University',
      logo: require("./assets/images/gulogo.png"),
      subHeader: emoji('Bachelor of Technology in Computer Science (🥉 Medalist)'),
      duration: 'September 2015 - August 2019',
      desc: '',
      descBullets: ['Participated in the Research of Advanced Threat Detection System and organized 2 hackathons..\n ',
        emoji('Ranked in the top 1% of the graduation program, earning the #Medalist🥉 distinction.'),
        'Completed courses on Software Engineering, Web Security, and Operating Systems, among others..',
      ],
    },
    {
      schoolName: 'Saraswati Vidya Mandir',
      logo:require('./assets/images/school.jpg'),
      subHeader: 'Senior Secondary School',
      duration: 'March 2014 - April 2015',
      desc:
        '',
      descBullets: ['Scored 90% with Mathematics, Physics and Chemistry as my major subjects. '],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '85%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '80%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '95%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
    role: 'Software Engineer II',
    company: 'Shaadi.com',
    companylogo: require('./assets/images/Shaadi.png'),
    date: 'March 2022 – Present',
    desc:'',
      descBullets: [

        'Migrated legacy code to enhanced rich Typescript with React Js and NextJS framework.',
        'Experienced with React.js state management workflows (such as Flux, Redux, or Context API), React Hooks, and developed custom hooks.',
        'Created more user-friendly features - helped to get more engaging users as per the analysis of the product.',
        'Prototyped creative solutions quickly, and able to collaborate with others in crafting and implementing the technical vision.'
      ],
  },
    {
    role: 'Senior Systems Engineer',
    company: 'Infosys Ltd.',
    companylogo: require('./assets/images/infosys.png'),
    date: 'September 2019 – March 2022',
    desc:'',
      descBullets: [

        'Worked in agile environment with weekly stand-up, kept track of user stories/bugs in projects.',
        'Pair programmed with 3 engineers, and reviewed teams code to provide additional perspective and catch previously missed errors & Eslint issues.',
        'Learned front-end object-oriented programming to develop client & server side systems.',
        'Identified and implemented dynamic web solutions in accordance to company standards.',
      ],
  },
    
    {
      role: 'SDE @Intern',
      company: 'Infosys Ltd',
      companylogo: require('./assets/images/infosys.png'),
      date: 'Jan 2019 – May 2019',
     // desc:'',
     descBullets: [
      'Complete 24 weeks Internship Training Program',
      'Completed Full stack developer training in Microsoft Track (Lang used: Asp .Net, C#, MS SQL, Bootstrap, CSS, HTML)',
     
    ],
    },
    
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'fineanmol', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/tfb.jpeg'),
      projectName: "TheFlyingBasket",
      projectDesc: "It is an online portal where you can get Affordable Chemical Free Fruits , Vegetables , All Grocery items and Personal care in best price at your door step. You can select and purchase a wide variety of fruits and vegetables merely sitting at home. ",
     
      footerLink: [
        {
          name: 'Visit Website',
          url:
            'https://www.facebook.com/theflyingbasket',
        },
        //  you can add extra buttons here.
      ],
    },
    
    {
      image: require('./assets/images/mirai.webp'),
      projectName: "Mirai Vizion",
      projectDesc: "An AI-based product that helps the customer to advertise their products in no time. It Isn't great not only in cities, states, but you can also advertise your products in countries with this tech.",
      footerLink: [
        {
          name: 'Visit Mirai Vizion',
          url:
            'https://mirai-vizion.vercel.app/',
        },
      ],
    },
    {
      image: require('./assets/images/hindcon.png'),
      projectName: "Hindcon.com",
      projectDesc: "It is an online portal where you can get Affordable Chemicals for your home and Factory plant in best price at your door step. You can select and purchase a wide variety of waterproofing and repair servicing chemicals merely sitting at home. ",
     footerLink: [
        {
          name: 'Visit Hindcon Chemicals',
          url:
            'https://hindcon.com/',
        },
      ],
    },
 
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    
    {
      title: 'Rockstar of the Month Medalist',
      subtitle:
        'Become Rockstar of the Month for exceptional code quality maintenance and record-breaking resolution of 50+ bugs.',
      image: require('./assets/images/Rockstar.png'),
      footerLink: [
        {
          name: 'Nomination',
          url:
            'https://media.licdn.com/dms/image/C4D2DAQHEFonWBeVq4A/profile-treasury-image-shrink_1920_1920/0/1676985317978?e=1688911200&v=beta&t=eOD8IoC_NJUtgSbYY1XZk_25fIde6pzRNyXMIKHxVv0',
        },
        {
          name: 'View Rockstar Certificate',
          url:
            'https://drive.google.com/file/d/1ikrDTDqTSy7O6Tld0Eyb2paJxMLN5NS7/view?usp=sharing',
        }, 
      ],
    },
    {
      title: 'Bronze Medalist',
      subtitle:'Awarded the Bronze Medal and Certificate in recognition of outstanding academic performance during my B.Tech CSE graduation.',
      image: require('./assets/images/medal.jpg'),
      footerLink: [
        {
          name: 'View Medal',
          url:
            'https://www.linkedin.com/posts/fineanmol_medal-academicexcellence-medalist-activity-6744668235779645440-f-5i',
        },
        {
          name: 'View Medal Certificate',
          url:
            'https://drive.google.com/file/d/1GFkMfo0ry98NWunm0Zw4QXZ7kRyR1-2x/view?usp=sharing',
        }, 
      ],
    },

    {
      title: 'Digital Ocean OpenSource Contributor',
      subtitle: 'Consistently recognized with award prizes for participation in the HacktoberFest event by DigitalOcean from 2019 to 2022.',
      image: require('./assets/images/digitalocean.png'),
      footerLink: [
        { name: 'Swags', url: 'https://www.linkedin.com/posts/fineanmol_hacktoberfest-hacktoberfest2020-opensource-activity-6769234540062916608-ih0S' },
        {
          name: 'Rewards',
          url: 'https://www.linkedin.com/posts/fineanmol_hacktoberfest-hacktoberfest2020-opensource-activity-6769234540062916608-ih0S',
        },
      ],
    },
    {
      title: 'IBM Quantum Business Badge',
      subtitle: 'Quantum Business Badge recipient in leveraging quantum computing technology for innovative business solutions.',
      image: require('./assets/images/ibm.png'),
      footerLink: [
        { name: 'Rewards', url: 'https://www.linkedin.com/posts/fineanmol_infosys-ibm-ibmquantum-activity-6789256112379105280-GtqI' },
        {
          name: 'Final Project',
          url: 'https://www.linkedin.com/posts/fineanmol_hacktoberfest-hacktoberfest2020-opensource-activity-6769234540062916608-ih0S',
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://www.linkedin.com/posts/fineanmol_git-developer-softwaredeveloper-activity-6838040772248428544-OaW7',
      title: 'Git commands',
      description:
        'Awesome notes on #git command by Tomomi Imura ( Creative Idea💡)...',
    },
    {
      url: 'https://www.linkedin.com/posts/fineanmol_docker-activity-6857287152917626881-wwWJ',
      title: 'What is Docker?',
      description:
''    },
    {
      url: 'https://www.linkedin.com/posts/fineanmol_kubernetes-kubernetes-kubernetessecurity-activity-6860672331719745536-mbUr',
      title: 'What is Kubernetes?',
      description:
''    },
    {
      url: 'https://www.linkedin.com/posts/fineanmol_devops-devopscommunity-devops-activity-6861596540230799361-TkdW',
      title: 'What is DevOps?',
      description:''

    },
    {
      url: 'https://www.linkedin.com/posts/fineanmol_cloudcomputing-cloud-cloudgovernance-activity-6866967266261565440-vEq6',
      title: 'What is Cloud Computing?',
      description:
''    },
    {
      url: 'https://www.linkedin.com/posts/fineanmol_api-apiintegration-apimanagement-activity-6869510567439204352-RGtI',
      title: 'What is API?',
      description:
''    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest  2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast Pending🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
   // 'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+91-7827327604',
  emailAddress: 'anmol.agarwal2004@yahoo.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'fineanmol', //Replace "twitter" with your twitter username without @
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
