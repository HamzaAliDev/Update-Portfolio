import { Code } from "lucide-react"

type TimelineItem = {
    id: number;
    period: string;
    title: string;
    company: string;
    description: string;
}
const timelineData: TimelineItem[] = [
    {
        id: 1,
        period: "2024 - Present",
        title: "Freelance Full Stack Developer",
        company: "",
        description:
            "Collaborated with clients to develop dynamic, responsive web applications using React.js, Next.js, Firebase, and Node.js, ensuring clean, maintainable code and enhancing user experience through UI/UX optimizations.",
    },
    {
        id: 2,
        period: "2023 - 2024",
        title: "MERN Stack Developer",
        company: "SMIT Faisalabad",
        description:
            "Successfully completed the Web and Mobile App Development course at SMIT Faisalabad, gaining in-depth knowledge and practical experience in developing high-quality web and mobile applications under the mentorship of skilled instructors.",
    },
    {
        id: 3,
        period: "2022 - Present",
        title: "Bacholer of Computer Science",
        company: "Government College University Faisalabad",
        description:
            "I am currently pursuing a Computer Science degree at GC University Faisalabad, where I have developed a strong foundation in computer science principles and practical applications.",
    },
]

export default function Timeline() {
    return (
        <div className="w-full mt-12">
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-purple-700 dark:bg-purple-700"></div>

                {/* Timeline items */}
                <div className="space-y-8">
                    {timelineData.map((item, index) => (
                        <div key={item.id} className="relative flex items-start">
                            {/* Timeline dot */}
                            <div className="absolute left-3 w-6 h-6 bg-purple-700 dark:bg-purple-700 rounded-full flex items-center justify-center z-10">
                                <Code className="w-3 h-3 text-white" />
                            </div>

                            {/* Card content */}
                            <div className="ml-12 max-w-3xl">
                                <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 bg-white dark:bg-gray-800/40 dark:backdrop-blur-sm border-gray-200 ">
                                    <div className="pb-3">
                                        <p className="text-sm font-medium text-purple-700 dark:text-purple-700 mb-2">{item.period}</p>
                                        <p className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</p>
                                        <div className="text-sm font-medium text-gray-600 dark:text-gray-300">{item.company}</div>
                                    </div>
                                    <div>
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
