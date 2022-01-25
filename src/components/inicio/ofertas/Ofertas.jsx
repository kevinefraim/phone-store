import { useContext } from "react";
import { StoreContext } from "../../../context/StoreContext";
import Cards from "../../cards/Cards";
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
          <Cards {...oferta} />
        ))}
      </div>
    </div>
  );
};

export default Ofertas;
