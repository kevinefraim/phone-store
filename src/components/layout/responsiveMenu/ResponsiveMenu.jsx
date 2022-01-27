import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { StoreContext } from "../../../context/StoreContext";

import "./ResponsiveMenu.css";

const ResponsiveMenu = () => {
  const { activeUser, handleLogout } = useContext(AuthContext);
  const { handleClear } = useContext(StoreContext);
  const navigate = useNavigate();

  //funcion logout
  const onLogout = () => {
    handleLogout();
    handleClear();
    navigate("/");
  };
  return (
    <div className="nav-responsive">
      <div className="responsive-btn">
        <button
          className="btn btn-secondary"
          data-toggle="collapse"
          href="#multiCollapseExample1"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          <i className="bi bi-list"></i>
        </button>
      </div>
      <div className="nav-responsive-list">
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample1">
            <ul className="ul-responsive p-0">
              <button className="btn btn-light mt-1 rounded-pill p-2">
                <Link to="/">Inicio</Link>
              </button>
              <button className="btn btn-light mt-1 rounded-pill p-2">
                <Link to="/tienda">Tienda</Link>
              </button>
              <button className="btn btn-light mt-1 rounded-pill p-2">
                <Link to="/contacto">Contacto</Link>
              </button>

              {activeUser ? (
                <button className=" btn btn-danger mt-1 rounded-pill p-1 mb-1">
                  <p className="m-0" onClick={onLogout}>
                    Salir
                  </p>
                </button>
              ) : (
                <button className=" btn btn-light mt-1 rounded-pill p-1 ">
                  <Link to="/login">
                    <p className="m-0">LogIn</p>
                  </Link>
                </button>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResponsiveMenu;
