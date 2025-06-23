import LayeredText from "@/components/LayeredText";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import ContactSection from "@/components/ContactSection";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <>
      <section className="w-full min-h-screen flex items-center justify-center mt-16 lg:mt-4 ">
        <HeroSection />
      </section>

      {/* service section */}
      <section className="w-full md:w-10/12 mx-auto relative mt-8 md:mt-0 lg:mt-0 ">
        <LayeredText heading="Why Choose Me" subheading="Professional Highlights" />

        <ServiceCard />
      </section>

      {/* project section */}
      <section className="w-full md:w-10/12 mx-auto relative mt-18  ">
        <LayeredText heading="Featured Projects" subheading="Portfolio Highlights" />

        <ProjectCard length={2} showIcon={true} />


        <div className="flex mt-10">
          <Link href='/projects' className=" border-2 py-2 px-4 rounded-md cursor-pointer flex items-center justify-center gap-2">
            <span className="font-medium text-gray-400">See All Projects</span>
            <ChevronRight className="text-gray-400" />
          </Link>
        </div>
      </section>


      {/* contact section */}
      <section className="w-full md:w-10/12 mx-auto relative my-18  ">
        <LayeredText heading="Contact Me" subheading="Let&apos;s Connect" />
        <ContactSection />
      </section>

    </>
  );
}
