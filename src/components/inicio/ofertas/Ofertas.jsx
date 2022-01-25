import Cards from "../../cards/Cards";

import "./Ofertas.css";
const Ofertas = () => {
  return (
    <div className="container-fluid">
      <div className="card-title">
        <h2>Ofertas!</h2>
      </div>
      <div className="card-container">
        <Cards />
      </div>
    </div>
  );
};

export default Ofertas;
