import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector(state => state.cart);

  // Calculate the total number of items in the cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="navbar bg-base-200 mt-10 px-5 flex justify-between items-center">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">
          <img 
            src="https://img.freepik.com/free-photo/3d-render-flash-lightning-sale-thunder-bolt-icon_107791-17347.jpg?w=740&t=st=1723459198~exp=1723459798~hmac=2d8f2499f6215bfeca2c3e51efda9e521a2b5b1f431b1f8bca59062ae3366331" 
            alt="ElectroCore Logo" 
            className="h-8 w-8 mr-2" 
          />
          ElectroCore
        </a>
      </div>
      <div className="flex-none">
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
              {totalItems > 0 && (
                <span className="badge badge-sm indicator-item">{totalItems}</span>
              )}
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-40 sm:w-52 shadow"
          >
            <div className="card-body p-2">
              <span className="text-sm sm:text-lg font-bold">{totalItems} Items</span>
              <span className="text-xs sm:text-info">
                Subtotal: ₹{subtotal}
              </span>
              <div className="card-actions">
                <Link 
                  to="/cart" 
                  className="btn btn-primary btn-block text-xs sm:text-base"
                >
                  View cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-none">
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
            <li>
              <Link className="text-white hover:text-gray-200" to="/cart">
                My Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
