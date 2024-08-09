import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">My Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          <div className="bg-white border rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-4">Cart Details</h2>
            <ul className="list-disc pl-5 mb-4">
              {cartItems.map(item => (
                <li key={item.id} className="mb-2 flex items-center justify-between">
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-4">
              <span className="font-semibold">Total:</span>
              <span className="text-xl font-bold">
                ₹{cartItems.reduce((total, item) => total + item.price, 0)}
              </span>
            </div>
          </div>
          <Link to="/payment" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Proceed to Payment
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
