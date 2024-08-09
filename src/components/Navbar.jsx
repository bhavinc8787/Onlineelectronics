import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/react.svg'; // Replace with the path to your logo image

const Navbar = () => (
  <nav className="bg-blue-500 p-4 flex items-center justify-between">
    <div className="flex items-center">
      <img src={Logo} alt="Logo" className="h-10 w-10 mr-4" />
      <ul className="flex space-x-6">
        <li><Link className="text-white hover:text-gray-200" to="/">Home</Link></li>
        <li><Link className="text-white hover:text-gray-200" to="/contact-us">Contact Us</Link></li>
        <li><Link className="text-white hover:text-gray-200" to="/about">About</Link></li>
        <li><Link className="text-white hover:text-gray-200" to="/cart">My Cart</Link></li>
      </ul>
    </div>
    <div>
      <Link className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" to="/login">Login</Link>
    </div>
  </nav>
);

export default Navbar;
