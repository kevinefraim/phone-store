import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="nav-container">
        <div className="left-container">
          <img src="#" alt="logo" />
          <h1>LOGO</h1>
          <ul className="d-flex justify-content-center nav-list">
            <Link to="/">Inicio</Link>

            <Link to="/tienda">Tienda</Link>

            <Link to="/contacto">Contacto</Link>
          </ul>
        </div>
        <div className="right-container">
          <input type="text" placeholder="Búsqueda" />
          <i className="bi bi-person-fill"></i>
          <i className="bi bi-cart-fill"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
