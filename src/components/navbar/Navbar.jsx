import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import logo from "../../assets/img/logo/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const { carrito } = useContext(StoreContext);
  const totalItems = carrito.reduce((qty, car) => qty + car.qty, 0);

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
        <div className="right-container me-3">
          <input className="rounded-3" type="text" placeholder="Búsqueda" />
          <Link to="login">
            <i className="bi bi-person-fill"></i>
          </Link>
          <Link to="/carrito">
            <i className="bi bi-cart-fill"></i>
            {totalItems}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
