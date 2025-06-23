import Link from "next/link"
import Image from "next/image"
import { projects } from "@/contants/project";

type cardComponentProps = {
    length?: number;
    showIcon?: boolean;
};

export default function PageCard({ length, showIcon }: cardComponentProps) {

    // Limit the number of projects displayed based on the length prop
    const projectsToShow = length ? projects.slice(0, length) : projects;
    const filteredProjects = length ? projectsToShow : projects;
    return (
        <div className="flex flex-wrap gap-8">
            {filteredProjects.map((project) => (
                <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="max-w-lg group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800/50 dark:backdrop-blur-sm dark:hover:bg-gray-800/80"
                >
                    <div>
                        <div className={`p-10 overflow-hidden flex items-center justify-center relative ${project.colorGradient}`}>
                            <Image
                                src={project.image || "/placeholder.svg"}
                                // placeholder="blur"
                                alt={project.title}
                                width={300}
                                height={100}
                                className="h-auto w-auto object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {project.featured && (
                                <div className="absolute left-0 top-4 rounded-r-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 px-3 py-1 text-xs font-medium text-white">
                                    Featured
                                </div>
                            )}
                        </div>
                        <div className="p-6">
                            <h3 className="mb-2 text-xl font-bold ">{project.title}</h3>
                            <p className="mb-4 text-gray-600 dark:text-gray-400">{project.description}</p>
                            <div className="mb-4 flex flex-wrap gap-2">
                                {showIcon && project.tags.map((tag, tagIndex) => (
                                    <div
                                        key={tagIndex}
                                        className="flex items-center gap-2 rounded-sm bg-gray-100 px-3 py-2 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                                    >
                                        <Image
                                            src={tag.icon}
                                            alt={tag.name}
                                            width={18}
                                            height={18}
                                            className="h-5 w-5"
                                        />
                                        {tag.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}