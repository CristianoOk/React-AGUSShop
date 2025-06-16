import { useEffect, useState } from "react"
import { pedirItemPorId } from "../helpers/pedirDatos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);
  const id = useParams().id; 
  useEffect(() => {
    pedirItemPorId(Number(id)) //Lo combierto a número ("Number(id)"), porque el id se capturó como string.
      .then((res) => {
        setItem(res);
      })
  }, [id])
  return (
    <div>
      {item && <ItemDetail item={item} /*El doble "&&", funciona como un "if", o sea, si "item" no es "null" => se ejecuta " <ItemDetail item={item} />"*//>} 
    </div>
  )
}
export default ItemDetailContainer

// import { useEffect, useState } from "react";
// import ItemDetail from "./ItemDetail";
// import { useParams } from "react-router-dom";
// import Axios from "axios";

// const ItemDetailContainer = () => {
//   const [item, setItem] = useState(null);
//   const [empleados, setEmpleados] = useState([]);
//   const id = useParams().id;

//   const getEmpleados = async () => {
//     try {
//       const response = await Axios.get(`http://localhost:4000/empleados/${id}`);
//       setEmpleados(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching employees:", error);
//     }
//   };

//   const pedirItemPorId = (id) => {
//     return new Promise((resolve, reject) => {
//       const item = empleados.find((el) => el.id === id);

//       if (item) {
//         resolve(item);
//       } else {
//         reject({
//           error: "No se encontró el producto"
//         });
//       }
//     });
//   };

//   useEffect(() => {
//     getEmpleados();
//   }, [id]);

//   useEffect(() => {
//     if (empleados.length > 0) {
//       pedirItemPorId(Number(id))
//         .then((res) => {
//           setItem(res);
//         })
//         .catch((error) => {
//           console.error("Error fetching item:", error);
//         });
//     }
//   }, [empleados, id]);

//   return (
//     <div>
//       {item && <ItemDetail item={item} />}
//     </div>
//   );
// };

// export default ItemDetailContainer;


/*import { useEffect, useState } from "react"
import { pedirItemPorId } from "../helpers/pedirDatos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Axios from "axios";

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);
  const id = useParams().id;

  const [empleados, setEmpleados] = useState([]);

  const getEmpleados = async () => {
    try {
      const response = await Axios.get("http://localhost:4000/empleados/:id");
      setEmpleados(response.data);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
      const item = empleados.find((el) => el.id === id);
  
      if (item) {
        resolve(item)
      } else {
          reject({
            error: "No se encontró el producto"
          })
      }
    })
  }

  useEffect(() => {
    pedirItemPorId(Number(id)) //Lo combierto a número ("Number(id)"), porque el id se capturó como string.
      .then((res) => {
        setItem(res);
      })
  }, [id])
  return (
    <div>
      {item && <ItemDetail item={item} /*El doble "&&", funciona como un "if", o sea, si "item" no es "null" => se ejecuta " <ItemDetail item={item} />"* //>} 
    </div>
  )
}
export default ItemDetailContainer*/