import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import Link from 'next/link'

interface PorjectCardProps {
    slug: string;
    image: string | StaticImageData;
    title: string;
    description: string;
    icons: { src: string; alt: string; type: string }[]
}

const ProjectCard = ({ slug, image, title, description, icons }: PorjectCardProps) => {
  
  return (
    <div>
      <div className='w-96 flex flex-col border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-gray-400'>
        <div className="aspect-[2/1] group relative w-full hover:">
          <Image 
            src={image}
            alt={title}
            className="object-contain"
          />
          
          <Link
            href={`/projects/${slug}`}
            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"
          >
            <span className="text-xs">View Project →</span>
          </Link>
        </div>

        <div className='h-1/2 p-3 space-y-1'>
            <p className='text-sm font-medium'>{title}</p>
            <p className='text-xs text-neutral-500 dark:text-neutral-400'>{description}</p>
            <div className='flex flex-wrap gap-2 mt-2'>
              {icons.map((icon, index) => (
                <img
                    key={index}
                    src={icon.src}
                    alt={icon.alt}
                    width={25}
                    height={25}
                    className={`${icon.type === "mono" ? "dark:invert" : "" }`}
                />
              ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard