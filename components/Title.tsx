import React from "react";

const Title = ({ title, subTitle }: { title: string; subTitle?: string }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p className="text-4xl font-semibold text-gray-800 dark:text-[#a7a7a7]">{title}</p>
      <p className="text-sm font-semibold opacity-40 mt-2 dark:opacity-60">{subTitle}</p>
    </div>
  );
};

export default Title;
