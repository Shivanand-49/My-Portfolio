import { IconBrandGithub, IconBrandGmail, IconBrandLeetcode, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
const Info = {
    name: "Shivanand Yadav",
    stack: ["Software Developer"],
    bio: "I'm a passionate software developer focused on crafting efficient, scalable solutions and delivering top-notch web applications that exceed expectations. Let's connect and create something amazing together!"
}



const ProjectInfo = [
    {
        title: "Study Notion",
        desc: "StudyNotion is an innovative online learning platform built on the MERN stack, designed to deliver an engaging, user-friendly educational experience. With robust features like secure user authentication, diverse user roles, and detailed course management, StudyNotion enables instructors to effectively manage content while providing students with a personalized learning journey. The platform includes real-time interactions, an admin panel for advanced oversight, and comprehensive scalability measures, ensuring smooth performance as the user base grows. Deployed on Vercel and Render, StudyNotion employs CI/CD pipelines and stringent security practices, continuously evolving based on user needs and technological advancements.",
        image: "studynotion.png",
        live: true,
        technologies: ["Express.js","Mongodb","Reactjs", "Tailwind", "Redux"],
        link: "https://studynotion-by-shiva-mocha.vercel.app/",
        github: "https://github.com/Shivanand-49/StudyNotion-Hosting"
    },
       {
        title: "EmailAi Writer",
        desc:"Built Java Spring Boot app with RESTful APIs for email automation, Integrated Gemini API to generate AI-powered email replies.Developed Chrome Extension for real-time email assistance.Improved productivity with automated, context-aware email drafting.Ensured scalable and secure communication workflow",
        image: "EmailAi-Writer.png",
        live: true,
        technologies: ["Spring Boot","Reactjs"],
        link: "https://email-ai-writer-shiva.vercel.app/",
        github: "https://github.com/Shivanand-49/EmailAI-Writer"
    },
    {
        title: "Random GIF Generator",
        desc: "Random GIF Generator with React is a fun, dynamic web application designed to bring users joy by instantly displaying random GIFs fetched from the Giphy API. Built with React and organized into modular components, the app offers an intuitive, user-friendly interface where users can effortlessly generate new GIFs with a click. React Hooks, such as useState and useEffect, manage state seamlessly, providing a smooth experience as content updates in real-time. With Axios handling API requests, users have access to a diverse, constantly refreshed GIF collection. Responsive design ensures compatibility across devices, making this application engaging and accessible anytime, anywhere.",
        image: "randomgif.png",
        live: true,
        technologies: ["React","Tailwind","Javascript"],
        link: "https://shivanand-49.github.io/Random-Gif-Starter/",
        github: "https://github.com/Shivanand-49/Random-Gif-Starter"
    },
    {
        title: "Weather App",
        desc: "Weather App is a simple, interactive web application designed to provide users with current weather updates for any location. With an easy-to-use input feature, users can enter a city name to check real-time weather details such as temperature in Celsius, humidity, wind speed, and an icon displaying the weather condition. Built with HTML, CSS, and JavaScript, this app uses a free weather API to fetch accurate weather data, and displays it dynamically using JavaScript. The application also includes error handling for invalid entries, ensuring a smooth user experience across devices with a clean, responsive design.",
        image: "weather.png",
        live: true,
        technologies: ["HTML", "CSS", "Javascript",],
        link: "https://shivanand-49.github.io/Weather-App-Project/",
        github: "https://github.com/Shivanand-49/Weather-App-Project"
    },
    {
        title: "To-do List Backend",
        desc: "To-Do List Application with Node, Express, and MongoDB is a streamlined, full-stack web app that allows users to manage tasks efficiently. Built with Node.js and Express for the backend, the app connects to MongoDB to store, update, and retrieve tasks. Users can add new tasks, mark them as complete, and delete them as needed, with all changes reflected instantly on the front end. The use of MongoDB ensures data persistence, while Express provides fast and secure routing for user interactions. This to-do list app is designed to be scalable, intuitive, and an effective productivity tool.",
        image: "Travel.png",
        live: false,
        technologies: ["Javascript", "Express.js", "MongoDb", "Express",],
        link: "https://github.com/Shivanand-49/Todo-App-Backend",
        github: "https://github.com/Shivanand-49/Todo-App-Backend"
    },
    {
        title: "Tic Toc Toe Game",
        desc: "A 3x3 Tic-Tac-Toe game built with ReactJS, JavaScript, and styled using Tailwind CSS offers a smooth and interactive experience. The board displays nine clickable squares that alternate between X and O as players take turns. Each click triggers a function to handle turns, check for wins, and detect draws. Once a player wins, a message displays the winner and the board resets with a new game button. Tailwind CSS adds a clean, modern design, with rounded squares, hover effects, and responsive scaling. This simple game demonstrates the power of React’s component-based structure and Tailwind's styling flexibility.",
        image: "tic-toc-toe.png",
        live: true,
        technologies: ["React","Tailwind"],
        link: "https://tic-toc-toe-by-shivanand.vercel.app/",
        github: "https://github.com/Shivanand-49/Tic-Toc-Toe-React.js"
    },
    
    // {
    //     title: "CodeX Code Editor",
    //     desc: "CodeX is a modern, fully responsive code editor built using React, TailwindCSS, and Ace Editor, offering a seamless coding experience across all devices. It features syntax highlighting for popular programming languages, including HTML, CSS, JavaScript, Python, and Java. Users can create, edit, and save code files, with the option to download them as text files. CodeX combines robust functionality with a sleek, intuitive design, making coding effortless and enjoyable.",
    //     image: "CodeX.png",
    //     live: false,
    //     technologies: ["React", "Tailwind", "Ace Editor"],
    //     link: "https://github.com/Code-Mars/CodeX",
    //     github: "https://github.com/Code-Mars/CodeX"
    // }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Redux", "Tailwind CSS", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Spring Boot", "Node JS", "Express JS", "PostgresSQL", "MongoDB" ]
    },
    {
        title: "Languages",
        skills: ["Java", "C", "C++", "JavaScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass","Intellij Idea","Docker"]
    }
]
const socialLinks = [
    { link: "https://github.com/Shivanand-49", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/shivanand49/", icon: IconBrandLinkedin }, 
    { link: "https://leetcode.com/u/Shivanand-49/", icon: IconBrandLeetcode },
    { link: "https://x.com/Shiva_4949", icon: IconBrandX },
    { link: "https://mail.google.com/mail/?view=cm&fs=1&to=shivanand.yadav.tech@gmail.com", icon: IconBrandGmail },
];


const ExperienceInfo = [
    {
        role: "",
        company: "",
        date: "",
        desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
        skills: ["Springboot", "React JS", "Angular", "Node JS", "MySQL", "MongoDB", "Microservices"]
    },
    {
        role: "",
        company: "",
        date: "",
        desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
        skills: ["Java", "MySQL", "Hibernate", "Selenium", "Jenkins", "JIRA", "Automation Testing"]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };