'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

interface FloatingIconProps {
  imageSrc: string
  delay?: number
  offsetX?: number
  offsetY?: number
}

export function FloatingIcon({ imageSrc, delay = 0, offsetX = 0, offsetY = 0 }: FloatingIconProps) {
  const iconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const icon = iconRef.current
    if (!icon) return

    const animate = () => {
      const duration = 3000
      const startTime = Date.now() + delay

      const animation = () => {
        const elapsed = Date.now() - startTime
        const progress = (elapsed % duration) / duration

        const y = Math.sin(progress * Math.PI * 2) * 10
        icon.style.transform = `translate(${offsetX}px, ${offsetY + y}px)`

        requestAnimationFrame(animation)
      }

      requestAnimationFrame(animation)
    }

    animate()
  }, [delay, offsetX, offsetY])

  return (
    <div 
      ref={iconRef}
      className="absolute w-12 h-12 rounded-xl border-2 border-black bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-transform duration-300 p-2"
    >
      <Image
        src={imageSrc}
        alt="Technology icon"
        fill
        className="object-contain p-1"
      />
    </div>
  )
} 