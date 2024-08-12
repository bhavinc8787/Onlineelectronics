import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from './Banner';
import Footer from './Footer';
import productsData from '../data/products.json';
import About from './About';

const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="p-8">
      <Banner /> 
      <h1 className="text-2xl lg:text-3xl lg: font-bold mb-6 text-center">
  <span className="bg-slate-300 rounded-lg px-4 py-2 inline-block">
    Discover a World of Electronics
  </span>
</h1>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 justify-items-center mt-14">
        {/* Category Card for Refrigerators */}
        <div 
          className="relative w-full max-w-md h-80 bg-gray-200 rounded-lg shadow-lg overflow-hidden flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => handleCategoryClick('Refrigerator')}
        >
          <img
            src="https://img.freepik.com/free-photo/side-view-woman-looking-fridge_23-2149857561.jpg?t=st=1723471365~exp=1723474965~hmac=3f119627373b3761406a04f7424a70eb65b9b337aeb5ddbfa1df345f0c070510&w=900"
            alt="Refrigerator"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 text-xl font-bold text-white">Refrigerators</div>
          <div className="absolute bottom-2 right-2 bg-red-600 text-white py-1 px-3 text-sm font-bold rounded-full">
            78% Off
          </div>
        </div>

        {/* Category Card for TVs */}
        <div 
          className="relative w-full max-w-md h-80 bg-gray-200 rounded-lg shadow-lg overflow-hidden flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => handleCategoryClick('TV')}
        >
          <img
            src="https://img.freepik.com/free-photo/man-watching-streaming-service-his-tv_23-2149047410.jpg?t=st=1723473087~exp=1723476687~hmac=0fdc959ff295cd227a25b6d40a3c612f6142e9ee0ce57fd0142b43ae0f3eccdb&w=996"
            alt="TV"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 text-xl font-bold text-white">TVs</div>
          <div className="absolute bottom-2 right-2 bg-red-600 text-white py-1 px-3 text-sm font-bold rounded-full">
            50% Off
          </div>
        </div>

        {/* Category Card for Laptops */}
        <div 
          className="relative w-full max-w-md h-80 bg-gray-200 rounded-lg shadow-lg overflow-hidden flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => handleCategoryClick('Laptop')}
        >
          <img
            src="https://img.freepik.com/free-photo/view-3d-laptop-device-with-screen-keyboard_23-2150714005.jpg?t=st=1723473413~exp=1723477013~hmac=bad6b3b640f66a680680874e05f4f59d570ec97b9f9ede6f6e55a7038b84aba4&w=740"
            alt="Laptop"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 text-xl font-bold text-white">Laptops</div>
          <div className="absolute bottom-2 right-2 bg-red-600 text-white py-1 px-3 text-sm font-bold rounded-full">
            60% Off
          </div>
        </div>

        {/* Example Card for Air Conditioners */}
        <div 
          className="relative w-full max-w-md h-80 bg-gray-200 rounded-lg shadow-lg overflow-hidden flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => handleCategoryClick('AC')}
        >
          <img
            src="https://img.freepik.com/free-photo/young-woman-using-home-technology_23-2149216632.jpg?t=st=1723474081~exp=1723477681~hmac=fe6593204cc1add41118f9172218071459d5d7b4e06cd0d88ed25dfd27dc1821&w=996"
            alt="AC"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 text-xl font-bold text-white">Air Conditioners</div>
          <div className="absolute bottom-2 right-2 bg-red-600 text-white py-1 px-3 text-sm font-bold rounded-full">
            60% Off
          </div>
        </div>

        {/* Example Card for Washing Machines */}
        <div 
          className="relative w-full max-w-md h-80 bg-gray-200 rounded-lg shadow-lg overflow-hidden flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => handleCategoryClick('Washing Machine')}
        >
          <img
            src="https://img.freepik.com/free-photo/woman-taking-clothes-from-washing-machine_23-2149117037.jpg?t=st=1723474193~exp=1723477793~hmac=ee11769aa4ab252d6feb7558ce23eda70bbda7088fa65e18267c89c6e095c885&w=996"
            alt="Washing Machine"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 text-xl font-bold text-white">Washing Machines</div>
          <div className="absolute bottom-2 right-2 bg-red-600 text-white py-1 px-3 text-sm font-bold rounded-full">
            35% Off
          </div>
        </div>
      </div>
    
      <About/>

    </div>
  );
};

export default Home;
