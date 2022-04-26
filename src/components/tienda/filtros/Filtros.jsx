import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

import "./Filtros.css";

const Filtros = () => {
  const [isActive, setIsActive] = useState("");
  const [brands, setBrands] = useState(null);
  const { pathname } = useLocation();

  const getBrands = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/brands`);
    setBrands(data.brands);
  };

  useEffect(() => {
    getBrands();
  }, []);

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
          {brands?.map((brand) => (
            <Link
              key={brand.id}
              to={`/tienda/brand/${brand.name.toLowerCase()}`}
            >
              <li
                className={
                  isActive === `/tienda/brand/${brand.name.toLowerCase()}`
                    ? "active"
                    : null
                }
              >
                {brand.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filtros;
