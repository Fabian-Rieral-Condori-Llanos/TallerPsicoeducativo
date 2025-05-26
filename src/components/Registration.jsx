import { useState } from 'react';
import '../styles/components/Registration.css';

const Registration = ({ isOpen }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    motivacion: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://190.129.224.28:3750/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          apellido: formData.apellido,
          correo: formData.email,
          telefono: formData.telefono
        })
      });

      if (!response.ok) {
        throw new Error('Error al registrar los datos');
      }

      const result = await response.json();

      setFormStatus({
        submitted: true,
        error: false,
        message: '¡Tu pre-registro ha sido exitoso! Te contactaremos pronto con más detalles.'
      });

      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        motivacion: ''
      });
    } catch (error) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Hubo un problema al enviar tu pre-registro. Por favor intenta de nuevo.'
      });
      console.error(error);
    }
  };

  if (!isOpen) {
    return (
      <section id="registro" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">Pre-registro cerrado</h2>
          <p className="text-gray-700">El tiempo de pre-registro ha finalizado. Gracias por tu interés.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="registro" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-700">Pre-registro</h2>

        {formStatus.submitted ? (
          <div className="max-w-md mx-auto bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            <p className="text-center">{formStatus.message}</p>
          </div>
        ) : (
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="apellido" className="block text-gray-700 font-medium mb-2">Apellido</label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="telefono" className="block text-gray-700 font-medium mb-2">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Enviar Pre-registro
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Registration;
