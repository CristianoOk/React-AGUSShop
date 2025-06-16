import { createContext, useEffect, useState } from "react"; //Para que nos permita crear contextos.

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || []; //"carritoInicial" va a iniciar con lo que haya en el "localStorage" guardado, en el caso que no haya nada ("undefined") => se le asigna el array vacio "[]".

//A recordar, para guardar datos en el navegador: el "localStorage" nos permite acceder al objeto "sotare", el cual nos permite almacenar datos en el navegador aún cuando cerramos la ventana de browser o si la recargamos (no tiene fecha de expiración); estos datos guardados son específicos de la página que estés visitando o en este caso creando, means que lo que guarde en mi página no se va a guardar el de facebook, por ejemplo. Los valores que guardamos siempre serán cadenas de caracteres (o sea, "string"; por eso arriba uso ".parse" para convertirlo del cadena de caracteres (como lo son los archivos ".JSON", para poder para poder trabajar en este código con lo que reciba)). Para enconrar el "localStorage" en Chrome podés apretar f12, después en "aplication" y ahí va a ver el ícono. Para guardar un dato ulizamos "localStorage.setItem("dato0", "dato0")" donde el primer argumento es el nombre del dato y el segundo el dato en cuestión; para pbtener un dato utilizamos "localStorage.getItem("dato0")" el argumento representa el nombre del dato; para eliminar "localStorage.removeItem("dato0")", el argumento es el nombre del dato; y si quisieramos eliminar todos los datos almacenados d¿en el "localStorage" => utilizamos "localStorage.clear()".


export const CartProvider = ({children}) => { //Recibo la propiedad de "children", porque me lo permite "react", y la uso como si fuera una propiedad de mi componente "CartProvider". Uso "children", más abajo, en el "return".
  const [carrito, setCarrito] = useState(carritoInicial);

  const agregarAlCarrito = (item, cantidad) =>{
    const itemAgregado = {...item, cantidad};

    const nuevoCarrito = [...carrito]; 
    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);
    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);
  }

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  }

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  }

  const vaciarCarrito = () => {
    setCarrito([]);
  }

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito)) //Lo vuelvo a convertir en string con "JSON.stringify", porque arriba lo recibí y lo convertí a un tipo de dato idoneo para poder trabajarlo en este código con "JSON.parse(localStorage.getItem("carrito"))".
  }, [carrito]) //Entonces, básicamente la función flecha de este "useEffect" se va a ejecutar cada vez que cambie el estado de "carrito" (que es la condición que estoy poniendo entre corchetes "[carrito]").
  

  return (<CartContext.Provider value={{carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito}}>
    {children /*Todo lo que está encerrando la etiqueta "<CartProvider>" en "App.js", acá en "CartContext.js" lo reconoce como "children" (que fué recibido/declarado como si fuera una propiedad más arriba en ete código cuando definí la "const CartProvider").*/} 
  </CartContext.Provider>
  )
}