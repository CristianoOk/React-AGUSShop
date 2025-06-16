import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

const CartWidget = () => {
  const {cantidadEnCarrito} = useContext(CartContext);
  return (
    <div>
      <Link className="menu-link" to="/carrito">Carrito{cantidadEnCarrito() /*Va con paréntesis "cantidadEnCarrito()", porque estoy haciendo referencia a una función.*/}</Link>
    </div>
  )
}
export default CartWidget