import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreProvider from "./context/StoreContext";
import Home from "./pages/home";
import Navbar from "./components/navbar/Navbar";
import Tienda from "./pages/tienda";
import ProductDetail from "./components/productDetail/ProductDetail";
import Contacto from "./pages/contacto";
import LogIn from "./pages/login/Login";

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
        </Routes>
      </Router>
    </StoreProvider>
  );
};

export default App;
