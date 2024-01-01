import React from "react";
import Title from "./Title";

const Contact = () => {
  const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className="container w-full">
      <Title title="Contact Me" subTitle="Get in touch" />

      <div className="flex gap-8 sm:flex-row flex-col  justify-center  w-full my-10">
        <div>
          <h4 className="text-center text-lg font-medium">Talk to me</h4>

          <div className="flex flex-col gap-4 my-4">
            <div className="flex flex-col items-center bg-white shadow border border-gray-100 dark:border-0 dark:bg-[#363636] p-4 rounded-lg">
              <i className="uil uil-envelope text-2xl"></i>
              <span className="text-xs opacity-80 font-medium dark:opacity-80">
                Email
              </span>
              <span className="text-xs opacity-50 mt-1 dark:opacity-80">
                nikita2399020@gmail.com
              </span>

              <p className="text-sm mt-2 opacity-40 dark:opacity-80">
                Write me
                <i className="uil uil-arrow-right ml-2"></i>
              </p>
            </div>

            <div className="flex flex-col items-center bg-white shadow border border-gray-100 dark:border-0 dark:bg-[#363636] p-4 rounded-lg">
              <i className="uil uil-whatsapp text-2xl"></i>
              <span className="text-xs opacity-80 font-medium dark:opacity-80">
                Whatsapp
              </span>
              <span className="text-xs opacity-50 mt-1 dark:opacity-80">
                +91 731-000-4469
              </span>

              <p className="text-sm mt-2 opacity-40 dark:opacity-80">
                Write me
                <i className="uil uil-arrow-right ml-2"></i>
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <form
            onClick={handleSendMessage}
            className="md:w-[500px] w-full p-4 flex flex-col gap-6"
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              className="border px-4 border-gray-300 h-12 w-full rounded-lg relative placeholder:text-[#a7a7a7] dark:border-[#a7a7a7] outline-none dark:text-white"
            />
            <input
              type="email"
              placeholder="Mail"
              name="mail"
              id="mail"
              className="border px-4 border-gray-300 h-12 w-full rounded-lg relative placeholder:text-[#a7a7a7] dark:border-[#a7a7a7] outline-none dark:text-white"
            />

            <textarea
              placeholder="Name"
              name="name"
              id="name"
              rows={5}
              className="border h-full px-4 py-2 border-gray-300 w-full rounded-lg relative placeholder:text-[#a7a7a7] dark:border-[#a7a7a7] resize-none outline-none dark:text-white"
            />

            <div>
              <button
                type="submit"
                className="button !py-4 bg-black/90 dark:bg-[#363636] text-white dark:text-[#CCCCCC]"
              >
                <span className="mr-2">Send Message</span>
                <i className="uil uil-telegram-alt text-xl"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
