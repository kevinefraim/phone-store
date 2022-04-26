import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { StoreContext } from "../../../context/StoreContext";
import ResponsiveMenu from "../responsiveMenu/ResponsiveMenu";
import Buscador from "../buscador/Buscador";
import logo from "../../../assets/img/logo/logo.png";

import "./Navbar.css";

const Navbar = () => {
  const { activeUser, handleLogout } = useContext(AuthContext);
  const { carrito, handleClear } = useContext(StoreContext);
  // const totalItems = carrito.reduce((qty, car) => qty + car.qty, 0);
  const { cartQty } = useContext(StoreContext);
  const navigate = useNavigate();

  const onLogout = () => {
    handleLogout();
    handleClear();
    navigate("/");
  };

  return (
    <header style={{ flexShrink: 0 }}>
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
          <Buscador />
          {activeUser ? (
            <div className="d-flex align-items-center">
              <div className="dropdown">
                <a
                  className="nombre dropdown-toggle"
                  href="/"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hola {activeUser.name}!
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item compras-link" to="/compras">
                      Mis compras
                    </Link>
                  </li>
                  <li
                    onClick={onLogout}
                    className="dropdown-item text-danger fw-bolder"
                    style={{ cursor: "pointer" }}
                  >
                    Cerrar sesión
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link to="login">
              <i className="bi bi-person-fill"></i>
            </Link>
          )}
          <Link to="/carrito/3" className="d-flex">
            <i className="bi bi-cart-fill"></i>
            <span className="me-2">{cartQty}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
