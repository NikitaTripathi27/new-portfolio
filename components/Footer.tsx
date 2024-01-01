import React from "react";

const Footer = () => {
  return (
    <footer className="pb-16 pt-12 flex items-center justify-center shadow  flex-col bg-white border-t border-t-gray-200  dark:bg-[#191919] dark:border-t-[#333]">
      <h1 className="text-3xl font-semibold">Nikita Tripathi</h1>

      <div className="flex items-center gap-6 my-4 opacity-70 dark:opacity-100">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
      </div>

      <div className="flex items-center gap-6 mt-4">
        <a
          href="#"
          target="_blank"
          className="flex items-center justify-center cursor-pointer text-xl w-9 h-9 rounded-lg bg-black/90 dark:bg-[#363636] text-white dark:text-[#CCCCCC]"
        >
          <i className="uil uil-facebook-f"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/nikita44/"
          target="_blank"
          className="flex items-center justify-center cursor-pointer text-xl w-9 h-9 rounded-lg bg-black/90 dark:bg-[#363636] text-white dark:text-[#CCCCCC]"
        >
          <i className="uil uil-linkedin"></i>
        </a>

        <a
          href="https://github.com/NikitaTripathi27"
          target="_blank"
          className="flex items-center justify-center cursor-pointer text-xl w-9 h-9 rounded-lg bg-black/90 dark:bg-[#363636] text-white dark:text-[#CCCCCC]"
        >
          <i className="uil uil-github"></i>
        </a>
      </div>

      <p className="mt-20 text-sm opacity-60 dark:opacity-70">© Coder {new Date().getFullYear()}. All rights reserved</p>
    </footer>
  );
};

export default Footer;
