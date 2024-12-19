'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "World Mapping Application",
    description: "GIS application to view various cities such as Toronto, New York, and Tokyo. Interactive mapping platform with custom visualization layers and city navigation features.",
    image: "/work_1.png?height=400&width=100",
    technologies: ["C++", "Multithreading", "OOP", "OpenStreetMap API"],
    demo: "https://sendspark.com/share/2qgjgg2qgi2r6czh"
  }
]

export function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center inline-block px-4 py-2 rainbow-text" data-text="Work">
          Work
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black overflow-hidden transition-all duration-300 ${
                hoveredIndex === index ? 'transform scale-103 translate-y-[-2px] translate-x-[-2px] shadow-[6px_6px_0_0_rgba(0,0,0,1)]' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-64 border-b-2 border-black">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-purple-50 text-purple-700 hover:bg-purple-100 shadow-[1px_1px_0_0_rgba(0,0,0,1)] border border-black"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    size="sm"
                    className="shadow-[2px_2px_0_0_rgba(0,0,0,1)] border-2 border-black hover:translate-y-1 hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] transition-all"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

