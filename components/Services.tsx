import React, { useCallback, useState } from "react";
import Title from "./Title";

const Services = () => {
  const [toggleService, setToggleService] = useState(0);

  const handleToggleTervice = useCallback(
    (id: number) => setToggleService(id),
    []
  );
  return (
    <div className="container">
      <Title title="Services" subTitle="What I offer" />

      <div className="grid grid-cols-2 max-w-5xl mx-auto gap-6 mt-8">
        <div className="bg-white dark:bg-[#363636] shadow border border-gray-200 dark:border-0 w-full flex flex-col  h-[200px] justify-center px-6 rounded">
          <i className="bx bx-expand-horizontal text-3xl"></i>
          <p className="text-lg font-medium mt-3">
            Frontend <br /> Development
          </p>
          <p
            onClick={() => handleToggleTervice(1)}
            className="text-sm hover:underline transition cursor-pointer mt-3 opacity-70 dark:opacity-100"
          >
            View More
            <i className="bx bx-right-arrow-alt ml-[2px]"></i>
          </p>
        </div>

        <div className="bg-white dark:bg-[#363636] shadow border border-gray-200 dark:border-0 w-full flex flex-col  h-[200px] justify-center px-6 rounded">
          <i className="bx bx-server text-3xl"></i>
          <p className="text-lg font-medium mt-3">
            Backend <br /> Development
          </p>
          <p
            onClick={() => handleToggleTervice(2)}
            className="text-sm hover:underline transition cursor-pointer mt-3 opacity-70 dark:opacity-100"
          >
            View More
            <i className="bx bx-right-arrow-alt ml-[2px]"></i>
          </p>
        </div>

   
      </div>

      {toggleService === 1 && (
        <FrontendService setToggleService={setToggleService} />
      )}
      {toggleService === 2 && (
        <BackendService setToggleService={setToggleService} />
      )}
      
    </div>
  );
};

export default Services;

const FrontendService = ({
  setToggleService,
}: {
  setToggleService: (id: number) => void;
}) => {
  return (
    <div className="fixed flex items-center justify-center inset-0 z-[1000] bg-black/20">
      <div className="max-w-xl w-full bg-white dark:bg-[#363636] p-4 rounded-md relative">
        <button
          onClick={() => setToggleService(0)}
          className="absolute right-4 text-2xl opacity-70 dark:opacity-100"
        >
          <i className="uil uil-times"></i>
        </button>
        <div className="pt-16">
          <p className="text-center font-semibold text-xl opacity-70 dark:opacity-100">
            Frontend Development
          </p>

          <p className="text-center text-sm opacity-60 dark:opacity-90  tracking-wider w-[80%] mx-auto my-3">
            Service with 1 year of experience providing quality work and
            scalable user interface
          </p>

          <div className="my-6 mt-10 px-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 opacity-70 dark:opacity-90">
              <i className="bx bx-check-circle text-lg"></i>
              <span className="text-sm"> User interface development</span>
            </div>
            <div className="flex items-center gap-2 opacity-70 dark:opacity-90">
              <i className="bx bx-check-circle text-lg"></i>
              <span className="text-sm">Web page development</span>
            </div>
            <div className="flex items-center gap-2 opacity-70 dark:opacity-90">
              <i className="bx bx-check-circle text-lg"></i>
              <span className="text-sm">
                create scalable, robust and responsive design
              </span>
            </div>
            <div className="flex items-center gap-2 opacity-70 dark:opacity-90">
              <i className="bx bx-check-circle text-lg"></i>
              <span className="text-sm">position you company brand</span>
            </div>
            <div className="flex items-center gap-2 opacity-70 dark:opacity-90">
              <i className="bx bx-check-circle text-lg"></i>
              <span className="text-sm">
                Design and markups of products for companies
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BackendService = ({
  setToggleService,
}: {
  setToggleService: (id: number) => void;
}) => {
  return (
    <div className="fixed flex items-center justify-center inset-0 z-[1000] bg-black/20">
      <div className="max-w-xl w-full bg-white dark:bg-[#363636] p-4 rounded relative">
        <button
          onClick={() => setToggleService(0)}
          className="absolute right-4 text-2xl opacity-70 dark:opacity-100"
        >
          <i className="uil uil-times"></i>
        </button>
        <div className="pt-16">
          <p className="text-center font-semibold text-xl opacity-70 dark:opacity-100">
            Backend Development
          </p>

          <p className="text-center text-sm opacity-60 dark:opacity-90  tracking-wider w-[80%] mx-auto my-3">
            Service with 1 year opf experience providing quality work and
            scalable backend service
          </p>

          <div className="my-6 mt-10 px-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 opacity-70 dark:opacity-90">
              <i className="bx bx-check-circle text-lg"></i>
              <span className="text-sm">API Development</span>
            </div>
            <div className="flex items-center gap-2 opacity-70 dark:opacity-90">
              <i className="bx bx-check-circle text-lg"></i>
              <span className="text-sm">Scalable database managemnt</span>
            </div>
            <div className="flex items-center gap-2 opacity-70 dark:opacity-90">
              <i className="bx bx-check-circle text-lg"></i>
              <span className="text-sm"> scalable web services.</span>
            </div>
            <div className="flex items-center gap-2 opacity-70 dark:opacity-90">
              <i className="bx bx-check-circle text-lg"></i>
              <span className="text-sm">
                Design the serverless architecture
              </span>
            </div>
            <div className="flex items-center gap-2 opacity-70 dark:opacity-90">
              <i className="bx bx-check-circle text-lg"></i>
              <span className="text-sm">
                Best rest management for the products
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

