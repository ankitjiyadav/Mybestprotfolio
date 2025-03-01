import React, { useState } from "react";
import { Link } from "react-router-dom";
import pic from "../../public/photo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const resumeUrl = "/Ankityadav.pdf"; // अपने रिज़्यूमे का सही path दें

  const navItems = [
    { id: 1, text: "Home", href: "/" },
    { id: 2, text: "About", href: "/about" },
    { id: 3, text: "Portfolio", href: "/portfolio" },
    { id: 4, text: "Experience", href: "/experience" },
    { id: 5, text: "Contact", href: "/contact" },
    { id: 6, text: "Resume", href: resumeUrl, external: true }, // Resume को अलग से सेट किया
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex justify-between items-center h-16">
        <div className="flex space-x-2">
          <img src={pic} className="h-12 w-12 rounded-full" alt="profile" />
          <h1 className="font-semibold text-xl cursor-pointer">
            Ankit Yad <span className="text-green-500 text-3xl">av</span>
            <p className="text-sm">Web Developer</p>
          </h1>
        </div>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map(({ id, text, href, external }) => (
            <li key={id} className="hover:scale-105 duration-200 cursor-pointer">
              {external ? (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {text}
                </a>
              ) : (
                <Link to={href}>{text}</Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
          {menu ? <IoMdClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {/* Mobile Navbar */}
      {menu && (
        <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl bg-white w-full">
          {navItems.map(({ id, text, href, external }) => (
            <li key={id} className="hover:scale-105 duration-200 font-semibold cursor-pointer">
              {external ? (
                <a href={href} target="_blank" rel="noopener noreferrer" onClick={() => setMenu(false)}>
                  {text}
                </a>
              ) : (
                <Link to={href} onClick={() => setMenu(false)}>
                  {text}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
