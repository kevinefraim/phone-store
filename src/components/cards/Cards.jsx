import "./Cards.css";

const Cards = ({ nombre, precio, img }) => {
  return (
    <>
      <article className="shadow oferta-card">
        <img
          height={190}
          width={250}
          className="product-img"
          src={require(`../../assets/img/productos/${img}.png`)}
          alt={nombre}
        />
        <div className="card-body text-center fs-5 fw-bolder">
          <h5 className="fs- fw-bolder">{nombre}</h5>
          <p>${precio}</p>
        </div>
      </article>
    </>
  );
};

export default Cards;
