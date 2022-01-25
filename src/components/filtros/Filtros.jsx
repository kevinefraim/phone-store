import "./Filtros.css";
import { Link } from "react-router-dom";
const Filtros = () => {
  return (
    <div className="col-md-3  mt-4 filter-container">
      <div className="filter-title">
        <p className="text-center">Filtros</p>
      </div>
      <div className="list">
        <ul className="filter-list">
          <Link to="/tienda">
            <li>Mostrar todo</li>
          </Link>
          <Link to="/tienda/category/Apple">
            <li>Apple</li>
          </Link>
          <Link to="/tienda/category/Samsung">
            <li>Samsung</li>
          </Link>
          <Link to="/tienda/category/Motorola">
            <li>Motorola</li>
          </Link>
          <Link to="/tienda/category/Sony">
            <li>Sony</li>
          </Link>
          <Link to="/tienda/category/TCL">
            <li>TCL</li>
          </Link>
          <Link to="/tienda/category/Google">
            <li>Google</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Filtros;
