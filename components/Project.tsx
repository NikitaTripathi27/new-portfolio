/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IProject } from "./Projects";
import Link from "next/link";

const Project = ({ project }: { project: IProject }) => {
  return (
    <div className="w-full h-full group">
      <div className="w-full h-full">
        <Link href={`/project/${project?.id}`} className="w-full h-[250px] block">
          <img
            src={project?.thumbnailUrl}
            alt={project?.title}
            loading="lazy"
            className="w-full h-full object-cover rounded-t-xl "
          />
        </Link>

        <div className="py-4 pb-8 px-3 bg-white shadow-lg dark:bg-[#363636] rounded-b-xl">
          <h3 className="text-[22px] font-medium">{project?.title}</h3>

          <p className="text-[13px] text-[#666] my-2 dark:text-[#ccc] tracking-wide font-normal">
            {project?.description}
          </p>

          <div className="flex items-center justify-between w-full mt-4">
            <div className="flex items-center gap-2 dark:text-[#fff]">
              <i className="uil uil-link text-xl"></i>
              <a
                href={project?.websiteUrl}
                target="_blank"
                className="underline"
              >
                Live Preview
              </a>
            </div>
            {/* <div className="flex items-center gap-2 dark:text-[#fff]">
              <i className="uil uil-github text-xl"></i>
              <a
                href={project?.websiteCode}
                target="_blank"
                className="underline"
              >
                View Code
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
