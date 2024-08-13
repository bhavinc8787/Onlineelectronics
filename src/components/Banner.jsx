import React, { useState, useEffect, useRef } from 'react';

const images = [
  'https://img.freepik.com/free-psd/isolated-modern-laptop_23-2150629066.jpg?t=st=1723462556~exp=1723466156~hmac=b98bc326b3785e4016ffccee31bb9832185fe374cda49bbc0aa7cf5b89cfafa3&w=740',
  'https://img.freepik.com/free-vector/refrigerator-with-lots-food_1308-105555.jpg?t=st=1723462726~exp=1723466326~hmac=01fba9eb6569065e4964df7642fa07d5b951aa1fc4b844b585522d8ad12c5535&w=740',
  "https://img.freepik.com/free-vector/climate-control-equipment-realistic-set-with-air-conditioning-symbols-isolated-illustration_1284-29133.jpg?t=st=1723491613~exp=1723495213~hmac=ce8f4421258a178deeda3db993e3f37954c6b6678856f646761142fde5e01c10&w=740"
];

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 6000); 

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="bg-white text-gray-900 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
      <div className="w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1">
        <div className="space-y-12">
          <h1 className="text-4xl font-bold">
            Welcome to Our Electronics Store!
            <span className="text-pink-600"> Discover the Latest Gadgets and Deals!</span>
          </h1>
          <p className="text-xl font-semibold">
            Explore our wide range of electronics and find the latest gadgets and technology at unbeatable prices. Shop now and stay ahead with the best in tech!
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 order-1 overflow-hidden relative">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full flex-shrink-0 object-cover"
              style={{ minHeight: '300px' }} 
            />
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-pink-600' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
