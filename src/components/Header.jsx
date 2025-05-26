import { useState } from 'react';
import '../styles/components/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-indigo-700 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">Taller Psicoeducativo</h1>
        </div>

        {/* Menú para móviles */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menú desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="#inicio" className="hover:text-indigo-200 transition-colors">Inicio</a>
          <a href="#acerca" className="hover:text-indigo-200 transition-colors">Acerca del Taller</a>
          <a href="#registro" className="hover:text-indigo-200 transition-colors">Pre-registro</a>
          <a href="#calendario" className="hover:text-indigo-200 transition-colors">Calendario</a>
        </nav>
      </div>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-800 py-2">
          <nav className="flex flex-col space-y-2 px-4">
            <a href="#inicio" className="py-2 hover:text-indigo-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Inicio</a>
            <a href="#acerca" className="py-2 hover:text-indigo-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Acerca del Taller</a>
            <a href="#registro" className="py-2 hover:text-indigo-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Pre-registro</a>
            <a href="#calendario" className="py-2 hover:text-indigo-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Calendario</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;