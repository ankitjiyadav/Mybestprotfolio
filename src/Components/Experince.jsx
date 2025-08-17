import React from 'react'
import html  from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png"
import mongodb from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import node from "../../public/node.png";
import salesforce from "../../public/salesforce.png";
import java from "../../public/java.png";
import tailwindcss from "../../public/tailwindcss.png";
function Experince() {
    const cardItem =[
        {
            id:1,
            logo:html,
            name:"Html",
        },
        {
            id:2,
            logo:css,
            name:"Css",
        },
                {
            id:2,
            logo:tailwindcss,
            name:"Tailwind CSS",
        },
        {
            id:3,
            logo:javascript,
            name:"Javascript",
        },
        {
            id:4,
            logo:mongodb,
            name:"Mongodb",
        },
        {
            id:5,
            logo:express,
            name:"Express",
        },
        {
            id:6,
            logo:reactjs,
            name:"Reactjs",
        },
        {
            id:7,
            logo:node,
            name:"Node",
        },
         {
            id:8,
            logo:salesforce,
            name:"Salesforce",
        },
        {
            id:9,
            logo:java,
            name:"Java",
        },
    ]
  return (
    <>
     <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 my-15 text-white">
        <div>
          <h1 className="text-3xl font-bold mb-5">Experiance</h1>
          <p className=" ">I have more than 1 year experiance in below technologies.</p>
          <br />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
            {
            cardItem.map (({id, logo, name})=>(
            <div className="flex  flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
              <img src={logo} className="w-[150px]  p-1 rounded-full " alt="" />
              <div>
                <div className="">{name}</div>

              </div>
            </div>
            ))
        }
          </div>
          <section className=" py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-red-700 mb-6 border-b-4 border-blue-500 inline-block">
          Experience
        </h2>

        <div className=" shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-start gap-6 hover:shadow-xl transition-shadow duration-300">
         
          {/* Experience Details */}
          <div >
            <h3 className="text-xl font-semibold text-white mb-2">
              Junior Web Developer
            </h3>
            <p className="text-white font-medium">
              Aradhya Technologies & Skill Development, Varanasi
            </p>
            <p className="text-white text-sm mb-4">July 2024 – Present</p>

            <ul className="list-disc list-inside space-y-2 text-white">
              <li>
                Built and deployed a <b>Digital Library Management System</b>{" "}
                using MERN stack.
              </li>
              <li>
                Implemented <b>Seat & Shift Management, Fees Tracking, Expense Module</b>.
              </li>
              <li>
                Designed responsive UI using <b>React + Tailwind CSS + SASS</b>.
              </li>
              <li>
                Integrated backend APIs with secure authentication and
                role-based access.
              </li>
              <li>
                Collaborated with team for <b>CRM project development</b>.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
        </div>
      </div>
    </>
  )
}

export default Experince