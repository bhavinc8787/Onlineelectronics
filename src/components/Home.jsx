import React, { useEffect, useState } from 'react';
import ProductSection from './ProductSection';
import Banner from './Banner'; // Import the Banner component
import Footer from './Footer'; // Import the Footer component
import productsData from '../data/products.json';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="p-8">
      <Banner /> {/* Add Banner here */}
      <h1 className="text-3xl font-bold mb-6">Welcome to the Electronics Store</h1>
      <ProductSection category="Refrigerator" products={products} />
      <ProductSection category="TV" products={products} />
      <ProductSection category="Washing Machine" products={products} />
    
    </div>
  );
};

export default Home;
