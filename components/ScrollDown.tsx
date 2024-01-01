import React from "react";

const ScrollDown = ({ id }: { id: string }) => {
  return (
    <div id={id} className="flex items-center gap-2 cursor-pointer">
      <div className="w-6 rounded-2xl h-9 border flex items-center justify-center border-black/80 dark:border-[#A7A7A7]">
        <div className="animate-bounce w-[2px] h-[10px] rounded-xl bg-black/70 dark:bg-[#A7A7A7]"></div>
      </div>
      <p className="text-sm font-medium text-gray-700 dark:text-[#A7A7A7]">
        Scroll Down
      </p>
      <i className="uil uil-arrow-down text-xl"></i>
    </div>
  );
};

export default ScrollDown;
