import Image from 'next/image'
import html from '../../public/tools/html.png';
import css from '../../public/tools/css.png';
import c from '../../public/tools/c.png';
import javascript from '../../public/tools/js.png';
import react from '../../public/tools/react.png';
import bootstrap from '../../public/tools/bootstrap.webp';
import cloudinary from '../../public/tools/cloudinary.png';
import tailwind from '../../public/tools/tailwind.png';
import nextjs from '../../public/tools/nextjs.webp';
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
import { Marquee } from './magicui/marquee';


export default function Tool() {
    const toolList = [
        { name: 'HTML', image: html, alt: 'HTML Logo', width: 30, height: 30 },
        { name: 'CSS', image: css, alt: 'CSS Logo', width: 30, height: 27 },
        { name: 'C++', image: c, alt: 'C Logo', width: 30, height: 30 },
        { name: 'JavaScript', image: javascript, alt: 'JavaScript Logo', width: 30, height: 33 },
        { name: 'React', image: react, alt: 'React Logo', width: 30, height: 30 },
        { name: 'Bootstrap', image: bootstrap, alt: 'Bootstrap Logo', width: 30, height: 35 },
        { name: 'Cloudinary', image: cloudinary, alt: 'Cloudinary Logo', width: 30, height: 30 },
        { name: 'Tailwind CSS', image: tailwind, alt: 'Tailwind CSS Logo', width: 20, height: 22 },
        { name: 'Next.js', image: nextjs, alt: 'Next.js Logo', width: 30, height: 30 },
        { name: 'Sass', image: sass, alt: 'Sass Logo', width: 30, height: 30 },
        { name: 'Firebase', image: firebase, alt: 'Firebase Logo', width: 30, height: 30 },
        { name: 'MongoDB', image: mongodb, alt: 'MongoDB Logo', width: 30, height: 30 },
        { name: 'MySQL', image: mysql, alt: 'MySQL Logo', width: 30, height: 30 },
        { name: 'Node.js', image: nodejs, alt: 'Node.js Logo', width: 30, height: 30 },
        { name: 'Oracle DB', image: oracle, alt: 'Oracle DB Logo', width: 30, height: 30 },
        { name: "Python", image: python, alt: "Python logo", width: 30, height: 30 },
        { name: "Vite", image: vite, alt: "Vite logo", width: 30, height: 30 },
        { name: "TypeScript", image: ts, alt: "TypeScript logo", width: 30, height: 27 },
        { name: "Zustand", image: zustand, alt: "Zustand logo", width: 30, height: 30 },
        { name: "Clerk", image: clerk, alt: "Clerk logo", width: 40, height: 40 },
        { name: "WebSockets", image: websockets, alt: "WebSockets logo", width: 30, height: 30 },
        { name: "Ant Design", image: antd, alt: "antd logo", width: 30, height: 30 },
    ]

    const firstRow = toolList.slice(0, toolList.length / 2);
    const secondRow = toolList.slice(toolList.length / 2);
    return (
        <section className="w-full px-2 relative mt-8 md:mt-0 lg:mt-0 overflow-x-hidden">
            <div className=" flex  flex-col items-center justify-center overflow-hidden w-full overflow-x-hidden">
                <Marquee pauseOnHover className="[--duration:30s]">
                    {firstRow.map((tool, index) => (
                        <div
                            key={index}
                            className="py-1 px-3 sm:py-2 sm:px-5 bg-gray-100 rounded-md flex items-center justify-center hover:bg-gray-200 shadow-md dark:bg-gray-800/50 dark:backdrop-blur-sm transition-all duration-300 ease-in-out my-2"
                        >
                            <Image
                                src={tool.image}
                                alt={tool.alt}
                                height={tool.height}
                                className="h-5 w-auto sm:h-[tool.height] object-contain"
                            />
                            <p className="text-sm sm:text-lg ms-1 sm:ms-2">{tool.name}</p>
                        </div>

                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:30s]">
                    {secondRow.map((tool, index) => (
                        <div
                            key={index}
                            className="py-1 px-3 sm:py-2 sm:px-5 bg-gray-100 rounded-md flex items-center justify-center hover:bg-gray-200 shadow-md dark:bg-gray-800/50 dark:backdrop-blur-sm transition-all duration-300 ease-in-out my-2"
                        >
                            <Image
                                src={tool.image}
                                alt={tool.alt}
                                height={tool.height}
                                className="h-5 w-auto sm:h-[tool.height] object-contain"
                            />
                            <p className="text-sm sm:text-lg ms-1 sm:ms-2">{tool.name}</p>
                        </div>

                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
        </section>
    )
}
