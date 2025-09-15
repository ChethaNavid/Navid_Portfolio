import React from "react";
import GitHubCalendar from "react-github-calendar";
import { FaGithub } from "react-icons/fa";
import GitHubStats from '@/components/gitHubStat'

const GitHubSection = () => {
  return (
    <div className="">
      <div className="flex gap-2 items-center">
        <FaGithub size={22}/>
        <h2 className="text-lg font-medium">GitHub Contributions</h2>
      </div>

      <p className='text-neutral-500 text-xs'>My GitHub activity over the past year.</p>

      <GitHubStats />

      <div className="w-[1000px] md:w-full scale-[0.7] md:scale-100 origin-top-left">
        <GitHubCalendar username="ChethaNavid" blockSize={12} blockMargin={4} />
      </div>

    </div>
  );
};

export default GitHubSection;
