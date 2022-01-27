import { Routes, Route, useLocation } from "react-router-dom";
import { PrivateRouteAdmin } from "./routes/PrivateRouteAdmin";
import { PrivateRouteLoginAdmin } from "./routes/PrivateRouteLoginAdmin";
import { PrivateRouteUser } from "./routes/PrivateRouteLogin";
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
import Footer from "./components/layout/footer/Footer";

const App = () => {
  const location = useLocation();

  const exclusion = ["/admin", "/admin/login"];

  return (
    <AuthProvider>
      <StoreProvider>
        {exclusion.indexOf(location.pathname) < 0 && <Navbar />}
        <Routes>
          <Route element={<PrivateRouteAdmin />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route element={<PrivateRouteLoginAdmin />}>
            <Route path="/admin/login" element={<AdminLogin />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/tienda/category/:cat" element={<Tienda />} />
          <Route path="/tienda/:id" element={<ProductDetail />} />
          <Route path="/search" element={<ProductosBuscados />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route element={<PrivateRouteUser />}>
            <Route path="/login" element={<LogIn />} />
          </Route>
          <Route element={<PrivateRouteUser />}>
            <Route path="/registro" element={<Registro />} />
          </Route>
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
        <Footer />
      </StoreProvider>
    </AuthProvider>
  );
};

export default App;
