import { useState, useEffect } from 'react';

// Importamos todos los componentes
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Registration from './components/Registration';
import CalendarSection from './components/Calendar';
import Footer from './components/Footer';

// Importamos el CSS global
import './index.css'

// Componente principal que renderiza toda la landing page
const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [registrationOpen, setRegistrationOpen] = useState(true);

  // Detectar el scroll para cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    
    // Limpiar el evento al desmontar
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="font-sans bg-gray-50">
      <Header scrolled={scrolled} />
      <Hero 
        targetDate="2025-05-29T08:00:00"
        onCountdownEnd={() => setRegistrationOpen(false)}
      />
      <About />
      <Registration isOpen={registrationOpen}/>
      <CalendarSection />
      <Footer />
    </div>
  );
};

export default App;