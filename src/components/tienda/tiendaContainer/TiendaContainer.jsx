import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../../context/StoreContext";
import useFetch from "../../../hooks/useFetch";
import Cards from "../../layout/cards/Cards";
import Filtros from "../filtros/Filtros";

import "./TiendaContainer.css";

const TiendaContainer = () => {
  const { products } = useContext(StoreContext);
  const [prodFiltered, setProdFiltered] = useState([]);
  const { brandId } = useParams();
  console.log(brandId);
  const { data } = useFetch(
    `https://pure-plateau-58976.herokuapp.com/brands/${brandId}`
  );
  console.log(data);
  useEffect(() => {
    setProdFiltered(data.phones);
  }, [data.phones]);

  return (
    <section className="container-fluid mx-0 px-0 row tienda-container">
      <Filtros />
      <div className="col-md-9 container-fluid row mt-5 prod-container">
        {prodFiltered?.length > 0
          ? prodFiltered?.map((product) => (
              <div
                key={product._id}
                className="col-lg-4 col-md-6 card-responsive p-0"
              >
                <Cards {...product} />
              </div>
            ))
          : products?.map((product) => (
              <div
                key={product._id}
                className="col-lg-4 col-md-6 card-responsive p-0 "
              >
                <Cards {...product} />
              </div>
            ))}
      </div>
    </section>
  );
};

export default TiendaContainer;
