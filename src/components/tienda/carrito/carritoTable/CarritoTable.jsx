import "../carritoContainer/CarritoContainer.css";

const CarritoTable = ({ item, handleAddQty, handleDelete, handleSub }) => {
  const { quantity, id, cart, phone } = item;

  return (
    <tr className="prod-cart">
      <td>
        <img width={50} src={"$"} alt={phone?.name} className="prod-img" />
      </td>
      <td className="carrito-nombre w-25">
        <p>{phone?.name}</p>
      </td>
      <td className="mt-4 fw-bolder">${phone?.price}</td>
      <td>
        <div className="d-flex modify-cart">
          <button
            onClick={() => handleAddQty(phone)}
            className="btn btn-primary"
          >
            +
          </button>
          <span className="mx-2">{quantity}</span>
          <button onClick={() => handleSub(phone)} className="btn btn-primary">
            -
          </button>
        </div>
      </td>
      <td className="fw-bolder">${phone?.price * quantity}</td>
      <td>
        <i onClick={() => handleDelete(id)} className="bi bi-trash-fill"></i>
      </td>
    </tr>
  );
};

export default CarritoTable;
