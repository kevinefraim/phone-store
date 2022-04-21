// import { ofertas } from "../../../data/data";
import useFetch from "../../../hooks/useFetch";
import Cards from "../../layout/cards/Cards";

import "./Ofertas.css";

const Ofertas = () => {
  const { data } = useFetch(`${process.env.REACT_APP_API_URL}/phones`);
  const ofertas = data.phones;
  console.log(ofertas);

  return (
    <div className="container">
      <div className="card-title">
        <h2>Ofertas!</h2>
      </div>
      <div className="container row card-container">
        {ofertas?.map((oferta) => (
          <div
            key={oferta.id}
            className="col-lg-3 col-md-6 card-responsive p-0"
          >
            <Cards {...oferta} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ofertas;
