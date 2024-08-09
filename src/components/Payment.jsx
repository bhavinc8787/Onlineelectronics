import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const cart = useSelector(state => state.cart);
  const navigate = useNavigate();

  const handlePayment = (item) => {
    setTimeout(() => {
      alert(`Payment successful for ${item.name}!\nPrice: ₹${item.price}`);
      // Optionally, you can also dispatch an action to remove the item from the cart here
    }, 1000);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Payment Page</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border p-4 rounded-lg shadow-md">
            <div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">Price: ₹{item.price}</p>
            </div>
            <button 
              onClick={() => handlePayment(item)} 
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Pay
            </button>
          </div>
        ))}
      </div>
      <button 
        onClick={() => navigate('/')} 
        className="mt-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Payment;
