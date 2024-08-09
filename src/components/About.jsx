import React from 'react';

const About = () => (
  <div className="p-8">
    <h1 className="text-5xl font-bold mb-6">About Us</h1>
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row ">
    <img
      src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Our Company</h1>
      <p className="mb-4 mt-8">
        Welcome to Electronics Store, your one-stop destination for the latest in electronics and gadgets. since 1992, our mission is to provide high-quality products and exceptional customer service. We believe in innovation, reliability, and building lasting relationships with our customers.
        </p>
      <p className="mb-4">
        Our journey began with a simple idea: to make cutting-edge technology accessible to everyone. Over the years, we have grown from a small startup to a leading player in the electronics market, thanks to our dedicated team and the support of our loyal customers.
      </p>
     
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    
    <section>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">John Doe</h3>
          <p className="text-gray-600">Founder & CEO</p>
          <p className="mt-2">
            John is the visionary behind our company. With over 15 years of experience in the electronics industry, he leads our team with passion and dedication.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
          <p className="text-gray-600">Chief Technology Officer</p>
          <p className="mt-2">
            Jane is our tech guru, responsible for overseeing the development and implementation of our technology strategies. Her expertise ensures we stay ahead of the curve.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Emily Johnson</h3>
          <p className="text-gray-600">Head of Customer Service</p>
          <p className="mt-2">
            Emily and her team are dedicated to providing top-notch support to our customers. She ensures that every customer interaction is handled with care and professionalism.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default About;
