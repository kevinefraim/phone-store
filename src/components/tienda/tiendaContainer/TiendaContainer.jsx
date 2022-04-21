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
  const { brand } = useParams();

  const { data } = useFetch(
    `https://phonestore-back.herokuapp.com/phones/brand/${brand}`
  );

  useEffect(() => {
    setProdFiltered(data.filteredPhones);
  }, [data.filteredPhones]);

  return (
    <section className="container-fluid mx-0 px-0 row tienda-container">
      <Filtros />
      <div className="col-md-9 container-fluid row mt-5 prod-container">
        {prodFiltered?.length > 0
          ? prodFiltered?.map((product) => (
              <div
                key={product.id}
                className="col-lg-4 col-md-6 card-responsive p-0"
              >
                <Cards {...product} />
              </div>
            ))
          : products?.map((product) => (
              <div
                key={product.id}
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
