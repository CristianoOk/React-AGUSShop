// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { sendEmail } from '../resendService'; // Importa el servicio de Resend

// const ContinuarCompra = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     direccion: '',
//     metodoPago: 'credito',
//     numeroTarjeta: '',
//     nombreTitular: ''
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Información enviada:', formData);
//     // Aquí puedes añadir la lógica para enviar los datos al servidor
//     navigate('/confirmacion', { state: { formData } });
//   };

//   const handleSendEmail = async () => {
//     try {
//       await sendEmail(
//         formData.email,
//         'Confirmación de Compra',
//         `Gracias por tu compra. Aquí están los detalles:\n\nDirección: ${formData.direccion}\nMétodo de Pago: ${formData.metodoPago}\nNúmero de Tarjeta: ${formData.numeroTarjeta}\nNombre del Titular: ${formData.nombreTitular}`
//       );
//       alert('¡Correo enviado exitosamente!');
//     } catch (error) {
//       alert('Falló el envío del correo.');
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Formulario de Envío y Pago</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">Correo Electrónico:</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="direccion">Dirección de Envío:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="direccion"
//             name="direccion"
//             value={formData.direccion}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="metodoPago">Método de Pago:</label>
//           <select
//             className="form-control"
//             id="metodoPago"
//             name="metodoPago"
//             value={formData.metodoPago}
//             onChange={handleChange}
//             required
//           >
//             <option value="credito">Tarjeta de Crédito</option>
//             <option value="efectivo">Efectivo</option>
//           </select>
//         </div>
//         {formData.metodoPago === 'credito' && (
//           <>
//             <div className="form-group">
//               <label htmlFor="numeroTarjeta">Número de Tarjeta:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="numeroTarjeta"
//                 name="numeroTarjeta"
//                 value={formData.numeroTarjeta}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="nombreTitular">Nombre del Titular:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="nombreTitular"
//                 name="nombreTitular"
//                 value={formData.nombreTitular}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </>
//         )}
//         <button type="submit" className="btn btn-primary">Enviar</button>
//         <button type="button" className="btn btn-primary" onClick={handleSendEmail}>Enviar email</button> {/* Cambié type="submit" a type="button" */}
//       </form>
//     </div>
//   );
// };

// export default ContinuarCompra;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContinuarCompra = () => {
  const [formData, setFormData] = useState({
    email: '',
    direccion: '',
    metodoPago: 'credito',
    numeroTarjeta: '',
    nombreTitular: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Información enviada:', formData);
    // Aquí puedes añadir la lógica para enviar los datos al servidor
    navigate('/confirmacion', { state: { formData } });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Datos de Envío y Pago</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Dirección de Envío</label>
          <input
            type="text"
            className="form-control"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="metodoPago" className="form-label">Método de Pago</label>
          <select
            className="form-select"
            id="metodoPago"
            name="metodoPago"
            value={formData.metodoPago}
            onChange={handleChange}
            required
          >
            <option value="credito">Tarjeta de Crédito</option>
            <option value="efectivo">Efectivo</option>
          </select>
        </div>
        {formData.metodoPago === 'credito' && (
          <>
            <div className="mb-3">
              <label htmlFor="numeroTarjeta" className="form-label">Número de Tarjeta</label>
              <input
                type="text"
                className="form-control"
                id="numeroTarjeta"
                name="numeroTarjeta"
                value={formData.numeroTarjeta}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nombreTitular" className="form-label">Nombre del Titular</label>
              <input
                type="text"
                className="form-control"
                id="nombreTitular"
                name="nombreTitular"
                value={formData.nombreTitular}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}
        <button type="submit" className="btn btn-primary" onClick={() => alert('¡Gracias por tu compra!')}>
          Comprar
        </button>
      </form>
    </div>
  );
};

export default ContinuarCompra;



// import React, { useState } from 'react';

// const ContinuarCompra = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     direccion: '',
//     metodoPago: 'credito',
//     numeroTarjeta: '',
//     nombreTitular: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Información enviada:', formData);
//     // Aquí puedes añadir la lógica para enviar los datos al servidor
//   };

//   return (
//     <div className="container">
//       <h2>Datos de Envío y Pago</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">Correo Electrónico:</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="direccion">Dirección de Envío:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="direccion"
//             name="direccion"
//             value={formData.direccion}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="metodoPago">Método de Pago:</label>
//           <select
//             className="form-control"
//             id="metodoPago"
//             name="metodoPago"
//             value={formData.metodoPago}
//             onChange={handleChange}
//             required
//           >
//             <option value="credito">Tarjeta de Crédito</option>
//             <option value="efectivo">Efectivo</option>
//           </select>
//         </div>
//         {formData.metodoPago === 'credito' && (
//           <>
//             <div className="form-group">
//               <label htmlFor="numeroTarjeta">Número de Tarjeta:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="numeroTarjeta"
//                 name="numeroTarjeta"
//                 value={formData.numeroTarjeta}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="nombreTitular">Nombre del Titular:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="nombreTitular"
//                 name="nombreTitular"
//                 value={formData.nombreTitular}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </>
//         )}
//         <button type="submit" className="btn btn-primary">Continuar</button>
//       </form>
//     </div>
//   );
// };

// export default ContinuarCompra;


/*function ContinuarCompra() {
  return (
    <h1>CONTINUEMOS BEBE!!!</h1>
  )
}

export default ContinuarCompra*/