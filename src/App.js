import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import StoreProvider from "./context/StoreContext";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./pages/home/Home";
import Tienda from "./pages/tienda/Tienda";
import ProductDetail from "./components/tienda/productDetail/ProductDetail";
import ProductosBuscados from "./components/tienda/productosBuscados/ProductosBuscados";
import Contacto from "./pages/contacto/Contacto";
import Carrito from "./components/tienda/carrito/Carrito";
import LogIn from "./components/auth/login/Login";
import Registro from "./components/auth/registro/Registro";

const App = () => {
  return (
    <AuthProvider>
      <StoreProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/tienda/category/:cat" element={<Tienda />} />
            <Route path="/tienda/:id" element={<ProductDetail />} />
            <Route path="/search" element={<ProductosBuscados />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </Router>
      </StoreProvider>
    </AuthProvider>
  );
};

export default App;
