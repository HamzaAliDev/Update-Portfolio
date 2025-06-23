import { StaticImageData } from "next/image";
import html from '../../public/tools/html.png';
import css from '../../public/tools/css.png';
import c from '../../public/tools/c.png';
import javascript from '../../public/tools/js.png';
import react from '../../public/tools/react.png';
import bootstrap from '../../public/tools/bootstrap.webp';
import pollinations from '../../public/tools/pollinations.webp';
import cloudinary from '../../public/tools/cloudinary.png';
import tailwind from '../../public/tools/tailwind.png';
import nextjs from '../../public/tools/nextjs.webp';
import openweather from '../../public/tools/openweather.webp';
import sass from '../../public/tools/sass.png';
import firebase from '../../public/tools/firebase.png';
import mongodb from '../../public/tools/mongodb.png'
import mysql from '../../public/tools/mysql.png'
import nodejs from '../../public/tools/nodejs.png'
import oracle from '../../public/tools/oracle.png'
import python from '../../public/tools/python.png'
import vite from '../../public/tools/vite.png'
import ts from '../../public/tools/ts.png'
import zustand from '../../public/tools/zustand.png'
import clerk from '../../public/tools/clerk.png'
import websockets from '../../public/tools/websockets.png'
import antd from '../../public/tools/antd.png'
import gemini from "../../public/tools/gemini.svg"

import cozera1 from "../../public/projects/cozera1.svg";
import cozera2 from "../../public/projects/cozera2.svg";
import cozera3 from "../../public/projects/cozera3.svg";
import logoai1 from "../../public/projects/logoai1.svg";
import logoai2 from "../../public/projects/logoai2.svg";
import logoai3 from "../../public/projects/logoai3.svg";
import logoai4 from "../../public/projects/logoai4.svg";
import foodhub1 from "../../public/projects/foodhub1.svg";
import foodhub2 from "../../public/projects/foodhub2.svg";
import foodhub3 from "../../public/projects/foodhub3.svg";
import foodhub4 from "../../public/projects/foodhub4.svg";
import travel1 from "../../public/projects/travel1.svg";
import travel2 from "../../public/projects/travel2.svg";
import travel3 from "../../public/projects/travel3.svg";
import travel4 from "../../public/projects/travel4.svg";
import portfolio1 from "../../public/projects/portfolio1.svg";
import portfolio2 from "../../public/projects/portfolio2.svg";
import portfolio3 from "../../public/projects/portfolio3.svg";
import portfolio4 from "../../public/projects/portfolio4.svg";
import todo1 from "../../public/projects/todo1.svg";
import todo2 from "../../public/projects/todo2.svg";
import todo3 from "../../public/projects/todo3.svg";
import todo4 from "../../public/projects/todo4.svg";
import weather1 from "../../public/projects/weather1.svg";
import weather2 from "../../public/projects/weather2.svg";
import weather3 from "../../public/projects/weather3.svg";
import weather4 from "../../public/projects/weather4.svg";
import chat1 from "../../public/projects/chat1.svg";
import chat2 from "../../public/projects/chat2.svg";
import chat3 from "../../public/projects/chat3.svg";
import chat4 from "../../public/projects/chat4.svg";




type Tag = { icon: StaticImageData; name: string }

type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: Tag[];
    featured?: boolean;
    colorGradient?: string;
};

type ProjectDetail = {
    id: string;
    title: string;
    longDescription: string;
    image: string;
    gallery: string[];
    tags: Tag[];
    liveLink: string;
    githubLink: string;
    featured?: boolean;
    client?: string;
    date?: string;
    role?: string;
    keyFeatures?: string[];
    challenges?: string[];
    solutions?: string[];
}

export const projects: Project[] = [
    {
        id: "cozera-store",
        title: "Cozera Store",
        description:
            "A full-featured online shopping platform with cart, checkout, and dashboard. Built with modern technologies for optimal performance.",
        image: cozera1,
        tags: [
            { icon: react, name: "React" },
            { icon: nodejs, name: "Node.js" },
            { icon: mongodb, name: "MongoDB" },
            { icon: cloudinary, name: "Cloudinary" },
        ],
        featured: false,
        colorGradient: "cozera-project-gradient",
    },
    {
        id: "logo-ai",
        title: "Logo AI",
        description:
            "An AI-powered logo generator that creates unique logos based on user input. Utilizes advanced algorithms for design generation.",
        image: logoai1,
        tags: [
            { icon: nextjs, name: "Next.js" },
            { icon: gemini, name: "Gemini AI" },
            { icon: cloudinary, name: "Cloudinary" },
            { icon: clerk, name: "Clerk" },
        ],
        featured: false,
        colorGradient: "logo-ai-project-gradient",
    },
    {
        id: "chatty",
        title: "Chatty",
        description:
            "A real-time chat application with user authentication and private messaging. Built for seamless communication.",
        image: chat1,
        tags: [
            { icon: nextjs, name: "Next.Js" },
            { icon: nodejs, name: "Node.js" },
            { icon: mongodb, name: "MongoDB" },
            { icon: cloudinary, name: "Cloudinary" },
            { icon: websockets, name: "WebSockets" },
            { icon: zustand, name: "Zustand" },
        ],
        featured: false,
        colorGradient: "chatty-project-gradient",
    },
    {
        id: "foodHub",
        title: "FoodHub",
        description:
            "A restaurant management system with features like menu management, table bookings, and customer reviews. Designed for restaurant owners.",
        image: foodhub1,
        tags: [
            { icon: react, name: "React" },
            { icon: bootstrap, name: "Bootstrap" },
            { icon: firebase, name: "Firebase" },
        ],
        featured: false,
        colorGradient: "foodhub-project-gradient",
    },
    {
        id: "dot-travel",
        title: "Travel Dot",
        description:
            "A travel planning application that helps users discover destinations, plan trips, and share experiences. Features user-generated content.",
        image: travel1,
        tags: [
            { icon: react, name: "React" },
            { icon: firebase, name: "Firebase" },
            { icon: antd, name: "Ant Design" },
            { icon: sass, name: "Sass" },
        ],
        featured: false,
        colorGradient: "travel-project-gradient",
    },
    {
        id: "portfolio-website",
        title: "Portfolio",
        description:
            "A personal portfolio website showcasing projects, skills, and experiences. Built with modern web technologies for a professional online presence.",
        image: portfolio1,
        tags: [
            { icon: nextjs, name: "Next.Js" },
            { icon: ts, name: "TypeScript" },
            { icon: tailwind, name: "TailWind" },
        ],
        featured: false,
        colorGradient: "portfolio-project-gradient",
    },
    {
        id: "task-management",
        title: "Task Management App",
        description:
            "A collaborative task management application with complete CRUD. Helps teams stay organized and productive.",
        image: todo1,
        tags: [
            { icon: react, name: "React" },
            { icon: bootstrap, name: "Bootstrap" },
            { icon: sass, name: "Sass" },
        ],
        featured: false,
        colorGradient: "todo-project-gradient",
    },
    {
        id: "weather-app",
        title: "Weather Application",
        description:
            "A weather application that provides real-time weather data and forecasts for locations worldwide. Features a clean, intuitive interface.",
        image: weather1,
        tags: [
            { icon: html, name: "Html" },
            { icon: css, name: "CSS" },
            { icon: javascript, name: "Javascript" },
            { icon: openweather, name: "OpenWeather API" },
        ],
        featured: false,
        colorGradient: "weather-project-gradient",
    },
]


export const projectDetails: ProjectDetail[] = [
    {
        id: "cozera-store",
        title: "Cozera Store",
        longDescription:
            "Cozera is a full-stack, responsive web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It features a modern UI, dynamic client-side interactions, secure backend APIs, and real-time data integration. This project demonstrates my ability to build end-to-end applications with clean architecture, secure API routes, and optimized deployment.",
        image: cozera1,
        gallery: [
            cozera1,
            cozera2,
            cozera3,
        ],
        tags: [
            { icon: react, name: "React" },
            { icon: nodejs, name: "Node.js" },
            { icon: mongodb, name: "MongoDB" },
            { icon: cloudinary, name: "Cloudinary" },
            { icon: bootstrap, name: "Bootstrap" },
            { icon: zustand, name: "Zustand" },
        ],
        liveLink: "https://cozera.netlify.app/",
        githubLink: "https://github.com/HamzaAliDev/Cozera-store",
        featured: false,
        client: "Personal Project",
        date: "March 2025",
        role: "Sole Developer",
        keyFeatures: [
            "Full CRUD operations for resources such as products, users, or content.",
            "RESTful API communication between frontend and backend.",
            "Fully responsive layout for mobile, tablet, and desktop users.",
            "Clean and reusable code components with modular file structure.",
        ],
    },
    {
        id: "logo-ai",
        title: "Logo AI Generator",
        longDescription:
            "LogoAi is an innovative AI-powered logo generation platform built with Next.js, designed to help users create unique and professional logos effortlessly. Utilizing the Gemini API for prompt enhancement and Pollinations AI API for generating high-quality logo designs, LogoAi delivers creative branding solutions tailored to user needs.The app features a seamless user experience with server-side rendering for fast performance and smooth interactions. With MongoDB as the database and Cloudinary for efficient image storage and delivery, users can easily generate, save, and manage their logos in a secure environment.LogoAi empowers businesses and individuals to quickly craft visually appealing logos without design expertise, making branding accessible to everyone.",
        image: logoai1,
        gallery: [
            logoai2,
            logoai3,
            logoai4,
        ],
        tags: [
            { icon: nextjs, name: "Next.js" },
            { icon: ts, name: "TypeScript" },
            { icon: gemini, name: "Gemini AI" },
            { icon: pollinations, name: "Pollinations AI" },
            { icon: tailwind, name: "Tailwind CSS" },
            { icon: cloudinary, name: "Cloudinary" },
            { icon: clerk, name: "Clerk" },
        ],
        liveLink: "https://logo-generator-tau.vercel.app/",
        githubLink: "https://github.com/Triyyo/",
        featured: true,
        client: "Saas Project",
        date: "April 2025",
        role: "Frontend Developer",
        keyFeatures: [
            "AI-powered logo generation",
            "Prompt enhancement with Gemini API",
            "High-quality designs via Pollinations AI API",
            "Server-side rendering with Next.js for fast performance",
            "Secure storage and management using MongoDB and Cloudinary",
        ],
    },
    {
        id: "chatty",
        title: "Chatty",
        longDescription:
            "Chatty is a real-time chat application that allows users to communicate seamlessly through private messages and group chats. Built with Next.js, Node.js, and MongoDB, Chatty provides a modern and responsive user interface for both mobile and desktop users. The application features user authentication and profile management using Clerk, ensuring secure access to the platform. With WebSockets for real-time communication and Zustand for state management, Chatty delivers a smooth and interactive chat experience. Users can share files and media, making it a versatile tool for personal and professional communication.",
        image: chat1,
        gallery: [
            chat2,
            chat3,
            chat4,
        ],
        tags: [
            { icon: nextjs, name: "Next.Js" },
            { icon: tailwind, name: "Tailwind" },
            { icon: zustand, name: "Zustand" },
            { icon: clerk, name: "Clerk" },
            { icon: nodejs, name: "Node.js" },
            { icon: mongodb, name: "MongoDB" },
            { icon: cloudinary, name: "Cloudinary" },
            { icon: websockets, name: "WebSockets" },
        ],
        liveLink: "https://github.com/HamzaAliDev/chatty",
        githubLink: "https://github.com/HamzaAliDev/chatty",
        featured: true,
        client: "Personal Project",
        date: "Feb 2025",
        role: "Full Stack Developer",
        keyFeatures: [
            "Real-time chat functionality with WebSockets",
            "User authentication and profile management with Clerk",
            "Private messaging and group chats",
            "File sharing and media support",
            "Responsive design for mobile and desktop users",
            "Zustand for state management",
        ]
    },
    {
        id: "foodHub",
        title: "FoodHub Restaurant",
        longDescription:
            "FoodHub is a restaurant management system designed to streamline operations for restaurant owners. It features a comprehensive dashboard for managing menus, table bookings, customer reviews, and more. The application is built with React.js and Firebase, ensuring real-time updates and a smooth user experience. FoodHub aims to enhance the efficiency of restaurant management while providing a user-friendly interface for both staff and customers.",
        image: foodhub1,
        gallery: [
            foodhub2,
            foodhub3,
            foodhub4,
        ],
        tags: [
            { icon: react, name: "React.js" },
            { icon: bootstrap, name: "Bootstrap" },
            { icon: firebase, name: "Firebase" },
            { icon: sass, name: "Sass" },
        ],
        liveLink: " https://foodhub-hotel.web.app",
        githubLink: " https://github.com/HamzaAliDev/SMIT-MAD-REACT-Assignment03.git",
        client: "Personal Project",
        date: "August 2024",
        role: "Frontend Developer",
        keyFeatures: [
            "Menu management with real-time updates",
            "Table booking system for customers",
            "Customer review and feedback system",
            "Responsive design for mobile and desktop users",
            "User authentication and role management",
            "Order management and tracking",
        ]
    },
    {
        id: "dot-travel",
        title: "Dot Travel",
        longDescription:
            "Dot Travel is a comprehensive travel planning application that helps users discover destinations, plan trips, and share experiences. It features user-generated content, location-based services, and real-time weather updates. The application is built with React.js and Firebase, ensuring a smooth user experience and real-time data synchronization. Dot Travel aims to enhance the travel planning process by providing users with the tools they need to explore new places and share their adventures.",
        image: travel1,
        gallery: [
            travel2,
            travel3,
            travel4,
        ],
        tags: [
            { icon: react, name: "React" },
            { icon: bootstrap, name: "Bootstrap" },
            { icon: sass, name: "Sass" },
            { icon: antd, name: "Ant Design" },
            { icon: firebase, name: "Firebase" },
        ],
        liveLink: "https://dot-tourist-app.web.app/",
        githubLink: "https://github.com/HamzaAliDev/Travel-Dot.git",
        client: "Personal Project",
        date: "Octuber 2024",
        role: "Full Stack Developer",
        keyFeatures: [
            "Destination discovery with user-generated content",
            "Trip planning tools with itinerary management",
            "Location-based services for nearby attractions",
            "Dashboard for managing user profiles and trips",
            "Blog section for sharing travel experiences",
            "Authentication and user management",
        ]
    },
    {
        id: "portfolio-website",
        title: "Portfolio",
        longDescription:
            "This portfolio website showcases my skills, projects, and experiences as a developer. It features a modern design with responsive layout, and interactive elements. The site is built with Next.js and TypeScript, ensuring optimal performance. It includes sections for my work, skills, testimonials, and a contact form. The portfolio is designed to provide a comprehensive overview of my professional journey and capabilities.",
        image: portfolio1,
        gallery: [
            portfolio2,
            portfolio3,
            portfolio4,
        ],
        tags: [
            { icon: nextjs, name: "Next.js" },
            { icon: ts, name: "TypeScript" },
            { icon: tailwind, name: "Tailwind" },
            { icon: firebase, name: "Firebase" },
        ],
        liveLink: "https://hamzamashooq.vercel.app/",
        githubLink: "https://github.com/HamzaAliDev/Portfolio-Nextjs",
        client: "Personal Project",
        date: "December 2024",
        role: "Full Stack Developer",
        keyFeatures: [
            "Responsive design with mobile-first approach",
            "Interactive project showcase my work",
            "Contact form with notifications",
            "About section with personal background",
            "Skills section with icons and title",
        ]
    },
    {
        id: "task-management",
        title: "Task Management App",
        longDescription:
            "This task management application is designed to help users organize their tasks, set deadlines, and collaborate with team members. It features a user-friendly interface with drag-and-drop functionality, real-time updates, and a dashboard for tracking progress. The application is built with React.js and local Storage, ensuring a smooth user experience and real-time data synchronization. The Task Management App aims to enhance productivity by providing users with the tools they need to manage their tasks effectively.",
        image: todo1,
        gallery: [
            todo2,
            todo3,
            todo4,
        ],
        tags: [
            { icon: react, name: "React" },
            { icon: bootstrap, name: "Bootstrap" },
            { icon: antd, name: "Ant Design" },
            { icon: sass, name: "Sass" },
        ],
        liveLink: "https://hamza-tasklist-app.netlify.app/create-todo",
        githubLink: " https://github.com/HamzaAliDev/SMIT-MAD-React-Assignment02.git",
        client: "Task Management Inc.",
        date: "March 2024",
        role: "Sole Developer",
        keyFeatures: [
            "Task creation, editing, and deletion",
            "Drag-and-drop task organization",
            "Real-time updates with local storage",
            "User authentication and role management",
            "Collaboration features for team members",
        ]
    },
    {
        id: "weather-app",
        title: "Weather Application",
        longDescription:
            "This weather application provides real-time weather data and forecasts for locations worldwide. It features a clean, intuitive interface with search functionality, current conditions, and extended forecasts. The application is built with HTML, CSS, and JavaScript, utilizing the OpenWeather API for accurate weather data. The Weather Application aims to deliver a user-friendly experience while providing essential weather information.",
        image: weather1,
        gallery: [
            weather2,
            weather3,
            weather4,
        ],
        tags: [
            { icon: html, name: "HTML" },
            { icon: css, name: "CSS" },
            { icon: javascript, name: "Javascript" },
            { icon: openweather, name: "OpenWeather API" },

        ],
        liveLink: "https://hamza-weather.netlify.app/",
        githubLink: "https://github.com/HamzaAliDev/Weather-App",
        client: "Personal Project",
        date: "Feb 2024",
        role: "Sole Developer",
        keyFeatures: [
            "Real-time weather data for any location",
            "Extended forecasts with hourly and daily views",
            "Search functionality for easy location lookup",
            "Responsive design for mobile and desktop users",
            "User-friendly interface with intuitive navigation",
        ]
    },
]
