
export default function LayeredText({ heading, subheading }: { heading: string, subheading: string }) {
    return (
        <div className=" mx-auto  relative mb-8">
            {/* Background Text  */}
            <div className="absolute inset-0  pointer-events-none">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200/60 dark:text-gray-700/50 whitespace-nowrap select-none">
                    {heading}
                </h1>
            </div>

            {/* Foreground Text */}
            <div className="relative z-10 pt-7">
                <h2 className="ms-2 text-2xl md:text-2xl lg:text-3xl font-bold text-gray-700 dark:text-gray-300 leading-tight" >
                    {subheading}
                </h2>
            </div>
        </div>
    )
}
