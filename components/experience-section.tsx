'use client'

import { useState } from 'react'
import { Globe } from 'lucide-react'
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface ExperienceEntry {
  company: string
  logo: string
  role: string
  dateRange: string
  location: string
  description: string[]
  website: string
  technologies: string[]
}

interface ExperienceSectionProps {
  experiences: ExperienceEntry[]
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 inline-block px-4 py-2 rainbow-text" data-text="Experience">Experience</h2>
      <div className="relative">
        {/* Timeline connector */}
        <div className="absolute left-6 top-4 bottom-0 w-px bg-black" />
        
        {/* Experience entries */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div 
              key={index} 
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-4 w-4 h-4 rounded-full border-4 border-white bg-black" />
              
              {/* Experience card */}
              <div 
                className={`ml-16 p-6 bg-white rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black transition-all duration-300 ${
                  hoveredIndex === index ? 'transform scale-103 translate-y-[-2px] translate-x-[-2px] shadow-[6px_6px_0_0_rgba(0,0,0,1)]' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Company logo */}
                  <div className="w-12 h-12 rounded-lg border-2 border-black overflow-hidden flex items-center justify-center bg-white shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="space-y-4">
                      {/* Header */}
                      <div>
                        <h3 className="font-bold text-lg">
                          {experience.role}
                        </h3>
                        <p className="text-gray-600 mt-1">{experience.company}</p>
                      </div>
                      
                      {/* Date and location */}
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100 shadow-[1px_1px_0_0_rgba(0,0,0,1)] border border-black">
                          {experience.dateRange}
                        </Badge>
                        <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100 shadow-[1px_1px_0_0_rgba(0,0,0,1)] border border-black">
                          {experience.location}
                        </Badge>
                      </div>
                      
                      {/* Description */}
                      <ul className="list-disc pl-5 space-y-2">
                        {experience.description.map((item, i) => (
                          <li key={i} className="text-gray-600 leading-relaxed">{item}</li>
                        ))}
                      </ul>
                      
                      {/* Website link */}
                      <div>
                        <a 
                          href={experience.website}
                          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700"
                        >
                          <Globe className="w-4 h-4" />
                          Website
                        </a>
                      </div>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-purple-50 text-purple-700 hover:bg-purple-100 shadow-[1px_1px_0_0_rgba(0,0,0,1)] border border-black"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

