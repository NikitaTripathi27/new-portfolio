import React, { useState } from "react";
import Title from "./Title";

const Qualification = () => {
  const [toggleQualification, setToggleQualification] = useState(1);
  return (
    <div className="container">
      <Title title="Qualification" subTitle="My personal journey" />

      <div className="flex items-center justify-center gap-4 my-10">
        <button
          onClick={() => setToggleQualification(1)}
          className={`${
            toggleQualification === 1 && "font-medium"
          } cursor-pointer`}
        >
          <i className="uil uil-graduation-cap text-xl"></i>
          <span className="ml-1">Education</span>
        </button>
        <button
          onClick={() => setToggleQualification(2)}
          className={`${
            toggleQualification === 2 && "font-medium"
          } cursor-pointer`}
        >
          <i className="uil uil-bag-alt text-xl"></i>
          <span className="ml-1">Experience</span>
        </button>
      </div>

      {toggleQualification === 1 && (
        <div className="relative   max-w-xl w-full mx-auto flex items-center justify-center">
          <div className="w-[2px] bg-gray-300 dark:bg-[#a7a7a7] h-[300px] rounded-lg flex flex-col items-center justify-between relative">
            <div className="w-3 h-3 bg-black/60 dark:bg-[#363636] rounded-full"></div>
            <div className="w-3 h-3 bg-black/60 dark:bg-[#363636] rounded-full"></div>
            <div className="w-3 h-3 bg-black/60 dark:bg-[#363636] rounded-full"></div>
           
            <div className="dark:bg-[#363636]"></div>
          </div>
          <div className="absolute top-0 sm:left-28 left-24 flex flex-col gap-1">
            <p className="font-medium text-sm">Web Development</p>
            <p className="opacity-60 font-medium text-xs dark:opacity-90">
              Crio.do
            </p>
            <div className="flex items-center text-xs gap-2 opacity-40 font-medium dark:opacity-90">
              <i className="uil uil-calender"></i>
              <span>Nov 2022 - June 2023</span>
            </div>
          </div>

          <div className="absolute top-[96px] sm:right-[124px] right-10 flex flex-col gap-1">
            <p className="font-medium text-sm">Software Development</p>
            <p className="opacity-60 font-medium text-xs dark:opacity-90">
              Eveez
            </p>
            <div className="flex items-center text-xs gap-2 opacity-40 font-medium dark:opacity-90">
              <i className="uil uil-calender"></i>
              <span>July 2023 - Dec 2023</span>
            </div>
          </div>
        
          <div className="absolute top-[198px] sm:left-[5.4rem] left-5 mt-4 flex flex-col gap-1">
            <p className="font-medium text-sm">BTech. in Electronics and Communication Engineering</p>
            <p className="opacity-60 font-medium text-xs dark:opacity-90">
              MJP Rohilkhand University - Bareilly(India)
            </p>
            <div className="flex items-center text-xs gap-2 opacity-40 font-medium dark:opacity-90">
              <i className="uil uil-calender"></i>
              <span>2018 - 2022</span>
            </div>
          </div>

         
        </div>
      )}

      {toggleQualification === 2 && (
        <div className="relative   max-w-xl w-full mx-auto flex items-center justify-center">
          <div className="w-[2px] bg-gray-300 dark:bg-[#a7a7a7] h-[300px] rounded-lg flex flex-col items-center justify-between relative">
            <div className="w-3 h-3 bg-black/60 dark:bg-[#363636] rounded-full"></div>
            <div className="w-3 h-3 bg-black/60 dark:bg-[#363636] rounded-full"></div>
            <div className=""></div>
          </div>
          <div className="absolute top-0 sm:left-28 left-24 flex flex-col gap-1">
            <p className="font-medium text-sm">Web Development</p>
            <p className="opacity-60 font-medium text-xs dark:opacity-90">
              Crio.do
            </p>
            <div className="flex items-center text-xs gap-2 opacity-40 font-medium dark:opacity-90">
              <i className="uil uil-calender"></i>
              <span>May 2022 - Dec 2022</span>
            </div>
          </div>

          <div className="absolute top-[9rem] sm:right-[6.5rem] right-20 flex flex-col gap-1">
            <p className="font-medium text-sm">Frontend Development</p>
            <p className="opacity-60 font-medium text-xs dark:opacity-90">
              Eveez
            </p>
            <div className="flex items-center text-xs gap-2 opacity-40 font-medium dark:opacity-90">
              <i className="uil uil-calender"></i>
              <span>May 2023 - Oct 2023</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Qualification;
