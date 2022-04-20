import { Routes, Route } from "react-router-dom";
import { PrivateRouteUser } from "./routes/PrivateRouteLogin";
import AuthProvider from "./context/AuthContext";
import StoreProvider from "./context/StoreContext";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./pages/home/Home";
import Tienda from "./pages/tienda/Tienda";
import ProductDetail from "./components/tienda/productDetail/ProductDetail";
import ProductosBuscados from "./components/tienda/productosBuscados/ProductosBuscados";
import Contacto from "./pages/contacto/Contacto";
import Carrito from "./components/tienda/carrito/carritoContainer/CarritoContainer";
import MisCompras from "./pages/misCompras/MisCompras";
import LogIn from "./components/auth/login/Login";
import Registro from "./components/auth/registro/Registro";
import Footer from "./components/layout/footer/Footer";

const App = () => {
  return (
    <AuthProvider>
      <StoreProvider>
        <Navbar />
        <div className="container-fluid main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/tienda/brand/:brandId" element={<Tienda />} />
            <Route path="/tienda/:id" element={<ProductDetail />} />
            <Route path="/search" element={<ProductosBuscados />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route element={<PrivateRouteUser />}>
              <Route path="/login" element={<LogIn />} />
              <Route path="/registro" element={<Registro />} />
            </Route>
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/compras" element={<MisCompras />} />
          </Routes>
        </div>
        <Footer />
      </StoreProvider>
    </AuthProvider>
  );
};

export default App;
