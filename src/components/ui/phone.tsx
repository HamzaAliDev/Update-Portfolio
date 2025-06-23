"use client"

import type React from "react"

import type { Variants } from "motion/react"
import { motion, useAnimation } from "motion/react"
import type { HTMLAttributes } from "react"
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react"
import { cn } from "@/lib/utils"

export interface PhoneIconHandle {
    startAnimation: () => void
    stopAnimation: () => void
}

interface PhoneIconProps extends HTMLAttributes<HTMLDivElement> {
    size?: number
    isActive?: boolean
}

const outlineVariant: Variants = {
    normal: { pathLength: 1, opacity: 1, pathOffset: 0 },
    animate: {
        pathLength: [0, 1],
        opacity: [0, 1],
        pathOffset: [1, 0],
    },
}

// const receiverVariant: Variants = {
//     normal: {
//         pathLength: 1,
//         pathOffset: 0,
//         scale: 1,
//     },
//     animate: {
//         pathLength: [0, 1],
//         pathOffset: [1, 0],
//         scale: [0.5, 1],
//     },
// }

const PhoneIcon = forwardRef<PhoneIconHandle, PhoneIconProps>(
    ({ onMouseEnter, onMouseLeave, className, size = 28, isActive, ...rest }, ref) => {
        const controls = useAnimation()
        const isControlledRef = useRef(false)

        useImperativeHandle(ref, () => {
            isControlledRef.current = true

            return {
                startAnimation: () => controls.start("animate"),
                stopAnimation: () => controls.start("normal"),
            }
        })

        const handleMouseEnter = useCallback(
            (e: React.MouseEvent<HTMLDivElement>) => {
                if (!isControlledRef.current) {
                    controls.start("animate")
                } else {
                    onMouseEnter?.(e)
                }
            },
            [controls, onMouseEnter],
        )

        const handleMouseLeave = useCallback(
            (e: React.MouseEvent<HTMLDivElement>) => {
                if (!isControlledRef.current) {
                    controls.start("normal")
                } else {
                    onMouseLeave?.(e)
                }
            },
            [controls, onMouseLeave],
        )
        return (
            <div className={cn(className)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} {...rest}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isActive ? "url(#animatedGradient)" : "currentColor"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >

                    <defs>
                        <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ec4899">
                                <animate attributeName="stop-color" values="#ec4899;#8b5cf6;#6366f1;#ec4899" dur="4s" repeatCount="indefinite" />
                            </stop>
                            <stop offset="100%" stopColor="#6366f1">
                                <animate attributeName="stop-color" values="#6366f1;#ec4899;#8b5cf6;#6366f1" dur="4s" repeatCount="indefinite" />
                            </stop>
                        </linearGradient>
                    </defs>

                    <motion.path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                        variants={outlineVariant}
                        animate={controls}
                    />
                </svg>
            </div>
        )
    },
)

PhoneIcon.displayName = "PhoneIcon"

export { PhoneIcon }
