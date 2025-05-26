import { useState, useEffect } from 'react';
import '../styles/components/Countdown.css';

const Countdown = ({ targetDate, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    console.log("Target date received:", targetDate);
    const target = new Date(targetDate).getTime(); // <-- aquí
  
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;
  
      if (difference <= 0) {
        clearInterval(interval);
        setExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        if (onComplete) onComplete();
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, [targetDate, onComplete]);
  

  if (expired) {
    return (
      <div className="mt-6 text-white text-xl font-semibold">
        El pre-registro ha finalizado.
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h3 className="text-xl mb-4 text-center">¡El pre-registro cierra en:</h3>
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="bg-white text-indigo-700 rounded-lg p-3">
          <div className="text-3xl font-bold">{timeLeft.days}</div>
          <div className="text-xs uppercase">Días</div>
        </div>
        <div className="bg-white text-indigo-700 rounded-lg p-3">
          <div className="text-3xl font-bold">{timeLeft.hours}</div>
          <div className="text-xs uppercase">Horas</div>
        </div>
        <div className="bg-white text-indigo-700 rounded-lg p-3">
          <div className="text-3xl font-bold">{timeLeft.minutes}</div>
          <div className="text-xs uppercase">Minutos</div>
        </div>
        <div className="bg-white text-indigo-700 rounded-lg p-3">
          <div className="text-3xl font-bold">{timeLeft.seconds}</div>
          <div className="text-xs uppercase">Segundos</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;