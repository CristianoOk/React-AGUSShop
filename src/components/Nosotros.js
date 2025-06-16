import { useEffect } from "react"

const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("click");
    }
    window.addEventListener("click", clickear ); //Le digo que se ejecute la función "clickear" cuando se haga "click" en alguna parte de la ventana donde se está ejecutando la aplicación.

    return () => { //Cuando ponemos un return en el "useEffect", es para lo que contega adentro ese "return" se ejecute cuando el componente (en este caso el componente "Nosotros.js") se desmonte.
      window.removeEventListener("click", clickear);
  }
  }, [])
  return (
    <div className="container">
      <h1 className="main-title">Nosotros</h1>
      <p>Este es el componente "Nosotros"</p>
    </div>
  )
}
export default Nosotros