// import { ofertas } from "../../../data/data";
import useFetch from "../../../hooks/useFetch";
import Cards from "../../layout/cards/Cards";
import { useEffect, useState } from "react";

import "./Ofertas.css";
import axios from "axios";

const Ofertas = () => {
  const [ofertas, setOfertas] = useState(null);

  const getOfertas = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/phones`);
    const ofertasArr = data.phones.slice(0, 4);
    setOfertas(ofertasArr);
  };

  useEffect(() => {
    getOfertas();
  }, []);

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
