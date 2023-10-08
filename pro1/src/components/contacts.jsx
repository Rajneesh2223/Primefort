import React, { useState } from 'react';


function Navbar() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  const closeMobileSidebar = () => {
    setMobileSidebarOpen(false);
  };

  return (
    <nav className="bg-blue-500 p-4 backdrop-blur bg-indigo-900 bg-gradient-to-r ">
      <div className="container mx-auto flex justify-between items-center h-[70px]">
        {/* Logo on the left */}
        <div className="text-white text-xl font-semibold ml-[80px]">
          <a href="/">Your Logo</a>
        </div>

        {/* Hamburger icon (visible on smaller screens) */}
        <div className="sm:hidden">
          <button
            onClick={toggleMobileSidebar}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            &#9776; {/* Hamburger icon */}
          </button>
        </div>

        {/* Middle elements (visible on large screens) */}
        <ul className="hidden sm:flex space-x-8 justify-center">
        <li>
              <a href="/service" className="text-white hover:text-gray-300">
                Service
              </a>
            </li>
            <li>
              <a href="/service" className=" text-white hover:text-gray-300">
                Managed Security Services
              </a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/initiative" className="text-white hover:text-gray-300">
                Initiative
              </a>
            </li>
            <li>
              <a href="/blog" className="text-white hover:text-gray-300">
                Blog
              </a>
            </li>
        </ul>

        {/* Mobile Sidebar (visible on mobile when toggled) */}
        <div
          className={`fixed top-0 right-0 h-screen w-64 bg-indigo-900 transform ${
            mobileSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out sm:hidden`}
        >
          <ul className="mt-8 space-y-4 text-white">
            <li>
              <a href="/service" className=" text-white hover:text-gray-300">
                Service
              </a>
            </li>
            <li>
              <a href="/service" className="hover:text-gray-300">
                Managed Security Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/initiative" className="hover:text-gray-300">
                Initiative
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-gray-300">
                Blog
              </a>
            </li>
            <div className="flex space-x-10">
              <a
                href="/contact"
                className="text-white hover:text-gray-300 border-solid border-2 border-l-4 border-indigo-600 px-4 py-1"
              >
                GET IN TOUCH
              </a>
              <button
                onClick={closeMobileSidebar}
                className="text-white hover:text-gray-300 focus:outline-none flex-end"
              >
                &#10006; {/* Close icon */}
              </button>
            </div>
          </ul>
        </div>

        {/* Contact Us on the right */}
        <div className="hidden sm:block">
          <a
            href="/contact"
            className="text-white mr-[50px] text-[20px] hover:text-gray-300 border-solid border-2 border-l-4 border-indigo-600 px-4 py-1"
          >
            Contact Us
          </a>
        </div>
      </div>
      
    </nav>
    
     
  );
}

export default Navbar;
