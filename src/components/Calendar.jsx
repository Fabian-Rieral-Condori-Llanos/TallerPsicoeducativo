import '../styles/components/Calendar.css';

const CalendarSection = () => {
  // Datos de ejemplo para el calendario
  const events = [
    { id: 1, date: '2025-05-30', title: 'Sesión 1: Bienvenida y presentacion', time: '10:00 - 10:05' },
    { id: 2, date: '2025-05-30', title: 'Exposición N°1: Introducción a los aprendices con trastornos de la comunicación', time: '10:05 - 10:20' },
    { id: 3, date: '2025-05-30', title: 'Exposición N°2: Diagnóstico Psicoeducativo sobre Aprendices con Trastornos de la comunicación', time: '10:20 - 10:23' },
    { id: 4, date: '2025-05-30', title: 'Exposición N°3: Planteamiento de la Batería del Diagnóstico del (STAI - ISRA)', time: '10:23 - 10:27' },
    { id: 5, date: '2025-05-30', title: 'Exposición N°4: Inventario STAI', time: '10:27 - 10:37' },
    { id: 6, date: '2025-05-30', title: 'Ejercicio Nº1: Protocolo STAI ', time: '10:37 - 10:00' },
    { id: 7, date: '2025-05-30', title: 'Exposición N°5: Inventario ISRA ', time: '10: - 10:37' },
    { id: 8, date: '2025-05-30', title: 'Ejercicio Nº2: Protocolo ISRA ', time: '10:27 - 10:37' },
    { id: 9, date: '2025-05-30', title: 'Cierre de la primera parte del taller ', time: '10:27 - 10:37' },
    { id: 10, date: '2025-05-30', title: 'Receso - refrigerio ', time: '10:27 - 10:37' },
    { id: 11, date: '2025-05-30', title: 'Apertura segunda parte.', time: '10:27 - 10:37' },
  ];

  return (
    <section id="calendario" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-700">Calendario del Taller</h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-indigo-600 text-white px-6 py-4">
              <h3 className="text-xl font-semibold">Programación de Exposiciones</h3>
            </div>

            <div className="divide-y divide-gray-200">
              {events.map(event => (
                <div key={event.id} className="p-6 hover:bg-indigo-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <h4 className="text-lg font-medium text-indigo-600">{event.title}</h4>
                      <p className="text-gray-600 mt-1">{event.time}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                        {new Date(event.date).toLocaleDateString('es-ES', { 
                          weekday: 'long',
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              * El calendario está sujeto a posibles modificaciones. Los participantes registrados recibirán notificaciones de cualquier cambio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;