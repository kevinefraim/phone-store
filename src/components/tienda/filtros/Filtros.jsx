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
          <Link to="/tienda/category/Apple">
            <li
              className={
                isActive === "/tienda/category/Apple" ? "active" : null
              }
            >
              Apple
            </li>
          </Link>
          <Link to="/tienda/category/Samsung">
            <li
              className={
                isActive === "/tienda/category/Samsung" ? "active" : null
              }
            >
              Samsung
            </li>
          </Link>
          <Link to="/tienda/category/Motorola">
            <li
              className={
                isActive === "/tienda/category/Motorola" ? "active" : null
              }
            >
              Motorola
            </li>
          </Link>
          <Link to="/tienda/category/Sony">
            <li
              className={isActive === "/tienda/category/Sony" ? "active" : null}
            >
              Sony
            </li>
          </Link>
          <Link to="/tienda/category/TCL">
            <li
              className={isActive === "/tienda/category/TCL" ? "active" : null}
            >
              TCL
            </li>
          </Link>
          <Link to="/tienda/category/Google">
            <li
              className={
                isActive === "/tienda/category/Google" ? "active" : null
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
