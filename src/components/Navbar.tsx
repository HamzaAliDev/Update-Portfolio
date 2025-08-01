"use client"

import type * as React from "react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { User, Phone, Layers } from "lucide-react"
import logo from '../../public/logo.svg'
import { useTheme } from "next-themes"
import Themetoggle from "./Themetoggle"
import Image from "next/image"

interface MenuItem {
  icon: React.ReactNode
  label: string
  href: string
  gradient: string
  iconColor: string
}

const menuItems: MenuItem[] = [
  {
    icon: (<Image
      src={logo}
      alt="logo"
      // priority
      className="w-[45px] h-auto object-contain rounded-md"
    />),
    label: "Ali Hamza",
    href: "/",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "About",
    href: "/about",
    gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    label: "Projects",
    href: "/projects",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Contact",
    href: "/contact",
    gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
  },
]

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

export default function Navbar() {
  const { theme } = useTheme()
  const pathname = usePathname()

  

  const isDarkTheme = theme === "dark"

  return (
    <section className="pt-10 pb-5 w-full flex items-center justify-center max-w-[1500px] mx-auto fixed z-50">
      <motion.nav
        className="p-1 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-lg overflow-hidden dark:border-gray-950"
        initial="initial"
        whileHover="hover"
      >
        <motion.div
          className={`absolute -inset-2 bg-gradient-radial from-transparent ${isDarkTheme
            ? "via-blue-400/30 via-30% via-purple-400/30 via-60% via-red-400/30 via-90%"
            : "via-blue-400/20 via-30% via-purple-400/20 via-60% via-red-400/20 via-90%"
            } to-transparent rounded-3xl z-0 pointer-events-none`}
          variants={navGlowVariants}
        />
        <ul className="flex items-center gap-2 relative z-10">
          {menuItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <motion.li key={item.label} className="relative">
                <motion.div
                  className="block rounded-xl overflow-visible group relative"
                  style={{ perspective: "600px" }}
                  whileHover="hover"
                  initial="initial"
                >
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none"
                    variants={glowVariants}
                    animate={isActive ? "hover" : "initial"}
                    style={{
                      background: item.gradient,
                      opacity: 0,
                      borderRadius: "16px",
                    }}
                  />
                  <motion.a
                    href={item.href}
                    // className="flex items-center gap-2 px-3 md:px-4 py-2 relative z-10 bg-transparent rounded-xl"
                    className={`flex items-center  ${item.label === "Ali Hamza" ? "px-2 py-1" : "px-2 gap-2 md:px-4 py-2"} relative z-10 bg-transparent rounded-xl`}
                    variants={itemVariants}
                    transition={sharedTransition}
                    style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                  >
                    <span
                      className={`transition-colors duration-300 ${item.label === 'Ali Hamza' ? '' : 'hidden sm:inline'
                        } ${isActive ? item.iconColor : `text-foreground group-hover:${item.iconColor}`}`}
                    >
                      {item.icon}
                    </span>
                    <span
                      className={`transition-colors duration-300 ${item.label === "Ali Hamza" ? "hidden sm:inline" : ""
                        } ${isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}
                    >
                      {item.label}
                    </span>
                  </motion.a>
                  <motion.a
                    href={item.href}
                    // className="flex items-center gap-2 px-3 md:px-4 py-2 absolute inset-0 z-10 bg-transparent rounded-xl"
                    className={`flex items-center  ${item.label === "Ali Hamza" ? "px-2 py-1" : "gap-2 px-3 md:px-4 py-2"} absolute inset-0 z-10 bg-transparent rounded-xl`}
                    variants={backVariants}
                    transition={sharedTransition}
                    style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
                  >
                    <span
                      className={`transition-colors duration-300 ${item.label === 'Ali Hamza' ? '' : 'hidden sm:inline'
                        } ${isActive ? item.iconColor : `text-foreground group-hover:${item.iconColor}`}`}
                    >
                      {item.icon}
                    </span>
                    <span
                      className={`transition-colors duration-300 ${item.label === "Ali Hamza" ? "hidden sm:inline" : ""
                        } ${isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}
                    >
                      {item.label}
                    </span>
                  </motion.a>
                </motion.div>
              </motion.li>
            )
          })}
          {/* Always render the ThemeToggle container to prevent layout shifts */}
          <li className="relative">
            <div className="p-2 rounded-full w-[44px] h-[44px] flex items-center justify-center">
               <Themetoggle />
            </div>
          </li>
        </ul>
      </motion.nav>
    </section>
  )
}
