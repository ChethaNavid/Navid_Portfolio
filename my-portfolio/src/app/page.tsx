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
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="50" height="50" alt="HTML logo"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="50" height="50" alt="CSS logo"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50" height="50" alt="JavaScript logo"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="50" height="50" alt="React logo"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" width="50" height="50" alt="Node.js logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="50" height="50" alt="Express logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="50" height="50" alt="Next.js logo"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="50" height="50" alt="TypeScript logo"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width="50" height="50" alt="Java logo"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="50" height="50" alt="Python logo"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" width="50" height="50" alt="C logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" width="50" height="50" alt="C++ logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="50" height="50" alt="MySQL logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="50" height="50" alt="PostgreSQL logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="50" height="50" alt="Git logo" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="50" height="50" alt="GitHub logo" />
      </div>
    </>
  )
}