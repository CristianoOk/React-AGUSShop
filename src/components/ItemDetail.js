import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react"

const ItemDetail = ({item}) => {
  /*ESTO ESTA COMENTADO PORQUE LO USE SOLO PARA PRACTICAR!
  const {user, edad} = useContext(CartContext); //Dentro de los paréntesis le digo cuál es el contexto que quiero usar, en este caso "CartContext". Pongo las llaves "{}" a modo de desestructuración, para que solo me traiga algún elemento específico del elemento que fué asignado al "value" en la etiqueta "CartContext.Provider" en "App.js". Si hiciera 'const love = useContext(CartContext);', me asignaría todo lo que tenga el "value" en cuestion. Por ejemplo, si quisiera traer solamente "user" podría hacerlo así "const {user} = useContext(CartContext);" o así "const user = useContext(CartContext).user;" (obviamente el "user" de la izquierda pudo haber tenido cualquier nombre, es una simple constante que estoy usando para recibir el verdadero "user" a través del contexto).
  console.log(user, edad);
  */

  const {carrito,agregarAlCarrito} = useContext(CartContext);
  console.log(carrito)

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }
  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1)
  }

  /*TODO ESTO ESTA COMENTADO, PORQUE LO LLEVÉ A OTRO COMPONENTE, AHORA ESTARA MAS CLARO Y RESUMIDO EN "App.js" Y ASI NO HARA FALTA ANDAR PASANDO "setCarrito" POR TODOS LADOS. Y allí no se llamará "handleAgregar" sino "agregarAlCarrito".
  const handleAgregar = () =>{
    const itemAgregado = {...item, cantidad};

    const nuevoCarrito = [...carrito]; //Creo "nuevoCarrito", ya que, no puedo 'pushear' jaj, nuevas cosas directamente a "carrito", porque está siendo traido mediante contexto desde otro componente. "nuevoCarrito" es una copia fiel, y además cuando "nuevoCarrito" este 'actualizado' => le paso directamente a "setCarrito" todo lo que contenga esta variable-
    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);
    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);
  }
    */

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.titulo}/>
        <div>
          <h3 className="titulo">{item.titulo}</h3>
          <p className="descripcion">{item.descripcion}</p>
          <p className="categoria">Categoria: {item.categoria}</p>
          <p className="precio">${item.precio}</p>
          <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} handleAgregar={() => {agregarAlCarrito(item, cantidad)}}/>
        </div>
      </div>
    </div>
  )
}
export default ItemDetail