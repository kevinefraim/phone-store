import "../carritoContainer/CarritoContainer.css";

const CarritoTable = ({
  car,
  img,
  nombre,
  precio,
  qty,
  id,
  handleAddQty,
  handleDelete,
  handleSub,
}) => {
  return (
    <tr className="prod-cart">
      <td>
        <img
          width={50}
          src={`${process.env.PUBLIC_URL}/assets/productos/${img}.png`}
          alt={nombre}
          className="prod-img"
        />
      </td>
      <td className="carrito-nombre w-25">
        <p>{nombre}</p>
      </td>
      <td className="fw-bolder">${precio}</td>
      <td>
        <div className="d-flex modify-cart">
          <button onClick={() => handleAddQty(car)} className="btn btn-primary">
            +
          </button>
          <span className="mx-2">{qty}</span>
          <button onClick={() => handleSub(car)} className="btn btn-primary">
            -
          </button>
        </div>
      </td>
      <td className="fw-bolder">${precio * qty}</td>
      <td>
        <i onClick={() => handleDelete(id)} className="bi bi-trash-fill"></i>
      </td>
    </tr>
  );
};

export default CarritoTable;
