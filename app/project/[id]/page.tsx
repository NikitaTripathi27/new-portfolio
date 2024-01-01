/* eslint-disable @next/next/no-img-element */
"use client";

import Header from "@/components/Header";
import React from "react";
import projects from "@/db/data.json";
import { IProject } from "@/components/Projects";
import { useParams } from "next/navigation";
import Image from "next/image";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const projectId = Number(id);

  const project = projects.find(
    (project: IProject) => project.id === projectId
  );

  return (
    <>
      <Header />

      <div className="mt-14 p-8">
        <div className="max-w-3xl w-full mx-auto ">
          <div className="w-full aspect-video">
            <img
              src={project?.thumbnailUrl as string}
              alt={project?.title as string}
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>

          <p className="text-3xl font-semibold my-4">{project?.title}</p>

          <p className="text-sm my-4 text-[#666] dark:text-[#ccc] tracking-wide font-normal">
            {project?.description}
          </p>

          <p className="my-4 text-lg font-semibold">Teach Stack</p>

          <div className="flex items-center gap-4 flex-wrap mb-1">
            {project?.techStack?.split(",")?.map((skill) => (
              <div key={skill} className="border px-4 py-2 rounded-full text-sm font-medium opacity-60 dark:opacity-90">{skill}</div>
            ))}
          </div>
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
            <div className="flex items-center gap-2 dark:text-[#fff]">
              <i className="uil uil-github text-xl"></i>
              <a
                href={project?.websiteCode}
                target="_blank"
                className="underline"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailPage;
