import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Filtros.css";

const Filtros = () => {
  const [isActive, setIsActive] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    setIsActive(pathname);
  }, [pathname]);

  return (
    <div className="col-md-3  mt-5 filter-container">
      <div className="filter-title">
        <p className="text-center">Filtros</p>
      </div>
      <div className="list">
        <ul className="filter-list">
          <Link to="/tienda">
            <li className={isActive === "/tienda" ? "active" : null}>
              Todos los productos
            </li>
          </Link>
          <Link to="/tienda/category/apple">
            <li
              className={
                isActive === "/tienda/category/apple" ? "active" : null
              }
            >
              Apple
            </li>
          </Link>
          <Link to="/tienda/category/samsung">
            <li
              className={
                isActive === "/tienda/category/samsung" ? "active" : null
              }
            >
              Samsung
            </li>
          </Link>
          <Link to="/tienda/category/motorola">
            <li
              className={
                isActive === "/tienda/category/motorola" ? "active" : null
              }
            >
              Motorola
            </li>
          </Link>
          <Link to="/tienda/category/sony">
            <li
              className={isActive === "/tienda/category/sony" ? "active" : null}
            >
              Sony
            </li>
          </Link>
          <Link to="/tienda/category/tcl">
            <li
              className={isActive === "/tienda/category/tcl" ? "active" : null}
            >
              TCL
            </li>
          </Link>
          <Link to="/tienda/category/google">
            <li
              className={
                isActive === "/tienda/category/google" ? "active" : null
              }
            >
              Google
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Filtros;
