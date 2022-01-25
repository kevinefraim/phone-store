import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreProvider from "./context/StoreContext";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Tienda from "./pages/tienda/Tienda";
import ProductDetail from "./components/productDetail/ProductDetail";
import Contacto from "./pages/contacto/Contacto";
import Carrito from "./components/carrito/Carrito";
import LogIn from "./pages/login/Login";

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/tienda/category/:cat" element={<Tienda />} />
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
