import React from "react";

// ✅ Recommended: move images to 'src/assets' and import from there
import java from "../../public/java.png";
import mongodb from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import node from "../../public/node.png";
import aradhya from "../../public/Aradhya.jpg";
import gym from "../../public/gym.jpg";
import doctor from "../../public/doctor.jpg";
import libraru from "../../public/libraru.jpg";
import epass from "../../public/epass.jpg";
import crm from "../../public/crmcostomer.jpg";

function Protfolio() {
  const technologies = [
    { id: 1, logo: mongodb, name: "MongoDB" },
    { id: 2, logo: express, name: "Express.js" },
    { id: 3, logo: reactjs, name: "React.js" },
    { id: 4, logo: node, name: "Node.js" },
    { id: 5, logo: java, name: "Java" },
  ];

  const projects = [
    {
      id: 1,
      name: "Aradhya Technologies",
      logo: aradhya,
      description: `I created my company's website using the MERN stack, featuring an admin panel for managing content. The admin panel allows seamless blog uploads and includes a certificate verification system to validate issued certificates. This project highlights my expertise in building dynamic and functional web applications with robust admin capabilities.`,
      github: "",
      demo: "https://aradhya-tech-solutions-fpix.vercel.app/",
    },
    {
      id: 2,
      name: "Gym Management",
      logo: gym,
      description: `The Gym Management System is a web-based application designed to streamline and automate daily operations of a fitness center or gym. This system allows administrators to manage memberships, trainers, attendance, workout schedules, payments, and feedback in a centralized and efficient way.
      The system is built using MERN Stack (MongoDB, Express.js, React.js, Node.js) with secure login and role-based access for Admin, Trainer, and Members.`,
      github: "https://github.com/ankitjiyadav/Gym-managements",
      demo: "https://ankitgymstore.netlify.app/",
    },
    {
      id: 3,
      name: "Doctor Appointment System",
      logo: doctor,
      description: `A MERN stack app enabling patients to book appointments, doctors to manage slots, and admins to monitor activity through role-based dashboards.
      which allows patients to easily book appointments with doctors based on availability
      Role-based Access: Separate dashboards for patients, doctors, and admin.
      Appointment Scheduling: Patients can view available time slots and book appointments accordingly.`,
      github: "https://github.com/ankitjiyadav/Doctor-Appoinments-system",
      demo: "https://ankitdoctorsoft.netlify.app/",
    },
    {
      id: 4,
      name: "Digital Library Management",
      logo: libraru,
      description: `I developed a Digital Library Management System using the MERN Stack (MongoDB, Express.js, React.js, Node.js) with a focus on modern UI, efficient data management, and role-based access.
              This system allows educational institutes to manage all library-related activities digitally. It includes the following features:
              Book Management: Add, update, delete, and search books with ISBN, category, and author filters.
             👨‍🎓 Student Management: Maintain records of students, their borrow history, and dues.
             🪑 Seat Booking System: Real-time seat reservation and shift-wise booking for students.
             📆 Shift & Timing Management: Admin can define different library shifts and seat timings.`,
      github: "https://github.com/ankitjiyadav/Digital-Library",
      demo: "https://ankitlibrary.netlify.app/",
    },
    {
      id: 5,
      name: "Digital Pass Management",
      logo: epass,
      description: `I developed a high-performance digital pass management system for a two-day event at Rudraksha Convention Centre, Varanasi, attended by 3000+ VIPs, dignitaries, and global leaders. The system featured online and offline pass issuance, seamless entry verification, and WhatsApp integration for smooth access. This project showcases my ability to create scalable and secure digital solutions for large-scale events, addressing challenges like VIP data security and crowd management.`,
      github: "https://github.com/ankitjiyadav/Incityinfo",
      demo: "https://mahasamagam.org/",
    },
    {
      id: 6,
      name: "CRM - Customer Relationship Management",
      logo: crm,
      description: `A full-featured CRM app with lead tracking, customer profiling, and automated status updates, built with the MERN stack.The Customer Relationship Management (CRM) system is a comprehensive web application developed to manage customer interactions, streamline business processes, and improve productivity. This system is designed to help businesses maintain long-term relationships with their clients by tracking leads, managing communication, and organizing customer data in a structured and efficient manner.`,
      github: "https://github.com/ankitjiyadav/Incityinfo",
      demo: "https://ankityadavcrm.netlify.app/",
    },
  ];

  return (
    <div className="bg-[#0a0a0f] text-white min-h-screen w-full px-4 md:px-20 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-purple-500">My Recent Works</h1>
        <p className="text-gray-400 mt-2 text-lg">Showcasing technologies and real-world applications</p>
      </div>

      {/* Technologies */}
      <div className="mb-24">
        <h2 className="text-2xl font-semibold mb-8 text-green-400 text-center">Technologies I Work With</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center">
          {technologies.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center p-4 bg-[#1c1c2b] rounded-xl shadow-lg hover:shadow-green-500 transition hover:scale-105"
            >
              <img
                src={logo}
                alt={name}
                className="w-15 h-15 object-contain mb-2 rounded-full border border-purple-400 p-2 mt-6"
              />
              <span className="text-md font-medium text-gray-300">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">My Projects</h2>
        <p className="text-gray-500">Click to explore the GitHub repo or live demo</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#1a1a2c] rounded-xl shadow-md hover:shadow-purple-700 overflow-hidden transition duration-300 "
          >
            <img
              src={project.logo}
              alt={project.name}
              className="w-full h-44 object-cover mt-7 ml-5 "
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex gap-4 mt-4 items-center">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-md text-white text-sm font-medium"
                  >
                    💻 GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white text-sm font-medium"
                  >
                    🚀 Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Protfolio;
