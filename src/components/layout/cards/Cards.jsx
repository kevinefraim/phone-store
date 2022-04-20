import { Link } from "react-router-dom";

import "./Cards.css";

const Cards = ({ name, price, img, id }) => {
  return (
    <>
      <Link to={`/tienda/${id}`}>
        <article className="ms-2 shadow oferta-card">
          <img className="product-img" src={img} alt={name} />
          <div className="card-body p-0 text-center fs-5 fw-bolder">
            <h5 className="fs- fw-bolder">{name}</h5>
            <p>${price}</p>
          </div>
        </article>
      </Link>
    </>
  );
};

export default Cards;
