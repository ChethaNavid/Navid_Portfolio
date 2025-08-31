import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SocialCards = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Gmail */}
      <div className="flex items-end justify-between gap-4 p-6 rounded-lg bg-[#d93025] text-white">
        <div>
          <h3 className="text-lg font-semibold">Stay in Touch</h3>
          <p className="text-sm mt-1">Reach out via email for collaborations</p>
          <a
            href="mailto:navidchetha@gmail.com"
            className="mt-3 inline-block bg-white text-[#d93025] px-4 py-2 rounded-md font-medium"
          >
            Go to Gmail →
          </a>
        </div>
        <div className="border-4 border-red-400 rounded-lg p-2">
          <SiGmail size={30} />
        </div>
      </div>

      {/* LinkedIn */}
      <div className="flex justify-between items-end gap-4 p-6 rounded-lg bg-[#0077b5] text-white">
        <div>
          <h3 className="text-lg font-semibold">Let's Connect</h3>
          <p className="text-sm mt-1">Connect with me professionally</p>
          <a
            href="https://www.linkedin.com/in/navid-chetha-0b9381375/"
            className="mt-3 inline-block bg-white text-[#0077b5] px-4 py-2 rounded-md font-medium"
          >
            Go to LinkedIn →
          </a>
        </div>
        <div className="border-4 rounded-lg p-1 border-blue-400">
          <FaLinkedin size={35} />
        </div>
      </div>

      {/* GitHub */}
      <div className="flex items-end justify-between gap-4 p-6 rounded-lg bg-[#0d1117] text-white">
        <div className="">
          <h3 className="text-lg font-semibold">Explore the Code</h3>
          <p className="text-sm mt-1">Check out my open-source work</p>
          <a
            href="https://github.com/ChethaNavid"
            className="mt-3 inline-block bg-white text-black px-4 py-2 rounded-md font-medium"
          >
            Go to GitHub →
          </a>
        </div>
        <div className="border-4 rounded-lg p-1">
          <FaGithub size={35} />
        </div>
      </div>
    </div>
  );
};

export default SocialCards;
