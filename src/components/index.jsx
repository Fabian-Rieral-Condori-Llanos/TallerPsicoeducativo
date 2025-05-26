import { useState, useEffect } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Registration from './components/Registration';
import CalendarSection from './components/Calendar';
import Footer from './components/Footer';

const App = () => {

  return (
    <div className="font-sans bg-gray-50">
      <Header />
      <Hero/>
      <About />
      <Registration/>
      <CalendarSection />
      <Footer />
    </div>
  );
};

export default App;