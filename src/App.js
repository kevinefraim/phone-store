import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreProvider from "./context/StoreContext";
import Home from "./pages/home";
import Navbar from "./components/navbar/Navbar";
import Tienda from "./pages/tienda";
import Contacto from "./pages/contacto";
import LogIn from "./pages/login/Login";
import Detalles from "./components/detalles/Detalles";
import Carrito from "./components/carrito/Carrito";

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/tienda/:id" element={<Detalles />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
};

export default App;
