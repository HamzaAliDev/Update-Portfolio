import { Send } from "lucide-react"
import Button from "./ContactBtn/Button"
import Link from "next/link"

export default function ContactSection() {
    return (
        <div className="bg-gray-50 dark:bg-gray-800/40 dark:backdrop-blur-sm shadow-md  rounded-xl p-6 px-8">
            <div className="flex items-center gap-4 mb-2">
                {/* Purple rocket icon */}
                <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-200 dark:border-purple-500/30">
                        <Send className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                </div>

                {/* Heading */}
                <div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">Let&apos;s work together</h2>
                </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-3 max-w-4xl">
                Ready to bring your ideas to life? I specialize in creating exceptional digital experiences and would love
                to collaborate on your next project. Let&apos;s connect and turn your vision into reality!
            </p>

            {/* Get in touch button */}
            <Link href='/contact'>
                <Button />
            </Link>

        </div>
    )
}
