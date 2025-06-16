import { useEffect, useState } from "react";
import { pedirDatos } from "./pedirDatos";
//import "../Styles/main.css";

export default function User() {

  const [valores, setValores] = useState({nombre:"", contraseña:"", id:""}); //Aunque nombrar "id" acá no me sirve de mucho lol.
  const [person, setPerson] = useState(null);
  const [errort, setErrort] = useState(null);
  const [limpiar, setLimpiar] = useState(false);

  const handleChange = (e) =>{
    setValores({...valores, [e.target.name]: e.target.value}) //el spread operetor, sirve para que vaya guardando lo que vas escribiendo en cada campo.
  }

  const handleEnvio = async (e) => {
    e.preventDefault();
    if (!limpiar) { //Sin esto, se mandaba a llamar igual a la promesa cuando presionaba el botón "clear".
      console.log(valores.nombre)
      await pedirDatos(valores.nombre, valores.contraseña) 
      .then((res) => {
        console.log(res)
        setPerson(res);
        console.log(person)
      })
  
      .catch((err) => { //"err", si te fijas es un objeto, ya que, en "pedirDatos.js" pusiste "reject({error: "QUIENES SOON"})}"; claramente lo que pusiste en el "reject" es un objeto que contiene una sola propiedad, "error".
        console.log(err);
        setErrort(err);
        console.log(errort)
      })
    }
    /*
    .catch((err) => {
      setErrort(err);
      console.log(errort)
    })
    //console.log(person)*/    
  }
  useEffect(() => {
    if (limpiar) {
      setValores({nombre:"", contraseña:"", id:""})
    }
  }, [limpiar])
  return (
    <div className="login-container"> <h3>LOGIN</h3>
      <form onSubmit={handleEnvio}>
      <input type="text" placeholder="Ingresá nombre de usuario" value={valores.nombre} onChange={handleChange} name="nombre"/>
      <input type="password" placeholder="Ingresá contraseña" value={valores.contraseña} onChange={handleChange} name="contraseña"/>
      <button onClick={() => setLimpiar(true)}>Clear</button>
      <button type="submit">Log in</button>
      </form>
      <h1>{valores.contraseña}</h1>
      {person && <h1>Datos de usuario: {person.nombre} {person.contraseña} {person.id} {person.puesto}</h1>}
      {errort && <h1>{errort.error /*Puedo usar esta notación, ya que, lo que le setee a esta constante es un objeto*/}</h1>}
    </div>
  )
}

/**/