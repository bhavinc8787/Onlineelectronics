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
        <ul className="list-disc pl-5 mb-4">
          {cartItems.map(item => (
            <li key={item.id} className="mb-2">
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <Link to="/payment" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Proceed to Payment
        </Link>
      )}
    </div>
  );
};

export default Cart;
