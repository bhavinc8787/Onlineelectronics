import React, { useEffect, useRef } from 'react';

const images = [
  'https://img.freepik.com/free-photo/open-laptop_144627-12148.jpg?t=st=1723224208~exp=1723227808~hmac=06601723253ded87f049086c818e0d4da13c304e5fb7ab27ad92ebe4c4973727&w=900',
  'https://img.freepik.com/premium-photo/magnificent-air-conditioner-isolated-white-background_787273-72998.jpg?w=740'
   
];

function Banner() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({
          left: carouselRef.current.offsetWidth,
          behavior: 'smooth'
        });
      }
    }, 3000); // Change images every 3 seconds

    return () => clearInterval(interval);
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
      <div className="w-full md:w-1/2 order-1 overflow-hidden">
        <div
          className="flex"
          ref={carouselRef}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
