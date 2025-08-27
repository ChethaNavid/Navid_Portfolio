import React from 'react'
import Certificate from '@/components/certificate'
import techoCertificate from "@/assets/images/techo_scholarship.jpg"
import javaCertificate from "@/assets/images/certificate-java-programming-i.png"
import pythonCertificate from "@/assets/images/python_certification.jpg"
import bacIICertificate from "@/assets/images/bacII.jpg"

const Archievement = () => {
  const certificates = [
    {
      certificate: javaCertificate,
      title: "Java Programming 1",
      company: "Univeristy of Helsenki",
      date: "March 2025"
    },
    {
      certificate: pythonCertificate,
      title: "Python Course",
      company: "Above and Beyond",
      date: "August 2024"
    },
    {
      certificate: techoCertificate,
      title: "Techo Digital Talent Scholarship",
      company: "Minister of Post and Telecommunicaitons",
      date: "March 2024"
    },
    {
      certificate: bacIICertificate,
      title: "High School Graduated Certificate",
      company: "10 January 1979 High School",
      date: "November 2023"
    },
  ]
  return (
    <div>
      <p className='text-lg font-medium'>Archievement</p>
      <p className='text-neutral-500 text-xs'>A collection of certificate I've earned throughout my academic journey</p>

      <hr className='my-4 w-full'/>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {certificates.map((cert, index) => (
          <Certificate 
            key={index}
            certificate={cert.certificate}
            title={cert.title}
            company={cert.company}
            date={cert.date}
          />
        ))}
      </div>
      
    </div>
  )
}

export default Archievement