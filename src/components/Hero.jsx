import Countdown from './Countdown';
import '../styles/components/Hero.css';

const Hero = ({ targetDate, onCountdownEnd }) => {
  console.log("targetDate en Hero:", targetDate);

  return (
    <section id="inicio" className="bg-gradient-to-r from-indigo-500 to-purple-300 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Taller Psicoeducativo
        </h2>
        <p className="text-xl mb-4 max-w-2xl">
          Abordaje de la ansiedad en aprendices con trastornos de la comunicación
        </p>
        <p className="text-lg mb-8 max-w-2xl">
          Una experiencia formativa para estudiantes de Psicología, orientada al diagnóstico y manejo de la ansiedad mediante técnicas psicoeducativas y psicométricas.
        </p>

        <Countdown
          targetDate={targetDate} 
          onComplete={onCountdownEnd} 
        />

        <div className="mt-8">
          <a 
            href="#registro" 
            className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-indigo-100 transition-colors"
          >
            ¡Reserva tu lugar ahora!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

