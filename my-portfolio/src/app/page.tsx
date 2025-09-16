import { Code2 } from "lucide-react"

export default function Page() {
  return (
    <>
      <h1 className="text-2xl font-medium">Hi, I'm Chetha Navid</h1>

      <ul className="flex gap-4 list-disc list-inside text-xs text-neutral-500">
        <li>Based in Phnom Penh, Cambodia</li>
        <li>Onsite</li>
      </ul>

      <p className="text-sm align-justify mt-4">
        Junior student major in Computer Science, specialize in Software Engineering.
        Experienced and passionate Full-stack Developer specialize in building scalable 
        and efficient digital solutions. On the frontend, I work with Next.js, React.js,
        JavaScript, TypeScript and Tailwind CSS to craft a responsive and accessible user 
        interfaces. On the backend, I'm experienced with Node.js Express to build a RESTful APIs.
      </p>

      <hr className="mt-6"/>

      <div className="flex items-center gap-2 mt-4">
        <Code2 size={18}/>
        <span>Skils</span>
      </div>

      <p className="text-xs text-neutral-500">My professional skills.</p>

      <div className="flex flex-wrap items-center gap-6 mt-4">
        {[
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", alt: "TailwindCSS" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg", alt: "NodeJS" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "Express" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", alt: "C" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", alt: "C++" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub" },
        ].map((icon, i) => (
          <div key={i} className="relative group flex justify-center">
            <img 
              src={icon.src}
              alt={`${icon.alt}`}
              width="40"
              height="40"
              className="transition-transform duration-200 group-hover:scale-110"
            />
            <span className="absolute bottom-[-1.8rem] px-2 py-1 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-y-[-5px] transition-all duration-200">
              {icon.alt}
            </span>
          </div>
        ))}
      </div>
    </>
  )
}