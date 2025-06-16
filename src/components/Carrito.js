import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleVaciar = () => {
    vaciarCarrito();
  }

  const handleCompra = () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      navigate("/compra");
    }
  }

  return (
    <Container className="my-5">
      <h1 className="main-title text-center mb-4">Carrito</h1>
      {carrito.length > 0 ? (
        <>
          <Row className="mb-4">
            {carrito.map((prod) => (
              <Col key={prod.id} md={6} lg={4} className="mb-3">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>{prod.titulo}</Card.Title>
                    <Card.Text>
                      <strong>Precio unitario:</strong> ${prod.precio}
                    </Card.Text>
                    <Card.Text>
                      <strong>Precio total:</strong> ${prod.precio * prod.cantidad}
                    </Card.Text>
                    <Card.Text>
                      <strong>Cantidad:</strong> {prod.cantidad}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <h2 className="text-center mb-4">Precio total: ${precioTotal()}</h2>
          <div className="text-center">
            <Button variant="danger" className="me-2" onClick={handleVaciar}>Vaciar Carrito</Button>
            <Button variant="success" onClick={handleCompra}>Continuar Compra</Button>
          </div>
        </>
      ) : (
        <h2 className="text-center">El carrito está vacío</h2>
      )}
    </Container>
  );
}

export default Carrito;


/*import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Carrito = () => {
  const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

  const {signup, isAuthenticated, login, errors: registerErrors} = useAuth()
  const navigate = useNavigate()

  const handleVaciar = () => {
    vaciarCarrito();
  }

  const handleCompra = () => {
    if(!isAuthenticated) {
      navigate("/login")
    } else {
      navigate("/compra")
    }
  }

  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>

      {
        carrito.map((prod) => (
          <div key={prod.id}>
            <br />
            <h3>{prod.titulo}</h3>
            <p>Precio unit: ${prod.precio}</p>
            <p>Precio total: ${prod.precio * prod.cantidad}</p>
            <p>Cant: {prod.cantidad}</p>
            <br/>
          </div>
        ))
      } 
      {carrito.length > 0 ? <><h2>Precio total: ${precioTotal()}</h2> <button onClick={handleVaciar}>Vaciar</button></> : <h2>El carrito está vacío</h2>}

      {carrito.length > 0 && <button onClick={handleCompra}>Continuar compra</button> }
      
    </div>
  )
}
export default Carrito*/