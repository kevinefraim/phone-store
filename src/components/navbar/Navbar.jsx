import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="nav-container">
        <div className="left-container">
          <img src="#" alt="logo" />
          <h1>LOGO</h1>
          {/* <ul className="nav-list">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/tienda">Tienda</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul> */}
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
