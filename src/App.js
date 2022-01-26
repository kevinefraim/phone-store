import { Routes, Route, useLocation } from "react-router-dom";
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
import Admin from "./pages/admin/Admin";
import AdminLogin from "./components/admin/login/AdminLogin";

const App = () => {
  const location = useLocation();

  const exclusion = ["/admin", "/admin/login"];

  return (
    <AuthProvider>
      <StoreProvider>
        {exclusion.indexOf(location.pathname) < 0 && <Navbar />}
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
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
      </StoreProvider>
    </AuthProvider>
  );
};

export default App;
