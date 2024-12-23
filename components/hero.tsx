'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowDown, Linkedin, FileText } from 'lucide-react'
import confetti from 'canvas-confetti'
import { FloatingIcon } from '@/components/ui/floating-icon'

export function Hero() {
  const [isAnimated, setIsAnimated] = useState(false)
  const [hasShownConfetti, setHasShownConfetti] = useState(false);
  const nameCardRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    setIsAnimated(true);
    if (!hasShownConfetti && !sessionStorage.getItem('confettiShown')) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setHasShownConfetti(true);
      sessionStorage.setItem('confettiShown', 'true');
    }
  }, [hasShownConfetti]);

  useEffect(() => {
    const nameCard = nameCardRef.current
    if (!nameCard) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = nameCard.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10

      nameCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
    }

    const handleMouseLeave = () => {
      nameCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    }

    nameCard.addEventListener('mousemove', handleMouseMove)
    nameCard.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      nameCard.removeEventListener('mousemove', handleMouseMove)
      nameCard.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 
              className={`text-5xl font-bold mb-6 transition-all duration-1000 ease-out ${
                isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <span 
                ref={nameCardRef}
                className="inline-block bg-yellow-200 text-black px-4 py-2 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black transition-transform duration-200 ease-out"
              >
                Dylan O'Toole <span className="text-sm text-black-600">(He/Him)</span>
              </span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              Hey, my name is Dylan and I'm a Software Engineer. Welcome to my portfolio!
            </p>
            <div className="flex flex-col items-start gap-4">
              <div className="flex space-x-4">
                <Button 
                  className="shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all bg-[#0A66C2] hover:bg-[#004182] text-white animate-bounce"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/dylanotoole/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    Message Me
                    <span className="ml-2">😊</span>
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all"
                  asChild
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector('#experience');
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <a href="#experience">
                    View Experience
                    <ArrowDown className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="pl-[108px]">
                <Button 
                  className="shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all bg-pink-100 hover:bg-pink-200 text-black w-40"
                  asChild
                >
                  <a href="/Dylan-O'Toole-resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                    My Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 lg:w-96 lg:h-96 transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-black rounded-full transform translate-x-4 translate-y-4" />
              <FloatingIcon 
                imageSrc="/golf.png"
                offsetX={-80}
                offsetY={-20}
              />
              <FloatingIcon 
                imageSrc="/tennis.png"
                offsetX={80}
                offsetY={-50}
                delay={500}
              />
              <FloatingIcon 
                imageSrc="/soccer.jpg"
                offsetX={-60}
                offsetY={50}
                delay={1000}
              />
              <div className="relative z-10 w-full h-full rounded-full border-4 border-black overflow-hidden bg-white">
                <Image
                  src="/profile.jpg?height=400&width=400"
                  alt="Dylan O'Toole"
                  fill
                  className="object-cover object-[center_-45%] scale-[2.8]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

