import data from "../data/data.json";
//import Axios from "axios"

//const getEmpleados = () => {
//  Axios.get("http://localhost:3001/empleados").then((response) => setEmpleados(response.data)) 
//}


export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 500)
  })
}

export const pedirItemPorId = (id) => {
  return new Promise((resolve, reject) => {
    const item = data.find((el) => el.id === id);

    if (item) {
      resolve(item)
    } else {
        reject({
          error: "No se encontró el producto"
        })
    }
  })
}