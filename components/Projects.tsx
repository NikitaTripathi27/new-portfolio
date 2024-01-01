import React, { useState } from "react";
import Title from "./Title";
import Project from "./Project";
import projectData from "../db/data.json";

export interface IProject {
  id: number;
  title: string;
  description: string;
  websiteUrl: string;
  thumbnailUrl: string;
  websiteCode: string;
  techStack: string
}

const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>(projectData);

  return (
    <div className="container">
      <Title title="Projects" subTitle="Things I've built so far" />

      {/* <div className="flex items-center justify-end gap-4 mt-8">
        <button className="w-9 h-9 cursor-pointer rounded-full flex items-center justify-center border border-gray-300 text-2xl text-gray-600 dark:bg-[#363636] dark:text-[#fff] dark:border-0">
          <i className="uil uil-angle-left"></i>
        </button>
        <button className="w-9 h-9 cursor-pointer rounded-full flex items-center justify-center border border-gray-300 text-2xl text-gray-600 dark:bg-[#363636] dark:text-[#fff] dark:border-0">
          <i className="uil uil-angle-right"></i>
        </button>
      </div> */}

      <div className="mb-10 mt-4 grid lg:grid-cols-3 sm:grid-cols-2  gap-6">
        {projects?.map((project: IProject) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
