import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleBuyNow = () => {
    dispatch(addToCart(product));
    navigate('/payment');
  };

  return (
    <div className="flex-shrink-0 border rounded-lg shadow-lg p-4 w-64">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">Company: {product.company}</p>
      <p className="text-gray-600 mb-4">Price: ₹{product.price}</p>
      <div className="flex justify-between">
        <button 
          onClick={handleAddToCart}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
        <button 
          onClick={handleBuyNow}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
