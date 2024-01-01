import React from "react";
import Title from "./Title";

const Skills = () => {
  return (
    <div className="container">
      <Title title="Skills" subTitle="My technical skills" />

      <div className="flex items-center md:flex-row flex-col gap-6 my-8 mt-10 justify-center max-w-4xl w-full mx-auto">
        <div className="bg-white dark:bg-[#363636] shadow border border-gray-200 dark:border-0 py-5 pl-14 pr-0 rounded-lg w-full">
          <p className="text-center w-full font-medium mb-6 opacity-70 dark:opacity-100">
            Frontend developer
          </p>

          <div className="grid grid-cols-2 gap-4 mt-4 ">
            <SkillDetail icon="html5" title="HTML" subTitle="Advanced" />
            <SkillDetail icon="css3-simple" title="CSS" subTitle="Advanced" />
            <SkillDetail
              icon="bootstrap"
              title="Bootstrap"
              subTitle="Advanced"
              isBoxIcon={true}
            />
            <SkillDetail
              icon="java-script"
              title="JavaScript"
              subTitle="Advanced"
            />
            <SkillDetail
              icon="tailwind-css"
              title="Tailwind CSS"
              subTitle="Intermediate"
              isBoxIcon={true}
            />
            <SkillDetail
              icon="palette"
              title="Material UI"
              subTitle="Intermediate"
            />
            <SkillDetail
              icon="code-branch"
              title="Git"
              subTitle="Intermediate"
            />
            <SkillDetail
              icon="typescript"
              title="TypeScript"
              subTitle="Intermediate"
              isBoxIcon={true}
            />
          
          </div>
        </div>

        <div className="bg-white dark:bg-[#363636] shadow border border-gray-200 dark:border-0 py-5 pl-14 pr-0 rounded-lg w-full">
          <p className="text-center w-full font-medium mb-6 opacity-70 dark:opacity-100">
            Backend developer
          </p>

          <div className="grid grid-cols-2 gap-4 mt-4 ">
            <SkillDetail
              icon="java-script"
              title="Node JS"
              subTitle="Advanced"
            />
            <SkillDetail
              icon="java-script"
              title="Express JS"
              subTitle="Advanced"
            />
            <SkillDetail
              icon="mongodb"
              title="Mongodb"
              subTitle="Intermediate"
              isBoxIcon={true}
            />
            <SkillDetail
              icon="firebase"
              title="Firebase"
              subTitle="Beginner"
              isBoxIcon={true}
            />
            <SkillDetail
              icon="aws"
              title="AWS"
              subTitle="Basic"
              isBoxIcon={true}
            />
         
           
            <SkillDetail icon="server" title="Restful" subTitle="Advanced" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Skills;

const SkillDetail = ({
  icon,
  title,
  subTitle,
  isBoxIcon,
}: {
  icon: string;
  title: string;
  subTitle: string;
  isBoxIcon?: boolean;
}) => {
  return (
    <div className="w-full flex flex-col mx-auto  ">
      <div className="flex items-center gap-1 opacity-70 dark:opacity-100">
        {isBoxIcon ? (
          <i className={`bx bxl-${icon} text-lg`}></i>
        ) : (
          <i className={`uil uil-${icon}`}></i>
        )}

        <span className="text-base font-medium">{title}</span>
      </div>
      <span className="text-[12px] font-medium  opacity-40 dark:opacity-100">
        {subTitle}
      </span>
    </div>
  );
};
