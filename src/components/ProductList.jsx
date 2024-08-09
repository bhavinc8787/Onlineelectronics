import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import productsData from '../data/products.json';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-x-auto">
      <div className="flex space-x-4 p-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
};

export default ProductList;
