import { Link } from "react-router-dom";
import logo from "../../assets/img/logo/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="nav-container">
        <div className="left-container">
          <div className="title-logo">
            <Link to="/">
              <h1 className="title">Phone-store</h1>
            </Link>
            <img width={50} src={logo} alt="logo" />
          </div>
          <ul className="d-flex justify-content-center nav-list">
            <Link to="/">Inicio</Link>

            <Link to="/tienda">Tienda</Link>

            <Link to="/contacto">Contacto</Link>
          </ul>
        </div>
        <div className="right-container">
          <input className="rounded-3" type="text" placeholder="Búsqueda" />
          <Link to="login">
            <i className="bi bi-person-fill"></i>
          </Link>
          <i className="bi bi-cart-fill"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
