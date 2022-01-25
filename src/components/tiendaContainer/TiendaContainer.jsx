import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import Cards from "../cards/Cards";

const TiendaContainer = () => {
  const { products } = useContext(StoreContext);

  return (
    <section className="container-fluid mx-0 px-0 row">
      <div className="col-md-3 px-0">Filtros</div>
      <div className="col-md-9 container row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6">
            <Cards {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TiendaContainer;
