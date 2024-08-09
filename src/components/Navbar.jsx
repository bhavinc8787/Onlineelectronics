import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/react.svg'; // Replace with the path to your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-500 p-4 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center justify-between w-full md:w-auto">
        <img src={Logo} alt="Logo" className="h-10 w-10 mr-4" />
        <button 
          className="text-white md:hidden flex items-center"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <ul 
        className={`md:flex md:items-center md:space-x-6 absolute md:relative top-16 left-0 w-full md:w-auto bg-blue-500 md:bg-transparent ${isOpen ? 'block' : 'hidden'} md:block`}
      >
        <li><Link className="text-white hover:text-gray-200 block px-4 py-2 md:p-0" to="/">Home</Link></li>
        <li><Link className="text-white hover:text-gray-200 block px-4 py-2 md:p-0" to="/contact-us">Contact Us</Link></li>
        <li><Link className="text-white hover:text-gray-200 block px-4 py-2 md:p-0" to="/about">About</Link></li>
        <li><Link className="text-white hover:text-gray-200 block px-4 py-2 md:p-0" to="/cart">My Cart</Link></li>
      </ul>
      <div className="mt-4 md:mt-0">
        <Link className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
