import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/index/Logo REV 06.svg';

const Navbar = () => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const dropdownRef = useRef(null);

  const toggleServicesDropdown = () => {
    setShowServicesDropdown(!showServicesDropdown);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowServicesDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div>
        <nav className="z-50 top-0 left-0 right-0 transition-all duration-700 fixed bg-black bg-opacity-60 backdrop-blur-md">
          <div className="container px-4 mx-auto flex justify-between h-16 items-center relative">
            <div className="flex items-center">
              <div className="text-2xl text-theme-default">
                <Link to="/">
                  <img src={Logo} className='w-28' alt="Logo" />
                </Link>
              </div>

              {/* Mobile screen (hidden on large screens) */}
              <div className="lg:hidden flex items-center justify-end ml-52">
  <button onClick={toggleSidebar} className="text-white p-2 focus:outline-none">
    ☰
  </button>
</div>

              <div className="hidden lg:block ms-11">
                <ul className="flex gap-9 text-s text-white">
                  <li className={`relative group ${showServicesDropdown ? 'border-b-2 border-theme-default' : ''}`}>
                    <span className="cursor-pointer" onClick={toggleServicesDropdown}>Services &#9662;</span>
                    {showServicesDropdown && (
                      <div
                        ref={dropdownRef}
                        className="absolute top-full left-0 right-0 bg-black bg-opacity-90 backdrop-blur-md z-40 w-40"
                      >
                        <div className="container mx-auto flex flex-col p-4">
                          <Link to="/services/design-and-engineering" className="text-white hover:text-theme-default py-2">
                            Design and Engineering
                          </Link>
                          <Link to="/services/quality-assurance" className="text-white hover:text-theme-default py-2">
                            Quality Assurance
                          </Link>
                          <Link to="/services/ims" className="text-white hover:text-theme-default py-2">
                            Integrated Management System
                          </Link>
                          <Link to="/services/project-management" className="text-white hover:text-theme-default py-2">
                            Project Management
                          </Link>
                          <Link to="/services/esg" className="text-white hover:text-theme-default py-2">
                            Environmental, Social, and Governance (ESG)
                          </Link>
                        </div>
                      </div>
                    )}
                  </li>
                  <li>
                    <a href="#" className="hover:text-theme-default">About Us</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-theme-default">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Sidebar for smaller screens */}
      {showSidebar && (
  <div className="lg:hidden fixed top-16 right-0 h-full w-48 bg-black bg-opacity-90 backdrop-blur-md z-40">
  <div className="flex flex-col h-full">
    
      <ul className="text-white p-4">
        <li className='mb-3'>
          <Link to="/services/design-and-engineering" className="text-white hover:text-theme-default py-2 ">
            Design and Engineering
          </Link>
        </li>
        <li className='mb-3'>
          <Link to="/services/quality-assurance" className="text-white hover:text-theme-default py-2">
            Quality Assurance
          </Link>
        </li>
        <li className='mb-3'>
          <Link to="/services/ims" className="text-white hover:text-theme-default py-2">
            Integrated Management System
          </Link>
        </li>
        <li className='mb-3'>
          <Link to="/services/project-management" className="text-white hover:text-theme-default py-2">
            Project Management
          </Link>
        </li>
        <li className='mb-3'>
          <Link to="/services/esg" className="text-white hover:text-theme-default py-2">
            Environmental, Social, and Governance (ESG)
          </Link>
        </li>
        <li className='mb-3'>
          <a href="#" className="hover:text-theme-default">About Us</a>
        </li>
        <li className='mb-3'>
          <a href="#" className="hover:text-theme-default">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
)}
    </>
  );
};

export default Navbar;
