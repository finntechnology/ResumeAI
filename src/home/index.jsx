import Header from "@/components/custom/Header";
import { AtomIcon, Edit, Share2 } from "lucide-react";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import TextInput from "./../components/TextInput";
import CustomButton from "./../components/CustomButton";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <section className=" z-50">
          <div className="py-8 px-4 mx-auto max-w-screen-xl  bg-white text-center lg:py-16 lg:px-12">
            <a
              href="https://danielebukafinn.netlify.app/"
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">
                New
              </span>{" "}
              <span className="text-sm font-medium">My Portfolio</span>
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Build Your Resume <span className="text-pink-600">With AI</span>{" "}
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Create an Outstanding Resume with Ease Using Our AI-Powered
              Builder
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="/dashboard"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-pink-600 hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get Started
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div
              id="feature"
              className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36"
            >
              <span className="font-semibold text-gray-400 uppercase">
                FEATURED IN
              </span>
              <div className="flex flex-wrap justify-center items-center gap-4 mt-8 text-gray-500 sm:justify-between">
                <a
                  href="https://gomycode.com/ng/"
                  className="mr-5 mb-5 text-4xl font-extrabold lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
                >
                  Gomycode
                </a>
                <a
                  href="https://www.starkwebtechnologies.com/"
                  className="mr-5 mb-5 text-4xl font-extrabold lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
                >
                  Starkweb <br />
                  Techenologies
                </a>
                <a
                  href="#"
                  className="mr-5 mb-5 text-4xl font-extrabold lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
                >
                  Coursemite
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          id="works"
          className="py-8 bg-slate-100 z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
        >
          <h2 className="font-bold text-3xl">How it Works?</h2>
          <h2 className="text-md text-gray-500">
            Start building your resume in just 3 simple steps
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              className="block rounded-xl border bg-white
         border-gray-200 p-8 shadow-xl transition
         hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <AtomIcon className="h-8 w-8" />

              <h2 className="mt-4 text-xl font-bold text-black">
                Write prompt for your resume
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Create a resume with our easy-to-use form builder.
              </p>
            </div>

            <div
              className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <Edit className="h-8 w-8" />

              <h2 className="mt-4 text-xl font-bold text-black">
                Edit Your Resume{" "}
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Edit your resume and save it, in your account.
              </p>
            </div>

            <div className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
              <Share2 className="h-8 w-8" />

              <h2 className="mt-4 text-xl font-bold text-black">
                Share & Start Accepting Responses
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Download or Share your resume with your employer.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/dashboard"
              className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </section>
      </div>

      <footer className="bg-slate-100 mp-20">
        <div className="overflow-x-hidden -mb-0.5">
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              fill: "bg-[#000000]",
              width: "125%",
              height: 112,
              transform: "rotate(180deg)",
            }}
          >
            <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
          </svg>
        </div>

        <div className=" bg-[#000000]">
          <div className="container px-5 py-20 mx-auto ">
            <div className="w-full flex flex-wrap gap-10 justify-between -mb-10 px-7 sm:px-5 -px-4">
              <div>
                <h2 className="font-medium text-white tracking-widest text-md mb-3">
                  Company
                </h2>

                <div className="mb-10 flex flex-col gap-3">
                  <p className="text-gray-300 text-md hover:text-white ">
                    <a href="#">Home</a>
                  </p>
                  <p className="text-gray-300 text-md hover:text-white ">
                    <a href="#feature">Feature In</a>
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-medium text-white tracking-widest text-md mb-3">
                  Policy
                </h2>

                <div className="mb-10 flex flex-col gap-3">
                  <p className="text-gray-300 text-md hover:text-white ">
                    <a href="#works">How It Works</a>
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-medium text-white tracking-widest text-md mb-3">
                  Support
                </h2>

                <div className="mb-10 flex flex-col gap-3">
                  <p className="text-gray-300 text-md hover:text-white ">
                    <a href="/auth/sign-in">Account</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-7 sm:px-5">
            <p className="container px-5 mx-auto text-white mt-2 ">
              Subscribe to our Newsletter
            </p>

            <div className="container mx-auto px-5 pt-6 pb-8 flex flex-wrap items-center justify-between ">
              <div className="w-full md:w-2/4 lg:w-1/3 h-16 flex items-center justify-center md:justify-start gap-4 lg:gap-0">
                <TextInput
                  styles="w-full flex-grow md:w-40 2xl:w-64 bg-gray-100 sm:mr-4 md-2"
                  type="email"
                  placeholder="Email Address"
                />

                <CustomButton
                  title="Subscribe"
                  containerStyles={
                    "block bg-pink-600 text-white px-5 py-2.5 text-md rounded hover:bg-blue-800 focus:potline-none flex-col items-center mt-2 "
                  }
                />
              </div>

              <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto lg:gap-2 gap-10">
                <a
                  href="https://facebook.com"
                  className="text-white text-3xl  hover:scale-125 ease-in-out duration-300"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://x.com"
                  className="ml-3 text-white text-3xl  hover:scale-125 ease-in-out duration-300"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://instagram.com"
                  className="ml-3 text-white text-3xl  hover:scale-125 ease-in-out duration-300"
                >
                  <FiInstagram />
                </a>

                <a
                  href="https://linkedin.com"
                  className="ml-3 text-white text-3xl  hover:scale-125 ease-in-out duration-300"
                >
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </div>
          <hr />
          <div className="bg-[#000000] px-7 sm:px-5">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col ">
              <p className="text-gray-300 font-bold text-md text-center">
                &copy; 2024 Resume<span className="text-pink-600">AI</span>, All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
