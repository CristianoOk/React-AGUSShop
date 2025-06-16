/*import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Axios from "axios";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().categoria;
  const [empleados, setEmpleados] = useState([]);

  const getEmpleados = async () => {
    try {
      const response = await Axios.get("http://localhost:4000/empleados");
      setEmpleados(response.data);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    getEmpleados();
  }, []);

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const res = await pedirDatos();
        if (categoria) {
          setProductos(res.filter((prod) => prod.categoria === categoria));
          setTitulo(categoria);
        } else {
          setProductos(res);
          setTitulo("Productos");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDatos();
  }, [categoria]);

  return (
    <div>
      <ItemList productos={empleados} titulo={titulo} />
    </div>
  );
};

export default ItemListContainer;*/



import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Axios from "axios"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos")
  const categoria = useParams().categoria;
  const [empleados, setEmpleados] = useState([])

//  const getEmpleados = async () => {
//  await Axios.get("http://localhost:4000/empleados").then((response) => setEmpleados(response.data)) 
//  //}

//  useEffect(() => getEmpleados(), []);

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        if (categoria){
          setProductos(res.filter((prod) => prod.categoria === categoria));
          setTitulo(categoria);
        } else {
          setProductos(res);
          setTitulo("Productos")
        }
      })
  }, [categoria]) //Le digo que el "useEffect" se actualice cuando cambie el parámetro "categoria".
  return (
    <div>
      <ItemList productos={productos} titulo={titulo}/>
      </div>
  )
}
export default ItemListContainer