import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import ExperienceSection from '@/components/experience-section'
import { Work } from '@/components/work'
import { Blogs } from '@/components/blogs'

const experiences = [
  {
    company: "Asana",
    logo: "/AsanaLogo.jpg",
    role: "Software Engineer Intern",
    dateRange: "May 2024 - Aug 2024",
    location: "Vancouver, BC",
    description: [
      "Addressed key feature requests from large enterprise customers by revamping user deactivation in enterprise tooling with TypeScript, Scala, and React.",
      "Reduced enterprise churn by implementing deactivated users' email searchability in AWS OpenSearch using PostgreSQL and TypeScript.",
      "Spearheaded the resolution of a critical breakage that blocked enterprise tooling for over 1,000 licensed users."
    ],
    website: "https://asana.com",
    technologies: ["TypeScript", "Scala", "React", "PostgreSQL", "AWS OpenSearch"]
  },
  {
    company: "Mozilla",
    logo: "/Firefox_logo.png?height=10&width=10",
    role: "Software Engineer Intern - Firefox networking team",
    dateRange: "May 2023 - Apr 2024",
    location: "Toronto, ON",
    description: [
      "Achieved a 5% improvement in URL parsing in Firefox by applying the 2023 URL search specification using C++ and JavaScript.",
      "Engineered Firefox's auto-proxy connection feature, ensuring seamless compatibility with users' OS settings through multithreading, C++, JavaScript, and object-oriented programming.",
      "Empowered over 5 million DevTools users to test their applications more effectively by deploying a simulated offline mode in Firefox DevTools."
    ],
    website: "https://www.mozilla.org",
    technologies: ["C++", "JavaScript", "Multithreading", "OOP"]
  },
  {
    company: "Rocscience Inc.",
    logo: "/rocscience_logo.jpg?height=40&width=40",
    role: "Software Developer Intern",
    dateRange: "May 2022 - Aug 2022",
    location: "Toronto, ON",
    description: [
      "Achieved a 5% decrease in mining operational costs for over 7,000 customers by implementing a user-facing algorithm to section and render surfaces using C#, C++, Visual Studio, and OOP.",
      "Built a 3D terrain polygon tool to display a runtime-chosen slice of terrain with C# WPF.",
      "Awarded 1st in a company-wide hackathon by working with a team to create a 3D VR terrain model viewer and interactable hand UI on the Microsoft HoloLens 2 using Unreal Engine 4."
    ],
    website: "https://www.rocscience.com",
    technologies: ["C#", "C++", "WPF", "Unreal Engine 4", "VR"]
  },
  {
    company: "AVOLTA Inc.",
    logo: "/avolta_logo.jpg?height=40&width=40",
    role: "Software Engineer Intern",
    dateRange: "May 2021 - Sept 2021",
    location: "Toronto, ON",
    description: [
      "Developed an encryption algorithm as part of the security team for a prototype car key fob using C++ and C#.",
      "Led the development and design of the personal car page prototype for the Avolta mobile app using React and Figma."
    ],
    website: "https://www.avoltacanada.com/",
    technologies: ["C++", "C#", "React", "Figma"]
  }
]

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ExperienceSection experiences={experiences} />
        </div>
      </section>
      <Work />
      <Blogs />
    </main>
  )
}

