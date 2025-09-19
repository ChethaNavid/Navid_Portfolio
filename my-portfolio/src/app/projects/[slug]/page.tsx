"use client";

import React from 'react'
import { projects } from '../page'
import { FaGithub } from "react-icons/fa";
import { CircleArrowLeft } from 'lucide-react';
import Image from 'next/image';
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const page = () => {
    const { slug } = useParams() as { slug: string };
    const project = projects.find((p) => p.slug === slug);
    const [readmes, setReadmes] = useState<string>("");

    useEffect(() => {
        if(project?.readmePath) {
            fetch(project.readmePath)
                .then((res) => res.text())
                .then(setReadmes)
                .catch((err) => console.error("Failed to load README:", err))
        }
    }, [project]);

    if (!project) {
        return (
            <div className="p-6 text-center">
                <p className="text-red-500 font-semibold">Project not found</p>
                <p className="text-sm text-gray-500">Slug: {slug}</p>
            </div>
        );
    }
    
  return (
    <div>
        <div>
            <Link href="/projects" className="text-sm cursor-pointer flex items-center gap-2 mb-2">
                <CircleArrowLeft size={16} />
                Back
            </Link>

            <p className='font-bold text-lg'>{project.title}</p>
            <p className='text-sm text-neutral-600 dark:text-neutral-400'>{project.description}</p>

            <hr className='my-4'/>

            <div className='flex justify-between'>
                <div className='flex gap-2 text-sm'>Tech Stack: 
                    {project.icons.map((icon, i) => (
                        <div key={i} className="relative group flex justify-center">
                            <img 
                                src={icon.src} 
                                alt={icon.alt} 
                                width={25} 
                                height={25}
                                className={`transition-transform duration-200 group-hover:scale-110 ${icon.type === "mono" ? "dark:invert" : "" }`}
                            />
                            <span className="absolute top-[-1.5rem] px-2 py-1 text-xs text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-[-5px] transition-all duration-200 whitespace-nowrap">
                                {icon.alt}
                            </span>
                        </div>
                    ))}
                </div>

                <div className='flex gap-2'>
                    <FaGithub size={20}/>
                    <a 
                        href={project.sourceCode}
                        className='text-sm font-medium underline'
                    >
                        Source Code
                    </a>
                </div>
            </div>

            <Image 
                src={project.image}
                alt={project.title}
                className='my-6 w-3/4 m-auto'
            />

            <div className="markdown-body">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {readmes}
                </ReactMarkdown>
            </div>
        </div>
    </div>

  )
}

export default page