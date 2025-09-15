"use client";

import React from 'react'
import { projects } from '../page'
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

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
            <p className='font-bold text-lg'>{project.title}</p>
            <p className='text-sm'>{project.description}</p>

            <hr className='my-4'/>

            <div className='flex justify-between'>
                <div className='flex gap-2 text-sm'>Tech Stack: 
                    {project.icons.map((icon, i) => (
                        <img key={i} src={icon.src} alt={icon.alt} width={25} height={25}/>
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