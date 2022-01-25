import "./Cards.css";
import { Link } from "react-router-dom";

const Cards = ({ nombre, precio, img, id }) => {
  return (
    <>
      <Link to={`/tienda/${id}`}>
        <article className="shadow oferta-card">
          <img
            height={190}
            width={250}
            className="product-img"
            src={`${process.env.PUBLIC_URL}/assets/productos/${img}.png`}
            alt={nombre}
          />
          <div className="card-body  text-center fs-5 fw-bolder">
            <h5 className="fs- fw-bolder">{nombre}</h5>
            <p>${precio}</p>
          </div>
        </article>
      </Link>
    </>
  );
};

export default Cards;
