import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import {
  FaLinkedin,
  FaYoutube,
  FaTelegram,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";
import pic from "../../public/aaa.jpeg";

function Home() {
  const projects = [
  {
    title: "CRM - Customer Relationship Management",
    description: "A role-based CRM system with Admin and Telecaller modules, lead management, call status tracking, and dashboard analytics.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind", "JWT"],
    link: "https://ankityadavcrm.netlify.app/"
  },
  {
    title: "Digital Library Management System",
    description: "A full-featured digital library system with seat management, fees, shift handling, student and expense management.",
    tech: ["MERN Stack", "SASS", "MongoDB", "Express"],
    link: "https://ankitlibrary.netlify.app/"
  },
  {
    title: "Doctor Appointment System",
    description: "A system for patients to book appointments with doctors, including slot management, patient records, and email notifications.",
    tech: ["React", "Node", "MongoDB","Express"],
    link: "https://ankitdoctorsoft.netlify.app/"
  },
  {
    title: "Gym Management System",
    description: "Manage members, trainers, schedules, attendance, and payments in an all-in-one gym admin panel.",
    tech: ["React","Express","Node", "MongoDB", "Tailwind CSS"],
    link: "https://ankitgymstore.netlify.app/"
  }
];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black  text-white py-16 px-4 md:px-20">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="md:w-1/2 order-2 md:order-1 mt-10 md:mt-0 space-y-5">
          <h2 className="text-xl font-medium text-gray-300">
            Welcome to My Feed
          </h2>

          <div className="flex items-center text-2xl md:text-4xl font-semibold space-x-2">
            <h1>Hello, I'm a</h1>
            <ReactTyped
              className="text-red-500 font-bold"
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>

          <p className="text-md text-gray-300 text-justify">
            I am a passionate full-stack developer experienced in building
            modern, scalable web applications. Always curious to learn new
            things and solve real-world problems using technology.
          </p>

          {/* Social Links */}
          <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
            <div>
              <h3 className="font-semibold mb-2">Available on</h3>
              <div className="flex space-x-4 text-white text-2xl">
                <a href="https://www.facebook.com/" target="_blank">
                  <FaSquareFacebook className="hover:text-blue-600 transition" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ankit-yadav-527978260/"
                  target="_blank"
                >
                  <FaLinkedin className="hover:text-blue-400 transition" />
                </a>
                <a href="https://www.youtube.com/@apnaclassMCA" target="_blank">
                  <FaYoutube className="hover:text-red-600 transition" />
                </a>
                <a href="#" target="_blank">
                  <FaTelegram className="hover:text-blue-400 transition" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Currently Working On</h3>
              <div className="flex space-x-4 text-3xl">
                <SiMongodb className="hover:scale-110 duration-200 text-green-500" />
                <SiExpress className="hover:scale-110 duration-200 text-gray-400" />
                <FaReact className="hover:scale-110 duration-200 text-cyan-400" />
                <FaNodeJs className="hover:scale-110 duration-200 text-green-600" />
              </div>
            </div>
          </div>

          {/* Resume Button */}
          <div className="mt-8">
            <a href="/resume.pdf" download="Ankit-yadav-resume.pdf">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300">
                Download Resume
              </button>
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
          <img
            src={pic}
            alt="Profile"
            className="rounded-full w-60 h-60 md:w-[450px] md:h-[450px] object-cover shadow-lg border-4 border-gray-700"
          />
        </div>
      </div>
      {/* Let me introduce */}
      <div>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col justify-center items-center px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/stars.svg')] bg-cover opacity-10" />

          <h1 className="text-4xl md:text-5xl font-bold mb-8 z-10">
            <span className=" px-2">
              LET ME <span className="italic text-purple-400">INTRODUCE</span>{" "}
              MYSELF
            </span>
          </h1>

          <div className="max-w-4xl text-center text-lg space-y-6 z-10">
            <p>
              I fell in love with programming and have embarked on a journey of
              constant learning and growth. 👨‍💻
            </p>
            <p>
              I am fluent in classics like{" "}
              <span className="text-purple-400 italic">Javascript</span>,{" "}
              <span className="text-purple-400 italic">Java</span>
            </p>
            <p>
              My field of interest's are building new{" "}
              <span className="italic text-purple-400">
                Web Technologies and Products
              </span>{" "}
              and also in areas related to{" "}
              <span className="italic text-purple-400">Cloud Computing</span>.
            </p>
            <p>
              Whenever possible, I also apply my passion for developing products
              with <span className="text-purple-400">Node.js</span> and{" "}
              <span className="italic text-purple-400">
                Modern Javascript Library and Frameworks
              </span>{" "}
              like <span className="text-purple-400 italic">React.js</span> and{" "}
              <span className="text-purple-400 italic">Next.js</span>.
            </p>
          </div>
        </div>
      </div>

              {/*exprince*/}

      <div className="bg-gray-900 text-white py-16 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12 underline text-purple-400 decoration-blue-500">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-10">
          {/* Internship Experience */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">
              Junior Web Developer (Intern)
            </h3>
            <p className="text-blue-400">
              Aradhya Technologies and Skill Development, Varanasi
            </p>
            <p className="text-sm text-gray-400 mb-4">Oct 2024 – Present</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-200">
              <li>
                Developed and maintained components using{" "}
                <strong>MERN stack</strong>.
              </li>
              <li>
                Built RESTful APIs for user authentication and lead management.
              </li>
              <li>
                Worked on Digital Library features like seat, fee, and candidate
                management.
              </li>
              <li>
                Used <strong>SASS</strong> and Tailwind CSS for responsive UI.
              </li>
              <li>
                Collaborated using Git and GitHub with a team of developers.
              </li>
            </ul>
          </div>

          {/* Freelance Project */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">
              Freelance Full-Stack Developer
            </h3>
            <p className="text-blue-400">Remote / Personal Projects</p>
            <p className="text-sm text-gray-400 mb-4">Mar 2024 – Present</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-200">
              <li>
                Created a CRM system with Admin & Telecaller role-based access.
              </li>
              <li>
                Integrated lead tracking, call status, and dashboard analytics.
              </li>
              <li>
                Deployed frontend on <strong>Vercel</strong> and backend on{" "}
                <strong>Render</strong>.
              </li>
              <li>
                Used MongoDB, Express.js, React.js, Node.js with Tailwind for
                UI.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*Project */}
            <div className="bg-gray-900 min-h-screen text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center underline decoration-blue-500 mb-12">My <span className="text-purple-400">Projects</span></h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-blue-500/30 transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-blue-600 text-white text-sm px-2 py-1 rounded">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="text-blue-400 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
}

export default Home;
