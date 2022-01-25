import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Tienda from "./pages/tienda";
import Contacto from "./pages/contacto";
import Navbar from "./components/navbar/Navbar";
import AppContextProvider from "./context/AppContext";
import LogIn from "./pages/login/Login";

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
};

export default App;
