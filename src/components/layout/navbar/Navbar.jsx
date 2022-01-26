import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { StoreContext } from "../../../context/StoreContext";
import logo from "../../../assets/img/logo/logo.png";

import "./Navbar.css";
import ResponsiveMenu from "../responsiveMenu/ResponsiveMenu";

const Navbar = () => {
  const { activeUser, handleLogout } = useContext(AuthContext);
  const { carrito, handleClear } = useContext(StoreContext);
  const totalItems = carrito.reduce((qty, car) => qty + car.qty, 0);
  const navigate = useNavigate();

  const onLogout = () => {
    handleLogout();
    handleClear();
    navigate("/");
  };

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

          <ul className="nav-list ">
            <Link to="/">Inicio</Link>

            <Link to="/tienda">Tienda</Link>

            <Link to="/contacto">Contacto</Link>
          </ul>
          <ResponsiveMenu />
        </div>
        <div className="right-container me-3">
          <input className="rounded-3" type="text" placeholder="Búsqueda" />
          {activeUser ? (
            <div className="d-flex align-items-center">
              <p className="m-0">Hola {activeUser.nombre}!</p>
              <div className="btn-logout">
                <button
                  onClick={onLogout}
                  className="ms-2 btn btn-outline-danger"
                >
                  Salir
                </button>
              </div>
            </div>
          ) : (
            <Link to="login">
              <i className="bi bi-person-fill"></i>
            </Link>
          )}
          <Link to="/carrito" className="d-flex">
            <i className="bi bi-cart-fill"></i>
            <span className="me-2">{totalItems}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
