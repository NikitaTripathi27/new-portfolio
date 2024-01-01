import ScrollDown from "./ScrollDown";

/* eslint-disable @next/next/no-img-element */
const Banner = () => {
  return (
    <div className="container relative ">
      {/* Socail */}
      <div className="flex flex-col gap-2 absolute top-14">
        <a
          href="https://github.com/NikitaTripathi27"
          target="_blank"
          className="text-2xl cursor-pointer text-gray-700 dark:text-[#A7A7A7]"
        >
          <i className="uil uil-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/nikita44/"
          target="_blank"
          className="text-2xl cursor-pointer text-gray-700 dark:text-[#A7A7A7]"
        >
          <i className="uil uil-linkedin"></i>
        </a>
        <a
          href="#"
          target="_blank"
          className="text-2xl cursor-pointer text-gray-700 dark:text-[#A7A7A7]"
        >
          <i className="uil uil-globe"></i>
        </a>
      </div>

      <div className="flex gap-6 md:items-start items-center   md:flex-row flex-col-reverse">
        {/* Description */}
        <div className="flex flex-col ml-12 md:w-1/2 w-full">
          <p className="text-base font-medium">Hello,</p>
          <p className=" text-xl mt-2 font-semibold text-gray-700 dark:text-[#A7A7A7]">
            I&#39;m <span>Nikita Tripathi</span>
          </p>
          <p className="mt-2 text-4xl font-bold">
            {/* <span className="mr-2">I&#39;m</span> */}
            <span className="bg-gradient-to-r from-[#13b1f5]  to-[#e70faa] inline-block text-transparent bg-clip-text">
             A Software Developer
            </span>
          </p>

          <p className="my-4 tracking-wider text-sm font-sans text-gray-600 dark:text-[#A7A7A7]">
          Highly motivated Software Developer with 1+ experience with a passion for creative problem-solving and collaboration.
Proven ability to quickly learn new technologies and use innovative approaches to develop effective solutions. Seeking a
challenging role in Software Development to apply my knowledge and skills in a team-oriented environment
          </p>

          <div>
            <button className="button !py-4 bg-black/90 dark:bg-[#363636] text-white dark:text-[#CCCCCC]">
              <span className="mr-2">Say Hello</span>
              <i className="uil uil-telegram-alt"></i>
            </button>
          </div>

          <div className="my-20">
            <ScrollDown id="#about" />
          </div>
        </div>

        {/* Image */}

        <div className="md:w-1/2 w-full md:block flex items-center justify-center">
          <div className="banner_img md:ml-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
