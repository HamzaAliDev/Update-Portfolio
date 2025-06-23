'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon } from './ui/sun'
import { MoonIcon } from './ui/moon'

export default function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null // prevent hydration mismatch

    const isDark = resolvedTheme === 'dark'

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Theme"
        >
            {isDark ?
                <SunIcon size={20} className='transition-colors duration-300 text-gray-500 hover:text-gray-900' />
                :
                <MoonIcon size={20} className='transition-colors duration-300 text-gray-500 hover:text-gray-900' />}
        </button>
    )
}
