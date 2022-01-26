import { useContext } from "react";
import { StoreContext } from "../../../context/StoreContext";
import Cards from "../../layout/cards/Cards";

import "./Ofertas.css";

const Ofertas = () => {
  const { ofertas } = useContext(StoreContext);

  return (
    <div className="container-fluid">
      <div className="card-title">
        <h2>Ofertas!</h2>
      </div>
      <div className="card-container">
        {ofertas.map((oferta) => (
          <Cards key={oferta.id} {...oferta} />
        ))}
      </div>
    </div>
  );
};

export default Ofertas;
