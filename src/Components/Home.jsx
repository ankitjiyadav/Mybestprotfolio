import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin, FaYoutube, FaTelegram, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";
import pic from "../../public/aaa.jpeg";

function Home() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome in My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold "
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, recusandae consequatur. 
              Accusamus sint libero eligendi laborum fugiat repudiandae? 
              Asperiores tempore eos animi dolores corrupti!
            </p>
            <br />

            {/* Social Media Icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5">
                  <li><a href="https://www.facebook.com/" target="_blank"><FaSquareFacebook className="text-2xl cursor-pointer" /></a></li>
                  <li><a href="https://www.linkedin.com/in/ankit-yadav-527978260/" target="_blank"><FaLinkedin className="text-2xl cursor-pointer" /></a></li>
                  <li><a href="https://www.youtube.com/@apnaclassMCA" target="_blank"><FaYoutube className="text-2xl cursor-pointer" /></a></li>
                  <li><a href="" target="_blank"><FaTelegram className="text-2xl cursor-pointer" /></a></li>
                </ul>
              </div>

              <div className="space-y-2">
                <h1 className="font-bold">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img src={pic} className="rounded-full md:w-[450px] md:h-[450px]" alt="Profile" />
          </div>
        </div>

        {/* Download Resume Button - Centered and Below */}
        <div className="">
          <a href="/resume.pdf" download="Ankit_Yadav_Resume.pdf">
            <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
              Download Resume
            </button>
          </a>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
