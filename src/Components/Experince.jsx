import React from 'react'
import html  from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png"
import mongodb from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import node from "../../public/node.png";

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
    ]
  return (
    <>
     <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 my-15">
        <div>
          <h1 className="text-3xl font-bold mb-5">Experiance</h1>
          <p className=" ">I have more than 1 year experiance in below technologies.</p>
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
        </div>
      </div>
    </>
  )
}

export default Experince