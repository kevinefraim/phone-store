import { Link } from "react-router-dom";

import "./Cards.css";

const Cards = ({ nombre, precio, img, id }) => {
  return (
    <>
      <Link to={`/tienda/${id}`}>
        <article className="ms-2 shadow oferta-card">
          <img
            className="product-img"
            src={`${process.env.PUBLIC_URL}/assets/productos/${img}.png`}
            alt={nombre}
          />
          <div className="card-body p-0 text-center fs-5 fw-bolder">
            <h5 className="fs- fw-bolder">{nombre}</h5>
            <p>${precio}</p>
          </div>
        </article>
      </Link>
    </>
  );
};

export default Cards;
