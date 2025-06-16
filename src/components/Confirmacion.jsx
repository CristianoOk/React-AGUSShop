import React from 'react';
import { useNavigate } from 'react-router-dom';

const Confirmacion = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#2c3e50' }}>
      <button className="btn btn-warning" onClick={handleButtonClick}>
        Seguir comprando
      </button>
    </div>
  );
};

export default Confirmacion;

// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Confirmacion = () => {
//   const [codigo, setCodigo] = useState('');
//   const [codigoCorrecto, setCodigoCorrecto] = useState(false);
//   const codigoVerdadero = '1234'; // Ejemplo de código verdadero
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { formData } = location.state || {};

//   const handleChange = (e) => {
//     setCodigo(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (codigo === codigoVerdadero) {
//       setCodigoCorrecto(true);
//     } else {
//       alert('Código incorrecto. Inténtelo de nuevo.');
//     }
//   };

//   const handleFinalizarCompra = () => {
//     // Aquí puedes añadir la lógica para finalizar la compra
//     console.log('Compra finalizada:', formData);
//     navigate('/');
//   };

//   return (
//     <div className="container">
//       <h2>Confirmación de Compra</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="codigo">Ingrese el Código de Confirmación:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="codigo"
//             name="codigo"
//             value={codigo}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Validar Código</button>
//       </form>
//       {codigoCorrecto && (
//         <button onClick={handleFinalizarCompra} className="btn btn-success mt-3">Finalizar Compra</button>
//       )}
//     </div>
//   );
// };

// export default Confirmacion;
