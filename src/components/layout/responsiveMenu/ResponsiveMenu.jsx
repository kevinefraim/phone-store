import { Link } from "react-router-dom";

import "./ResponsiveMenu.css";

const ResponsiveMenu = () => {
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
            <ul className="ul-responsive p-1">
              <button className="btn btn-light mt-1 rounded-pill p-2">
                <Link to="/">Inicio</Link>
              </button>
              <button className="btn btn-light mt-1 rounded-pill p-2">
                <Link to="/tienda">Tienda</Link>
              </button>
              <button className="btn btn-light mt-1 rounded-pill p-2">
                <Link to="/contacto">Contacto</Link>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResponsiveMenu;
