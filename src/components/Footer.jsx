import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Taller Psicoeducativo</h3>
            <p className="mt-2 text-indigo-200">Transformando vidas a través del conocimiento</p>
          </div>

          <div className="flex space-x-4">
            {/* Facebook */}
            <a href="#" className="text-white hover:text-indigo-200 transition-colors" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="text-white hover:text-indigo-200 transition-colors" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2C5.13 2 3 4.13 3 6.75v10.5C3 19.87 5.13 22 7.75 22h8.5c2.62 0 4.75-2.13 4.75-4.75V6.75C21 4.13 18.87 2 16.25 2h-8.5zM12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6zm5.25-.5a1 1 0 110 2 1 1 0 010-2zM5 6.75C5 5.51 6.01 4.5 7.25 4.5h9.5c1.24 0 2.25 1.01 2.25 2.25v10.5c0 1.24-1.01 2.25-2.25 2.25h-9.5C6.01 19.5 5 18.49 5 17.25V6.75z"/>
              </svg>
            </a>

            {/* TikTok */}
            <a href="#" className="text-white hover:text-indigo-200 transition-colors" aria-label="TikTok">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.83 2H16a4.84 4.84 0 004.83 4.83v3.16a7.99 7.99 0 01-4.26-1.21v6.69a6.83 6.83 0 11-6.83-6.83c.16 0 .33.01.49.02v3.25a3.58 3.58 0 104.26 3.53V2z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-indigo-800 text-center text-indigo-300 text-sm">
          <p>© {new Date().getFullYear()} Taller Psicoeducativo. Todos los derechos reservados.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a> | 
            <a href="#" className="hover:text-white transition-colors ml-3">Términos y Condiciones</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
