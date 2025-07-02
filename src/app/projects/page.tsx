import Link from 'next/link'
import { AuroraText } from '@/components/magicui/aurora-text'
import { ArrowLeft } from 'lucide-react'
import ProjectCard from '@/components/ProjectCard'

export default function Page() {
    return (
        <section className="w-full md:w-10/12 mx-auto pt-20 lg:pt-24">
            <div className="mb-8 flex items-center mt-4 sm:mt-2 md:mt-0">
                <button className="mr-4 rounded-full p-2">
                    <Link href="/">
                        <ArrowLeft className="h-5 w-5" />
                        <span className="sr-only">Back to home</span>
                    </Link>
                </button>
                <h1 className="text-3xl font-bold md:text-4xl"><AuroraText>Projects</AuroraText></h1>
            </div>

            <div className="mb-12 ">
                <p className="max-w-3xl text-lg text-gray-600 dark:text-gray-400">
                    Explore my latest work and projects. Each project represents a unique challenge and solution, showcasing my
                    skills and expertise in different areas of software development.
                </p>
            </div>

            <div className='mb-24'>
                <ProjectCard length={8} />
            </div>
        </section>
    )
}
