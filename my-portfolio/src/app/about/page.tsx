import React from 'react'
import { GraduationCap } from "lucide-react";
import School from '@/components/school';
import cadt from "@/assets/images/cadt_square_logo_boundary.png"
import ace from "@/assets/images/ace_logo_share.png"
import highSchool from "@/assets/images/10Jan.jpg"

const About = () => {
  return (
    <div>
      <p className='text-lg font-medium'>About</p>
      <p className='text-neutral-500 text-xs'>A brief introduction to who I am.</p>

      <hr className='my-4 w-full'/>

      <p className='text-sm'>
        Hello there! Thank you for visiting my personal website. I'm Chetha Navid,
        a student majoring in Computer Science at Cambodia Academy of Digital Technology.
        I am passionate of becoming a full-stack developer and build an impactful software product.
        My tech stack includes modern front-end technologies like Next.js, React, JavaScript, TypeScript
        and Tailwind CSS. As well as backend development using Node.js and Express. 
      </p>

      <br />

      <p className='text-sm'>
        I believe that great communication and strong team synergy are the keys to success in software development.
        Over time, my experiences have shaped not only my technical skills but also my soft skills. 
        I'm always excited to work in team, learn from others and contributes into impactful projects.
      </p>

      <br />

      <p className='text-sm'>Best regards,</p>

      <p className='text-sm'>Navid</p>

      <hr className='my-4 w-full'/>

      <div className="flex items-center gap-2 mt-4">
        <GraduationCap size={18}/>
        <span>Education</span>
      </div>

      <p className="text-xs text-neutral-500">My educaitonal journey</p>

      <School 
        schoolLogo={cadt}
        name='Cambodia Academy of Digital Technology'
        degree="Bachelor of Computer Science"
        years='2024 - Present'
        based='Phnom Penh, Cambodia'
      />

      <School 
        schoolLogo={ace}
        name='Australian Centre for Education'
        degree="English Language Education"
        years='2022 - 2023'
        based='Siem Reap, Cambodia'
      />

      <School 
        schoolLogo={highSchool}
        name='10 January 1979 High School'
        degree="High School"
        years='2021 - 2023'
        based='Siem Reap, Cambodia'
      />

    </div>
  )
}

export default About