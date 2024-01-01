/* eslint-disable @next/next/no-img-element */
import React from "react";
import Title from "./Title";

const About = () => {
  return (
    <div className="container">
      <Title title="About Me" subTitle="My introduction" />

      <div className="flex items-center justify-between md:flex-row  flex-col gap-6 my-14">
        <div className="md:w-1/2 w-full ">
          <img
            src="/images/nikita_about.jpg"
            alt="about"
            className="w-[350px] h-[350px] object-cover mx-auto rounded-xl"
          />
        </div>

        <div className="md:w-1/2 w-full my-auto">
          <div className="grid grid-cols-3 gap-3 w-full">
            <div className="flex flex-col gap-2 items-center bg-white dark:bg-[#363636] dark:border-0 shadow border py-3 px-2 rounded-lg dark:text-[#CCCCCC]">
              <i className="uil uil-award-alt text-xl"></i>
              <span className="font-semibold">Experience</span>
              <span className="text-[12px] font-medium opacity-60 dark:opacity-90">
                1 Year Working
              </span>
            </div>

            <div className="flex flex-col gap-2 items-center bg-white dark:bg-[#363636] dark:border-0 shadow border py-3 px-2 rounded-lg dark:text-[#CCCCCC]">
              <i className="uil uil-bag-alt text-xl"></i>
              <span className="font-semibold">Completed</span>
              <span className="text-[12px] font-medium opacity-60 dark:opacity-90">
                10+
              </span>
            </div>

            <div className="flex flex-col gap-2 items-center bg-white dark:bg-[#363636] dark:border-0 shadow border py-3 px-2 rounded-lg dark:text-[#CCCCCC]">
              <i className="uil uil-headphones text-xl"></i>
              <span className="font-semibold">Support</span>
              <span className="text-[12px] font-medium opacity-60 dark:opacity-90">
                Online 24/7
              </span>
            </div>
          </div>

          <p className="my-10 text-gray-500 dark:text-[#CCCCCC] tracking-tight">
            I am a skilled Full Stack MERN Developer proficient in Next.js and
            React Native. Leveraging MongoDB, Express.js, React.js, and Node.js,
            I craft dynamic web applications and cross-platform mobile
            solutions. My expertise lies in creating scalable, user-friendly,
            and modern software experiences. Explore my portfolio for innovative
            MERN and React-based projects.
          </p>

          <div>
            <a
              href="https://drive.google.com/file/d/1VMjD9I4EkWNrdSpC9Zj4i9_OQt5GwBK1/view?usp=sharing"
              target="_blank"
              className="button !py-4 bg-black/90 dark:bg-[#363636] text-white dark:text-[#CCCCCC]"
            >
              <span className="mr-2">Download CV</span>
              <i className="uil uil-file-alt text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
