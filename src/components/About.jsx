import '../styles/components/About.css';

const About = () => {
  return (
    <section id="acerca" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-700">Acerca del Taller</h2>

        <div className="mt-12 p-6 bg-indigo-50 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-700 text-center">Introducción</h3>
          <p className="text-gray-700 text-center">
            Este taller psicoeducativo tiene como propósito fortalecer las competencias profesionales de estudiantes de Psicología en el diagnóstico e intervención de la ansiedad en aprendices con trastornos de la comunicación. Combina técnicas psicométricas (ISRA, STAI) y métodos psicoeducativos para mejorar el bienestar emocional y la inclusión de los aprendices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">¿Qué aprenderás?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Abordaje psicoeducativo en aprendices con trastornos de la comunicación.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Diagnóstico de ansiedad mediante instrumentos psicométricos (ISRA y STAI).</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Aplicación de técnicas cognitivo-conductuales: reestructuración cognitiva, mindfulness y regulación emocional.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Elaboración de informes e interpretación de resultados psicológicos.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Beneficios</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Desarrollo de competencias en psicología educativa y emocional.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Manejo profesional de herramientas diagnósticas estandarizadas.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Certificado digital de participación.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Participación en una experiencia de intervención educativa real y colaborativa.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 p-6 bg-indigo-50 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600 text-center">¿A quién está dirigido?</h3>
          <p className="text-gray-700 text-center">
            Estudiantes de 3er año “A” de la Carrera de Psicología de la Universidad Mayor, Real y Pontificia de San Francisco Xavier de Chuquisaca, interesados en fortalecer sus habilidades para abordar los trastornos de la comunicación asociados a la ansiedad.
          </p>
        </div>

        <div className="mt-12 p-6 bg-indigo-50 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-700 text-center">Metodología Aplicada</h3>
          <p className="text-gray-700 text-center">
            Se integra el método bibliográfico, diagnóstico psicoeducativo, intervención psicoeducativa y sistematización. Se aplican técnicas cognitivo-conductuales y se fomenta la participación activa, con un enfoque basado en la evidencia para la comprensión y manejo de la ansiedad en contextos educativos.
          </p>
        </div>

        <div className="mt-12 p-6 bg-indigo-50 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-700 text-center">Instrumentos Psicométricos</h3>
          <div className="text-gray-700 space-y-6">
            <div>
              <h4 className="font-bold text-indigo-600">1. ISRA – Inventario de Situaciones y Respuestas de Ansiedad</h4>
              <p><strong>Autores:</strong> Juan José Miguel-Tobal y Antonio Cano-Vindel</p>
              <p><strong>Población:</strong> Adolescentes y adultos</p>
              <p><strong>Duración:</strong> 50 minutos</p>
              <p><strong>Evalúa:</strong> Respuestas cognitivas, fisiológicas y motoras ante situaciones que generan ansiedad.</p>
              <p><strong>Aplicación:</strong> Detecta el tipo y nivel de ansiedad, ayudando a personalizar la intervención.</p>
            </div>

            <div>
              <h4 className="font-bold text-indigo-600">2. STAI – Inventario de Ansiedad Estado-Rasgo</h4>
              <p><strong>Autores:</strong> Spielberger, Gorsuch y Lushene</p>
              <p><strong>Población:</strong> Niños y adolescentes de 6 a 18 años</p>
              <p><strong>Duración:</strong> 15 minutos</p>
              <p><strong>Evalúa:</strong> Ansiedad transitoria (estado) y ansiedad como rasgo estable.</p>
              <p><strong>Resultado:</strong> Puntuación entre 20 y 80 por escala; valores altos indican mayor ansiedad.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
