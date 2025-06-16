import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { useAuth } from "../context/AuthContext";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbar1 = () => {

  const {isAuthenticated, logout, user} = useAuth()

  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">AGUSShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/productos">Productos</Nav.Link>
            <Nav.Link href="/productos/Medias">Medias</Nav.Link>
            <Nav.Link href="/productos/Pantalones">Pantalones</Nav.Link>
            <Nav.Link href="/productos/Remeras">Remeras</Nav.Link>
            <Nav.Link href="/productos/Buzos">Buzos</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
            <Nav.Link href="/carrito">Carrito</Nav.Link>

            {isAuthenticated ? <Nav.Link href="/" onClick={logout}>Logout</Nav.Link> : <><Nav.Link href="/login">Login</Nav.Link> <Nav.Link href="/register">Register</Nav.Link></>}
          </Nav>
        </Container>
      </Navbar>
  );
}
export default Navbar1

/*
<nav className="navbar">
<Link to='/' className="logo"><h1>AGUSShop</h1></Link>
<ul className="menu">
  <li><Link className="menu-link" to="/">Inicio</Link></li>
  <li><Link className="menu-link" to="/productos">Productos</Link></li>
  <li><Link className="menu-link" to="/productos/Medias">Medias</Link></li>
  <li><Link className="menu-link" to="/productos/Pantalones">Pantalones</Link></li>
  <li><Link className="menu-link" to="/productos/Remeras">Remeras</Link></li>
  <li><Link className="menu-link" to="/productos/Buzos">Buzos</Link></li>
  <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
  <li><CartWidget /></li>

  {isAuthenticated ? <li><Link to="/" onClick={logout}>Logout</Link></li> : <><li><Link className="menu-link" to="/login">Login</Link></li>
  <li><Link className="menu-link" to="/register">Register</Link></li></>}
  
  
</ul>
</nav>*/