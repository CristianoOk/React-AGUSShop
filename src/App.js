import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import "./main.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom"; //Para poder importar estas herramientas de la dependencia "react-router-dom", previo se instaló en la terminal (más precisamente en "powershell") dicha dependencia ingresando la sentencia "npm install-react-router-dom".
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import { CartContext, CartProvider } from "./context/CartContext";
import { useState } from "react";
import Carrito from "./components/Carrito";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import ContinuarCompra from "./components/ContinuarCompra";
import Inicio from "./components/Inicio";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from "./components/Navbar";
import Confirmacion from "./components/Confirmacion";

function App() {
  
  return ( 
    <div className="bg-secondary">
      <CartProvider> 
        <AuthProvider>
        <BrowserRouter>
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Inicio />}/>
          <Route path="/item/:id" element={<ItemDetailContainer /> /*Con los dos puntos seguido de "id" ("/item/:id") estoy definiendo el id como un parámetro DINAMICO*/}/>
          <Route path="productos" element={<ItemListContainer />} />
          <Route path="productos/:categoria" element={<ItemListContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />

          <Route path="/confirmacion" element={<Confirmacion />} />


          
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/compra" element={<ContinuarCompra />} />
            
        </Routes>
        </BrowserRouter>
        </AuthProvider>
      </CartProvider>
    </div>
  );
}

export default App;

/*import { useState } from "react";
import User from "./components/user";
import NewUser from "./components/newUser";


export default function App() {

  const [bestie, setBestie] = useState(false)
  const [newBestie, setNewBestie] = useState(false)
  const [botones, setBotones] = useState(true)

  function btn() {
    return (
      <>
      <h2>AgussApp</h2>
      <button onClick={() => {setBestie(true); setBotones(false)}}>Log in</button>
      <button onClick={() => {setNewBestie(true); setBotones(false)}}>Register</button>
      </>
      )
  }

  return (
    <>
      {botones && btn()}
      {bestie && <User />}
      {newBestie && <NewUser />}
    </>
  )
}*/