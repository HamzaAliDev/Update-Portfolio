import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import { AuroraText } from "@/components/magicui/aurora-text"
import LayeredText from "@/components/LayeredText"
import Tool from "@/components/Tool"
import ContactSection from "@/components/ContactSection"
import Timeline from "@/components/Timeline"
import { NumberTicker } from "@/components/magicui/number-ticker"
import profilePic from "../../../public/profile-update.png"

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
        <h1 className="text-3xl font-bold md:text-4xl"><AuroraText>About Me</AuroraText></h1>
      </div>

      <div className="mb-16 grid gap-12 grid-cols-1 md:grid-cols-3 lg:gap-16">
        <div className=" relative w-full max-w-md mx-auto">
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-500 rounded-3xl rotate-6 opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-500 rounded-3xl -rotate-6 opacity-10"></div>
              <div className="relative bg-white rounded-3xl border border-gray-200 p-8 shadow-xl dark:bg-black/60 dark:border-black/60">
                <Image
                  src={profilePic}
                  alt="Profile"
                  width={300}
                  height={300}
                  placeholder="blur"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
          <Link href='/resume.pdf' target="_blank" className="mt-6 border py-2 w-full rounded-md cursor-pointer flex items-center justify-center gap-2">
            <FileText />
            <span className="font-medium">Download Resume</span>
          </Link>

          <div className="flex items-center justify-center gap-2 px-4 py-2 mb-4">
            <div className="relative flex items-center justify-center">
              <div className="w-7 h-7 bg-green-500 rounded-full animate-ping absolute opacity-75"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full relative"></div>
            </div>
            <span className="text-green-700 text-lg font-medium ms-2">Open for Hire</span>
          </div>
        </div>

        <div className="col-span-2">

          <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
            I&apos;m a passionate software developer and a Bachelor&apos;s student in Computer Science with a strong focus
            on full stack development. I specialize in the MERN stack, working extensively with<span className="text-purple-700 font-medium"> React.js, React Native,
              Next.js </span> and <span className="text-purple-700 font-medium">TypeScript </span>to build responsive web and mobile applications. I enjoy turning ideas into functional,
            user-friendly products and constantly seek to improve my skills through hands-on learning and new challenges.
          </p>
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
            As a lifelong learner, I&apos;m constantly exploring new technologies, best practices, and development patterns
            to sharpen my skills. I embrace challenges that push me beyond my comfort zone and fuel both my technical and personal growth.
          </p>
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
            Beyond coding, I&apos;m a curious learner who values personal growth and creative problem-solving. In my free time,
            I enjoy playing <span className="text-purple-700 font-medium"> video games</span> and <span className="text-purple-700 font-medium">badminton</span>, which help me recharge and stay inspired. I'm always open to exciting
            opportunities where I can collaborate, contribute, and make a real impact.
          </p>

          <div className="mb-0 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div>
              <div className="text-3xl font-medium text-purple-700 dark:text-purple-700"><NumberTicker value={20} className="text-4xl font-medium text-purple-700 dark:text-purple-700" />+</div>
              <div className="text-md font-medium text-gray-600 dark:text-gray-400">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-medium text-purple-700 dark:text-purple-700"><NumberTicker value={5} className="text-4xl font-medium text-purple-700 dark:text-purple-700" />+</div>
              <div className="text-md font-medium text-gray-600 dark:text-gray-400">Team Works</div>
            </div>
          </div>
        </div>
      </div>

      {/* skill section */}
      <section className="w-full relative mt-8 md:mt-0 lg:mt-0 ">
        <LayeredText heading="Tech Stack" subheading="Skills & Tools" />

        <Tool />
      </section>


      {/* education section */}
      <section className="w-full relative mt-8 md:mt-14 lg:mt-14  ">
        <LayeredText heading="Work & Education" subheading="Professional Journey" />

        <Timeline />
      </section>

      {/* contact section */}
      <section className="w-full relative my-18  ">
        <LayeredText heading="Contact Me" subheading="Let&apos;s Connect" />
        <ContactSection />
      </section>

    </section>
  )
}
