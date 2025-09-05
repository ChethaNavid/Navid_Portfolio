import React from 'react'
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface CertificateProps {
  certificate: string | StaticImageData;
  title: string;
  company: string;
  date: string;
}

const Certificate = ({ certificate, title, company, date}: CertificateProps) => {
  return (
    <div className='w-72 flex flex-col border border-gray-300 rounded-lg overflow-hidden p-1'>

        <div className="h-48 w-full relative">
            <Image 
                src={certificate}
                alt={title}
                fill
                className="object-contain"
            />
        </div>

       
        <div className='p-3 space-y-1'>
            <p className='font-medium'>{title}</p>
            <p className='text-sm text-neutral-700'>{company}</p>
            <p className='text-xs text-neutral-500'>Issued on</p>
            <p className='text-sm text-neutral-700'>{date}</p>
        </div>
    </div>
  )
}

export default Certificate