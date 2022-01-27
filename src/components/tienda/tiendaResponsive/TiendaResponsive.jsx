import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../../context/StoreContext";
import Cards from "../../layout/cards/Cards";
import "./TiendaResponsive.css";

const TiendaResponsive = () => {
  const { products } = useContext(StoreContext);
  const [prodFiltered, setProdFiltered] = useState([]);
  const { cat } = useParams();

  useEffect(() => {
    setProdFiltered(products.filter((product) => product.marca === cat));
  }, [cat]);

  return (
    <div className="responsive-tienda">
      {prodFiltered.length > 0
        ? prodFiltered.map((product) => (
            <div key={product.id}>
              <Cards {...product} />
            </div>
          ))
        : products.map((product) => (
            <div key={product.id} className="card-responsive p-0">
              <Cards {...product} />
            </div>
          ))}
    </div>
  );
};

export default TiendaResponsive;
