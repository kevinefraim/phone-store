import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Tienda from "./pages/tienda";
import Contacto from "./pages/contacto";
import Navbar from "./components/navbar/Navbar";
import AppContextProvider from "./context/AppContext";

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
};

export default App;
