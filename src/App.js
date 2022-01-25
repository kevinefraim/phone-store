import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreProvider from "./context/StoreContext";
import Home from "./pages/home";
import Navbar from "./components/navbar/Navbar";
import Tienda from "./pages/tienda";
import ProductDetail from "./components/productDetail/ProductDetail";
import Contacto from "./pages/contacto";
import LogIn from "./pages/login/Login";
<<<<<<< HEAD
=======
import Detalles from "./components/detalles/Detalles";
import Carrito from "./components/carrito/Carrito";
>>>>>>> e4190b12a3fdde93fd9d8f1ddca0dea3d9b98f02

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/tienda/:id" element={<ProductDetail />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
};

export default App;
