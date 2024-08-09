import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Cart from './components/Cart';
import Payment from './components/Payment';
 // Import the Banner component
import Footer from './components/Footer'; // Import the Footer component
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      {/* Add Banner here if you want it on every page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer /> {/* Add Footer here */}
    </Router>
  </Provider>
);

export default App;
