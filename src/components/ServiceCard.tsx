import { Globe, Smartphone, Rocket } from 'lucide-react';

type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  title: string;
  description: string;
};
export default function ServiceCard() {
  const features: Feature[] = [
    {
      icon: Globe,
      color: "bg-sky-400",
      title: "Modern Web Applications",
      description: "Designing and developing high-performance web apps with clean, maintainable code and great user experience.",
    },
    {
      icon: Smartphone,
      color: "bg-violet-400",
      title: "Cross-Platform Mobile Apps",
      description: "Building sleek and functional mobile apps that run smoothly on Android using modern frameworks.",
    },
    {
      icon: Rocket,
      color: "bg-rose-400",
      title: "Scalable & Optimized Solutions",
      description: "Crafting scalable systems with fast load times, optimized SEO, and best development practices for future growth."
    },
  ]

  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg bg-white p-4 shadow-md flex flex-col items-start gap-4 min-h-[160px] dark:bg-gray-800/40 dark:backdrop-blur-sm ">
            <div
              className={`absolute -left-3 -top-3 flex h-16 w-16 items-center justify-center rounded-full ${feature.color}`}
            >
              <feature.icon className=" text-white " />
            </div>
            <div className="p-4 ">
              <h3 className="text-heading-theme ms-6 text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="py-2 text-theme mt-2 text-md text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
