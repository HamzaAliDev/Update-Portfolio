"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from '@/lib/utils'
import logo from '../../public/portfolio.png'
import Image from "next/image"
import Themetoggle from "./Themetoggle"
import { UserIcon } from "./ui/user"
import { LayersIcon } from "./ui/layers"
import { PhoneIcon } from "./ui/phone"

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { type: "logo", name: "AH", href: "/" },
    { type: "about", name: "About", href: "/about" },
    { type: "projects", name: "Projects", href: "/projects" },
    { type: "contact", name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="flex justify-center  py-4 fixed z-50">
      <div className="flex items-center bg-white/20 dark:bg-gray-800/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full px-2 shadow-lg gap-2 ">
        {navItems.map((item) => {
          const isActive = pathname === item.href

          let icon
          switch (item.type) {
            case "logo":
              icon = <Image src={logo} alt="logo" width={35} height={30} />
              break
            case "about":
              icon = <UserIcon size={22} />
              break
            case "projects":
              icon = <LayersIcon size={22} />
              break
            case "contact":
              icon = <PhoneIcon size={22} />
              break
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group relative px-3  py-2 text-md font-medium rounded-full transition-colors",
                isActive
                  ? "text-gray-500 dark:text-white "
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
              )}
            >
              <span className="flex items-center gap-2 ">
                {isActive ? (
                  <>
                    <span className="items-center justify-center hidden md:flex text-gray-700 dark:text-white">
                      {icon}
                    </span>
                    <span className="text-gray-700 dark:text-white">{item.name}</span>
                  </>
                ) : (
                  <>
                    <span className="items-center justify-center hidden md:flex">
                      {icon}
                    </span>
                    {item.name}
                  </>
                )}
              </span>
            </Link>
          )
        })}

        <Themetoggle />
      </div>
    </nav>
  )
}

