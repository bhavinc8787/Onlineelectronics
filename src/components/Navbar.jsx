import React from 'react';
import { Link } from 'react-router-dom';
 // Replace with the path to your logo image

const Navbar = () => (

  <div className="navbar bg-base-200 mt-10 mr-5">
  <div className="flex-1">
    <a href="/" className="btn btn-ghost text-xl">
    <img src="https://img.freepik.com/free-photo/3d-render-flash-lightning-sale-thunder-bolt-icon_107791-17347.jpg?w=740&t=st=1723459198~exp=1723459798~hmac=2d8f2499f6215bfeca2c3e51efda9e521a2b5b1f431b1f8bca59062ae3366331" 
     alt="ElectroCore Logo" 
    className="h-8 w-8 mr-2" />
    ElectroCore</a>
  </div>
  <div className="flex-none mr-3">
  <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span className="badge badge-sm indicator-item">8</span>
      </div>
    </div>
    <div
      tabIndex={0}
      className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-40 sm:w-52 shadow"
    >
      <div className="card-body p-2">
        <span className="text-sm sm:text-lg font-bold">8 Items</span>
        <span className="text-xs sm:text-info">Subtotal: $999</span>
        <div className="card-actions">
          <button to="/cart" className="btn btn-primary btn-block text-xs sm:text-base">
            View cart
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="navbar-start">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 sm:w-52 p-2 shadow"
      >
        <li>
          <Link className="text-black hover:text-gray-800" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-black hover:text-gray-800" to="/contact-us">
            Contact Us
          </Link>
        </li>
        <li>
          <Link className="text-black hover:text-gray-800" to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  </div>
</div>
</div>
 
/* <nav className="bg-blue-500 p-4 flex items-center justify-between">
    <div className="flex items-center">
      <img src={Logo} alt="Logo" className="h-10 w-10 mr-4" />
      <ul className="menu menu-horizontal px-1">
        <li><Link className="text-white hover:text-gray-200" to="/">Home</Link></li>
        <li><Link className="text-white hover:text-gray-200" to="/contact-us">Contact Us</Link></li>
        <li><Link className="text-white hover:text-gray-200" to="/about">About</Link></li>
        <li><Link className="text-white hover:text-gray-200" to="/cart">My Cart</Link></li>
      </ul>
    </div>
    <div>
      <Link className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" to="/login">Login</Link>
    </div>
  </nav> */
);

export default Navbar;

