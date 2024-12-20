'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Me', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#work' },
  { name: 'Blogs', href: '#blogs' },
]

const socialItems = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/dylanotoole', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/dylanotoole', icon: Github },
  { name: 'Email', href: 'mailto:dylandouglasotoole@gmail.com', icon: Mail },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['', 'about', 'experience', 'work', 'blogs']
      const currentSection = sections.find(section => {
        if (section === '') {
          return window.scrollY < 100
        }
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(currentSection || '')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 w-full z-50 bg-gray-50">
      <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-4 pt-4">
        <nav className="bg-blue-50 shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black rounded-xl">
          <div className="flex justify-between items-center h-12 px-6">
            {/* Desktop nav */}
            <div className="hidden sm:flex sm:items-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-5 py-1 transition-colors text-base font-bold ${
                    activeSection === (item.href === '/' ? '' : item.href.slice(1))
                      ? 'bg-black text-white'
                      : 'hover:bg-black hover:text-white'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.href === '/') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      const target = document.querySelector(item.href);
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Social icons */}
            <div className="hidden sm:flex sm:items-center">
              {socialItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors px-4"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

