import Link from 'next/link'
import React from 'react'
import { AuroraText } from './magicui/aurora-text'
import SocialButton from './SocialButton/SocialButton'
import Button from './Button/Button'

export default function HeroSection() {
    return (

        <div className="hero-section w-full md:w-10/12 mx-auto flex flex-col items-center justify-center md:px-4">
            {/* Status Badge */}
            < div className="my-2 w-full max-w-[600px] mx-auto md:mx-0" >
                <div className='flex items-center justify-center mb-4 md:mb-12'>
                    <div className="inline-flex items-center gap-2 px-4 py-2">
                        {/* <div className="w-2 h-2 bg-green-500 rounded-full"></div> */}
                        <div className="relative flex items-center justify-center">
                            <div className="w-7 h-7 bg-green-500 rounded-full animate-ping absolute opacity-75"></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full relative"></div>
                        </div>
                        <span className="text-green-700 text-lg font-medium ms-2">Available for work</span>
                    </div>
                </div>
                {/* <p className="text-xl text-gray-600 font-light">Hello there! 👋</p> */}
                <p className="text-xl text-gray-600 font-light text-center md:text-left w-full">Hello there! 👋</p>
            </div >

            {/* Name and Title */}
            <h1 className='text-theme text-6xl font-semibold text-center mb-3 md:text-8xl'>I&apos;m <AuroraText>Ali Hamza</AuroraText></h1>
            <h2 className='text-theme text-3xl font-semibold text-center md:text-5xl mb-4 md:mb-10'>Software Engineer</h2>
            <div className="max-w-3xl mx-auto">
                <p className='text-theme text-lg text-center mb-6'>
                    I specialize in building responsive, high-performance web and mobile applications that blend technical excellence with a deep focus on user experience and accessibility.
                </p>
            </div>
            <Link href='/about'>
                <Button />
            </Link>
            <div className="mt-6 flex gap-4">
                <SocialButton type="github" />
                <SocialButton type="linkedin" />
                <SocialButton type="instagram" />
                <SocialButton type="whatsapp" />
            </div>
        </div>
    )
}
