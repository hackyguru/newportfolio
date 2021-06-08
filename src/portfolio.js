/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kumaraguru's Portfolio",
  description:
    "Kumaraguru (@hackyguru) is a a techie with experience in design, development and security. His domains of interest ae AI, ML, Cyber security and design thinking. He has achievements in winning 20+ international collegite hackathons and numerous coding events.",
  og: {
    title: "Kumaraguru T",
    type: "website",
    url: "https://kumaraguru.me",
  },
};

const devpost ={
  link:"https://devpost.com/hackyguru",
};
//Home Page
const greeting = {
  title: "Hi, I'm Guru ",
  logo_name: "Kumaraguru T",
  nickname: "@hackyguru",
  subTitle:
    "A passionate developer 💻 and security researcher 👨‍💻 who loves to code and eat random stuff. My domains of interest extend in AI, ML, cyber security and design thinking. Besides technology, I am a cross-cultural travel and adventure freak! 🎒❤️",
  resumeLink:
    "https://drive.google.com/file/d/1OZhpgLxorcYmheGUCIaoJvU71D3JKiID/view?usp=sharing",
  portfolio_repository: "https://drive.google.com/file/d/1OZhpgLxorcYmheGUCIaoJvU71D3JKiID/view?usp=sharing",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/hackyguru",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kumaraguru7/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:kumaragurut7@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/guuru37/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },


  {
    name: "Dev",
    link: "https://www.dev.to/hackyguru",
    fontAwesomeIcon: "fa-dev",
    backgroundColor: "#0A0A0A"
  }
];


const skills = {
  data: [
  
    {
      title: "Design, development and security!",
      fileName: "FullStackImg",
      skills: [
        "⚡ I write code and break security.",
        "⚡ I design and develop web and cross platform mobile apps.",
        "⚡ I develop full stack web applications with JS and Python frameworks.",
        "⚡ I create VR/AR experiences on various platforms.",
        "⚡ I am enthusiastic about AI and ML.",
        "⚡ I love documenting and branding with creative suite.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#02569B",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Raspberry Pi",
          fontAwesomeClassname: "simple-icons:raspberrypi",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Blockchain",
          fontAwesomeClassname: "simple-icons:ethereum",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "GoLang",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Google Cloud",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "AR/VR",
          fontAwesomeClassname: "simple-icons:googlecardboard",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "AI/ML",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
  ],
};


// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "",
    },
    {
      siteName: "Devpost",
      iconifyClassname: "simple-icons:devpost",
      style: {
        color: "#5B4638",
      },
      profileLink: "",
    },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "",
    },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Sri Krishna College Of Engineering And Technology",
      subtitle: "B.E Computer Science",
      logo_path: "skcet_logo.png",
      alt_name: "SKCET",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ Experience in fundamental subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Learnt full stack development and other technologies by self learning.",
        "⚡ Successfully passed some certifications that pleased my interests.",
      ],
      website_link: "http://skcet.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Cyber Security - IIT M",
      subtitle: "Workshop",
      logo_path: "iitm.png",
      certificate_link:
        "https://drive.google.com/file/d/1FJbSsyPuMqqlUU-q7YnNNa6PJzTu6zq8/view?usp=sharing",
      alt_name: "iitm",
      color_code: "#FFFFFF",
    },
    {
      title: "Cyber Security",
      subtitle: "Conference",
      logo_path: "isaca.png",
      certificate_link:
        "https://drive.google.com/file/d/1hTGNOcRr7atiz6i3WNZ7S3xDrJbdcL2K/view?usp=sharing",
      alt_name: "isaca",
      color_code: "#FFFFFF",
    },
    {
      title: "Blockchain (IPFS)",
      subtitle: "Fellowship/ Grant",
      logo_path: "protocol-labs.png",
      certificate_link:
        "https://drive.google.com/file/d/13B-LDEpLRgFaiCHyHeZZuBiis7BQ53HV/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#ffffff",
    },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    {
      title: "Python for penetration testing",
      subtitle: "Course",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-bedaaf7a-8bf6-4e06-b11e-dd0260f1cf11/",
      alt_name: "Coursera",
      color_code: "#FFFFFF",
    },
    {
      title: "Cloud Infrastructure GCP",
      subtitle: "Course",
      logo_path: "google_logo.png",
      certificate_link:
        "#",
      alt_name: "Google",
      color_code: "#FFFFFF",
    },
    {
      title: "Introduction to AWS",
      subtitle: "Course",
      logo_path: "AWS.png",
      certificate_link:
        "#",
      alt_name: "Stanford University",
      color_code: "#FFFFFF",
    },
    {
      title: "Certified Ethicl Hacker v10",
      subtitle: "Certification",
      logo_path: "ceh.png",
      certificate_link:
        "#",
      alt_name: "Stanford University",
      color_code: "#FFFFFF",
    },
    {
      title: "Certified Network Security Specialist",
      subtitle: "Certification",
      logo_path: "icsi.png",
      certificate_link:
        "#",
      alt_name: "Stanford University",
      color_code: "#FFFFFF",
    },
    {
      title: "Full stack development with MERN",
      subtitle: "Course",
      logo_path: "courseera.png",
      certificate_link:
        "#",
      alt_name: "Stanford University",
      color_code: "#FFFFFF",
    },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have experience in working in various projects with different tech stacks. I am a regular contributor to FOSS and I am an active member of Hack Club community.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Contributions",
      experiences: [
        {
          title: "Blockchain Development",
          company: "Protocol Labs",
          company_url: "https://filecoin.io/",
          logo_path: "protocol-labs.png",
          
          description:
            "We contributed a solution that will allow court proceedings to be stored digitally on IPFS decentralized storage with every record stored on the ethereum blockchain. ",
          color: "#0879bf",
        },
        {
          title: "Hacktober Fest",
          company: "Intel, Dev.to and Digital Ocean",
          company_url: "https://hacktoberfest.digitalocean.com/",
          logo_path: "hacktober.png",
          
          description:
            "Hacktober fest is a month long celebration of Open-source. I have succesfully completed 4+ PRs during Hacktober Fest 2019 and 2020.",
          color: "#0879bf",
        },
        {
          title: "Hack Club Workshops",
          company: "HackClub.com",
          company_url: "https://hackclub.com/",
          logo_path: "hackclub.png",
          
          description:
            "Hack Club is an international community of student coders. I have successfully published 2 workshops on HackClub's official website.",
          color: "#0879bf",
        },
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Technical intern",
          company: "Trell Pvt. Ltd.",
          company_url: "https://www.trell.co/",
          logo_path: "trell.jpg",
          duration: "Jun 2020 - Sep 2020",
          description:
            "I worked as a technical content writing intern at Trell.co for 3 months. I was hired through Internshala.",
          color: "#ee3c26",
        },
        {
          title: "Development and Security Intern",
          company: "DigiLocker (under Ministry of Electronics and IT)",
          company_url: "https://www.digilocker.gov.in/",
          logo_path: "digilocker.png",
          description:
            "I worked as a technical content writing intern at Trell.co for 3 months. I was hired through Internshala.",
          color: "#ee3c26",
        },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Hack Club Skcet",
          company: "HackClub.com",
          company_url: "https://hackclubskcet.tech",
          logo_path: "hackclub.png",
          description:
            "I am one of the leaders of Hack Club SKCET - the coding community of Sri Krishna College of Engineering and Technology.",
          color: "#4285F4",
        },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};


// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create crazy applications and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.png",
    description:
      "Feel free to say hi if you wish to have a healthy convo. You can reach me out through the following links for a quick response.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://ashutoshhathidara.wordpress.com",
  //   avatar_image_path: "blogs_image.svg",
  // },
  // addressSection: {
  //   title: "Address",
  //   subtitle:
  //     "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
  //   avatar_image_path: "address_image.svg",
  //   location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  // },
  // phoneSection: {
  //   title: "Phone Number",
  //   subtitle: "+91 8320758513",
  // },
};

const achievementSection = {

  title: "Achievements",
  subtitle: "Some of my recent achievements!",

  achivementsCards: [
    {
      title: "Winner - Bitcamp",
      subtitle: "We qualified for Pinnacle - the olympics of hackathons as a result of winning BitCamp which is the flagship hackathon of University of Maryland.",
      image:
        "https://cdn.discordapp.com/attachments/814552534416621591/848839788240044052/achievement1.gif",
  
    },
    {
      title: "Winner - Facebook F8 Hackathon",
      subtitle: "F8 Refresh is one among the flagship hackathons conducted by Facebook for both working professionals and students across the world.",
      image: "https://raw.githubusercontent.com/hackyguru/HostedImages/master/ach24.png",

    },
    {
      title: "Winner - CalHacks",
      subtitle: "We won the Neo Prize of $5000 in CalHacks : Hello World for our project 'Bottle' which is a social media powered by geofencing and augumented reality.",
      image: "https://cdn.discordapp.com/attachments/814552534416621591/848852222749966336/achievement3.png",
     
    },
  ]
};

const moreachievementSection = {

  title: "More Achievements",
  subtitle: "Some of my recent achievements!",

  achivementsCards: [
    {
      title: "Winner - Bitcamp",
      subtitle: "We qualified for Pinnacle - the olympics of hackathons as a result of winning BitCamp which is the flagship hackathon of University of Maryland.",
      image:
        "https://raw.githubusercontent.com/Adithya-adi-Menon/LOGO/achievements/bitcamp.gif",
  
    },
    {
      title: "Winner - Facebook F8 Hackathon",
      subtitle: "F8 Refresh is one among the flagship hackathons conducted by Facebook for both working professionals and students across the world.",
      image: "https://raw.githubusercontent.com/hackyguru/HostedImages/master/ach24.png",

    },
    {
      title: "Winner - CalHacks",
      subtitle: "We won the Neo Prize of $5000 in CalHacks : Hello World for our project 'Bottle' which is a social media powered by geofencing and augumented reality.",
      image: "https://raw.githubusercontent.com/Adithya-adi-Menon/LOGO/achievements/calhacks.png",
     
    },
    {
      title: "Winner - HueHacks",
      subtitle: "Hue Hacks is a 24 hour hackathon hosted by Major League Hacking. We won the best overall prize for our project 'Hue Pal' which enables the color blind to surf the web.",
      image: "https://raw.githubusercontent.com/Adithya-adi-Menon/LOGO/achievements/mlhhue.png",

    },
    {
      title: "Winner - HackPrinceton",
      subtitle: "HackPrinceton is the flagship hackathon of Princeton University. We won two prizes which include 'Best Social Impact' and 'Overall 2nd place'.",
      image: "https://raw.githubusercontent.com/Adithya-adi-Menon/LOGO/achievements/princeton.png",

    },
    
    {
      title: "Winner - Calvin Hacks",
      subtitle: "Calvin Hacks is the flagship hackathon of Calvin University. We made a tinder for vacations called 'Vacay Pal'",
      image: "https://raw.githubusercontent.com/Adithya-adi-Menon/LOGO/achievements/calvinhacks.png",

    },
    
    {
      title: "Winner - Steel Hacks",
      subtitle: "Steel Hacks was organized by University of Pittsuburgh. We won the NSIN Challenge (iPad Airs) which focused on making a tool for US Fleet Cyber Command (US Navy).",
      image: "https://raw.githubusercontent.com/Adithya-adi-Menon/LOGO/achievements/steelhacks.png",

    },

    {
      title: "Winner - Rice Hack",
      subtitle: "Rice SASE Hack is a hackathon organized by Society of Asian Scientists and Engineers and Rice University. We made a mobile app to empower local communities.",
      image: "https://raw.githubusercontent.com/Adithya-adi-Menon/LOGO/achievements/ricehacks.png",

    },

    {
      title: "Winner - CivHacks",
      subtitle: "CivHacks was organized by ASUC - UC Berkeley, California. We made a project that empowers Inter Planetry File System for secure and immutable storage.",
      image: "https://raw.githubusercontent.com/Adithya-adi-Menon/LOGO/achievements/civhacks.png",

    },

    {
      title: "Winner - RU Hacks",
      subtitle: "RU Hacks is the hackathon organized by Ryerson University, Toronto. We used DJI Tello to make a autonomous painter drone using computer vision.",
      image: "https://raw.githubusercontent.com/Adithya-adi-Menon/LOGO/achievements/ruhacks.png",

    },

    {
      title: "Contributor - IPFS",
      subtitle: "Inter Planetry File System is a ground breaking innovation in blockchain and networking. I am a contributor to IPFS's community.",
      image: "https://raw.githubusercontent.com/Adithya-adi-Menon/LOGO/achievements/ipfs.png",

    },

    {
      title: "Contributor - HackClub",
      subtitle: "I am an active Hack Clubber who has contributed to Hack Club's open source projects and workshops.",
      image: "https://raw.githubusercontent.com/Adithya-adi-Menon/LOGO/achievements/hackclub.png",

    },
    
    {
      title: "Honourable Mention - NIT W",
      subtitle: "Open Innovation Contest is a hackathon organized by NIT Warangal. Our project received a honorable mention at the hackathon.",
      image: "https://raw.githubusercontent.com/Adithya-adi-Menon/LOGO/achievements/openinnovation.png",

    },
    {
      title: "Winner - Rigathon",
      subtitle: "Won first prize in Rigathon - an agriculture themed hackathon hosted by Kumaraguru College of Technology, Coimbatore.",
      image: "https://raw.githubusercontent.com/hackyguru/HostedImages/master/ach1.png",

    },
    {
      title: "Winner - HackNight",
      subtitle: "Sahyadri College of Engineering and Management conducted Hack Night as a part of Hacktoberfest 2020 - promoting Open source.",
      image: "https://raw.githubusercontent.com/hackyguru/HostedImages/master/ach16.png",

    },
    {
      title: "Winner - Jini Hack",
      subtitle: "Bookingjini conducted Jini Hack 2020. The challenge of the hackathon was to innovate new ideas for contactless hotel management system.",
      image: "https://raw.githubusercontent.com/hackyguru/HostedImages/master/ach12.png",
    },
    {
      title: "Winner - Let's Upgrade",
      subtitle: "Let's Upgrade community conducted a 36 hour hackathon. We made a project under the track 'education'.",
      image: "https://raw.githubusercontent.com/hackyguru/HostedImages/master/ach21.png",
    },
    {
      title: "Winner - Make Harvard",
      subtitle: "Harvard University, USA conducted Make Harvard - a hardware hackathon. We made a smart mask to win the first prize in the finals.",
      image: "https://raw.githubusercontent.com/hackyguru/HostedImages/master/ach20.png",
    },
    {
      title: "Track Prize - Hack Camp",
      subtitle: "Hack Camp was organized by MLH and Hack Club at Kochi, Kerala. We won a track prize for Agora.io.",
      image: "https://raw.githubusercontent.com/hackyguru/HostedImages/master/ach14.png",
    },
    {
      title: "Scholarship Recepient - EC Council",
      subtitle: "I was awarded with CEH Practical scholarship by EC Council. I also completed my CEH certification.",
      image: "https://raw.githubusercontent.com/hackyguru/HostedImages/master/ach15.png",
    },
    {
      title: "Runner - Student Entrepreneur Award",
      subtitle: "Entrepreneur's Organization - Coimbatore Chapter awarded me the runner up at GSEA Coimbatore for pitching my startup - Cybrin.com.",
      image: "https://raw.githubusercontent.com/hackyguru/HostedImages/master/ach19.png",
    },
    {
      title: "Grant - Summer of Making",
      subtitle: "Hack Club's Summer of Making provided hardware grants to enable hack clubbers to make amazing projects.",
      image: "https://raw.githubusercontent.com/hackyguru/HostedImages/master/ach22.png",
    },
    {
      title: "Grant - Workshop Bounty",
      subtitle: "Hack Club provided monetary grants to authors who sucessfully publish a workshop. 2 of my workshops were published.",
      image: "https://raw.githubusercontent.com/hackyguru/HostedImages/master/ach23.png",
    },
  ]
};

const video = {
  video1:[
    {
    title: "Hue Pal",
    link: "https://www.youtube.com/embed/xNENKym4EzA",
    }
  ],
  video2:[
    {
    title: "Air Doodle",
    link: "https://www.youtube.com/embed/WZF7jry8WHs",
    }
  ],
 
  
  
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  devpost,
  achievementSection,
  moreachievementSection,
  video
};
