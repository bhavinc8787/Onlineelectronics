
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import productsData from '../data/products.json';

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData.filter(product => product.category === category));
  }, [category]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">{category}s</h1>
      <div className="grid grid-cols-1 gap-y-6">
        {products.map((product, index) => (
          <div key={product.id} className={`flex justify-${index % 2 === 0 ? 'end' : 'start'} mb-6`}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
