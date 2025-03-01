import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-10 bg-gray-900 text-white">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
            
            {/* Left - Social Media */}
            <div className="flex flex-col space-y-4 items-center md:items-start">
              <h2 className="text-lg font-semibold">Follow Me</h2>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
                  <FaFacebook size={30} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
                  <FaTwitter size={30} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
                  <FaInstagram size={30} />
                </a>
                <a href="https://www.linkedin.com/in/ankit-yadav-527978260/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition duration-300">
                  <FaLinkedin size={30} />
                </a>
              </div>
            </div>

            {/* Center - Navigation Links */}
            <div className="text-center">
              <h2 className="text-lg font-semibold">Quick Links</h2>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-gray-400 transition duration-300">Home</Link></li>
                <li><Link to="/about" className="hover:text-gray-400 transition duration-300">About</Link></li>
                <li><a href="/resume.pdf" download="Ankit_Yadav_Resume.pdf" className="hover:text-gray-400 transition duration-300">Resume</a></li>
                <li><Link to="/services" className="hover:text-gray-400 transition duration-300">Services</Link></li>
              </ul>
            </div>

            {/* Right - Contact Info */}
            <div className="flex flex-col space-y-4 items-center md:items-end">
              <h2 className="text-lg font-semibold">Contact Me</h2>
              <div className="flex items-center space-x-2">
                <FaPhone />
                <p className="text-gray-400">+91 7571035830</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope />
                <p className="text-gray-400">ankityadavmca2299@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Footer Bottom Text */}
          <div className="text-center mt-8">
            <p className="text-sm opacity-75">&copy; 2024 Ankit Yadav. All rights reserved.</p>
            <p className="text-sm font-semibold text-red-400">Supportive Partner ❤️❤️ Ankit Yadav ❤️❤️</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
