import React from 'react'
import groceryStore from "@/assets/images/grocery-ecommerce.png"
import ProjectCard from '@/components/projectCard';
import weatherApp from "@/assets/images/weather-app.png"

export const projects = [
  {
    slug: "portfolio",
    image: groceryStore,
    title: "Personal Portfolio Website",
    description: "Personal website & portfolio build using Next.js TypeScript and TailwindCSS",
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js", type: "mono" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript", type: "color" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", type: "color" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", alt: "TailwindCSS", type: "color" },
    ],
    sourceCode: "https://github.com/ChethaNavid/Navid_Portfolio",
    readmePath: "/readmes/freshMart.md"
  },
  {
    slug: "fresh-mart",
    image: groceryStore,
    title: "Fresh Mart",
    description: "A full-stack groceries e-commerce website build from scratch ultilizing React and Node.js + Express",
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL", type: "color" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", type: "color" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg", alt: "Node.js", type: "color" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "Express", type: "mono" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", alt: "TailwindCSS", type: "color" },
    ],
    sourceCode: "https://github.com/ChethaNavid/grocery-store-platform",
    readmePath: "/readmes/freshMart.md"
  },
  {
    slug: "weather-app",
    image: weatherApp,
    title: "Weather Forcast Website",
    description: "A weather forcast website build with ReactJS and OpenWeatherMap (Weather API)",
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", type: "color" },
      { src: "https://cdn.brandfetch.io/idnykraD2w/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1752232746939", alt: "OpenWeatherMap", type: "color" },
    ],
    sourceCode: "https://github.com/Samnang-Vouen/weather-app",
    readmePath: "/readmes/weatherApp.md"
  },
]

const Projects = () => {
  return (
    <div>
      <p className='text-lg font-medium'>Projects</p>
      <p className='text-neutral-500 text-xs dark:text-neutral-400'>A showcase of open-source project I've built or contributed to</p>

      <hr className='my-4 w-full'/>

      <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            slug={project.slug}
            image={project.image}
            title={project.title}
            description={project.description}
            icons={project.icons}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects