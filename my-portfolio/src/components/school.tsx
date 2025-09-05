import React from 'react'
import Image from "next/image";
import { StaticImageData } from "next/image";

interface SchoolProps {
  schoolLogo: string | StaticImageData;
  name: string;
  degree: string;
  years: string;
  based: string;
}

const School = ({ schoolLogo, name, degree, years, based }: SchoolProps) => {
  return (
    <div className='flex items-center gap-4 border rounded-md p-2 mt-4'>
        <Image 
            src={schoolLogo}
            alt="logo"
            width={60}
            height={60} 
            className='rounded-md'
        />
        <div>
            <p className='text-sm'>{name}</p>
            <p className='text-xs text-neutral-600'>{degree}</p>
            <div className='flex gap-2'>
                <p className='text-xs text-neutral-500'>{years}</p>
                <p className='text-xs text-neutral-600'>- {based}</p>
            </div>
        </div>
    </div>
  )
}

export default School