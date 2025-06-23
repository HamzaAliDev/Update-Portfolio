import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import SocialButton from "@/components/SocialButton/SocialButton"
import { AuroraText } from "@/components/magicui/aurora-text"
import ContactForm from "@/components/ContactForm"

export default function Page() {
    return (
        <section className="w-full md:w-10/12 mx-auto pt-20 lg:pt-24">
            <div className="mb-8 flex items-center">
                <button className="mr-4 rounded-full p-2">
                    <Link href="/">
                        <ArrowLeft className="h-5 w-5" />
                        <span className="sr-only">Back to home</span>
                    </Link>
                </button>
                <h1 className="text-3xl font-bold md:text-4xl"><AuroraText>Contact Me</AuroraText></h1>
            </div>

            <div className="mb-16 grid gap-12 lg:grid-cols-2">
                <div>
                    <div className="mb-8">
                        <h2 className="mb-4 text-2xl font-bold">Get In Touch</h2>
                        <p className="px-2 text-gray-600 dark:text-gray-400">
                            Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new
                            projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                    </div>

                    <div className="mb-8 space-y-6">
                        <div className="flex items-start">
                            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400">
                                <Mail className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="mb-1 text-lg font-semibold">Email</h3>
                                <Link href="mailto:hamzamashooq492@gmail.com" target="_blank" className="text-gray-600 dark:text-gray-400">alihamzamashooq@gmail.com</Link>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-900/50 dark:text-fuchsia-400">
                                <Phone className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="mb-1 text-lg font-semibold">Phone</h3>
                                <Link href="tel:+923037740991" target="_blank" className="text-gray-600 dark:text-gray-400">+923037740991</Link>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 dark:bg-cyan-900/50 dark:text-cyan-400">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="mb-1 text-lg font-semibold">Location</h3>
                                <Link href="https://www.google.com/maps?q=Faisalabad+Pakistan" target="_blank" className="text-gray-600 dark:text-gray-400">Faisalabad, Pakistan</Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Connect With Me</h3>
                        <div className="mt-6 flex gap-4">
                            <SocialButton type="github" />
                            <SocialButton type="linkedin" />
                            <SocialButton type="instagram" />
                            <SocialButton type="whatsapp" />
                        </div>
                    </div>
                </div>

                <div>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}
