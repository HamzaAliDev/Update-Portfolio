import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github, Calendar, User, Code, CheckCircle } from "lucide-react"
import { notFound } from "next/navigation"
import { AuroraText } from "@/components/magicui/aurora-text"
import { projectDetails } from "@/contants/project"

type ProjectDetailPageProps = {
  params: {
    id: string
  }
}

export default function ProjectDetailPage({ params }:  ProjectDetailPageProps) {
    const project = projectDetails.find((p) => p.id === params.id)

    if (!project) {
        notFound()
    }

    return (
        <section className="w-full md:w-10/12 mx-auto pt-20 lg:pt-24">
            <div className="mb-8 flex items-center">
                <button className="mr-4 rounded-full p-2">
                    <Link href="/projects">
                        <ArrowLeft className="h-5 w-5" />
                        <span className="sr-only">Back to projects</span>
                    </Link>
                </button>
                <h1 className="text-3xl font-bold md:text-4xl"><AuroraText>{project.title}</AuroraText></h1>
            </div>

            <div className="mb-12 grid gap-12 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <div className="relative mb-8 pb-10 overflow-hidden flex items-center justify-center">
                        <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={600}
                            height={400}
                            className=" object-cover"
                        />
                    </div>

                    <div className="mb-8">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className=" text-2xl font-bold">Project Overview</h2>
                            <div className=" gap-4 hidden md:flex">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2  text-gray-700  hover:text-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:text-white"
                                >
                                    Live URL
                                    <ExternalLink className="h-4 w-4" />
                                </a>

                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:text-white"
                                >
                                    Github
                                    <Github className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                        <p className="mb-6 text-gray-600 dark:text-gray-400">{project.longDescription}</p>

                        <div className="flex gap-4 md:hidden">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2  text-gray-700  hover:text-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:text-white"
                            >
                                Live URL
                                <ExternalLink className="h-4 w-4" />
                            </a>

                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:text-white"
                            >
                                Github
                                <Github className="h-4 w-4" />
                            </a>
                        </div>

                    </div>

                    <div className="mt-6">
                        <h3 className="mb-3 text-lg font-semibold">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 rounded-sm bg-gray-100 px-3 py-2 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                                >
                                    <Image
                                        src={tag.icon}
                                        alt={tag.name}
                                        width={18}
                                        height={18}
                                        className="h-5 w-5"
                                    />
                                    <p className="text-sm">{tag.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>



                    <div className="my-8">
                        <h2 className="mb-4 text-2xl font-bold">Key Features</h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                            {project.keyFeatures?.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="mr-2 h-5 w-5 text-purple-600 dark:text-purple-400" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                    </div>


                </div>

                <div>
                    <div className="w-72 sticky top-24 rounded-xl bg-white p-6 shadow-md dark:bg-gray-800/50 dark:backdrop-blur-sm">
                        <h2 className="mb-4 text-xl font-bold">Project Details</h2>

                        <div className="mb-4 space-y-4">
                            <div className="flex items-start">
                                <Calendar className="mr-3 h-5 w-5 text-purple-600 dark:text-purple-400" />
                                <div>
                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Date</div>
                                    <div className="text-gray-900 dark:text-white">{project.date}</div>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <User className="mr-3 h-5 w-5 text-purple-600 dark:text-purple-400" />
                                <div>
                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Client</div>
                                    <div className="text-gray-900 dark:text-white">{project.client}</div>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Code className="mr-3 h-5 w-5 text-purple-600 dark:text-purple-400" />
                                <div>
                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Role</div>
                                    <div className="text-gray-900 dark:text-white">{project.role}</div>
                                </div>
                            </div>

                        </div>

                        <div className="mt-8">
                            <button
                                className="w-full py-1 text-gray-700 dark:text-gray-300 rounded-md border cursor-pointer  hover:from-purple-700 hover:to-fuchsia-700"
                            >
                                <Link href="/contact">Interested in a similar project?</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mb-15">
                <h2 className="mb-8 text-2xl font-bold">Project Gallery</h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {project.gallery.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-lg">
                            <Image
                                src={image || "/placeholder.svg"}
                                alt={`${project.title} screenshot ${index + 1}`}
                                width={320}
                                height={350}
                                className=" object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>


        </section>
    )
}
