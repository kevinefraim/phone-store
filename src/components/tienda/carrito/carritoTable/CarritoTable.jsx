import axios from "axios";
import "../carritoContainer/CarritoContainer.css";
import { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";

const CarritoTable = ({
  item,
  addQuantity,
  subQuantity,
  onDelete,
  cart,
  setCart,
}) => {
  const [updatedItem, setUpdatedItem] = useState(item);
  const { phone, quantity, id } = updatedItem;
  const { stock } = updatedItem.phone;

  const handleAddQty = async () => {
    if (updatedItem.quantity >= 1 && updatedItem.quantity < stock) {
      await addQuantity(quantity, id);
      setUpdatedItem({ ...updatedItem, quantity: quantity + 1 });
      setCart({ ...cart, total: cart.total + phone.price });
    }
  };
  const handleSubQty = async () => {
    if (updatedItem.quantity >= 2) {
      await subQuantity(quantity, id);
      setUpdatedItem({ ...updatedItem, quantity: quantity - 1 });
      setCart({ ...cart, total: cart.total - phone.price });
    }
  };

  const handleDelete = async () => {
    await onDelete(id);
  };

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
            // onClick={() => handleAddQty(phone)}
            onClick={handleAddQty}
            className="btn btn-primary"
          >
            +
          </button>
          <span className="mx-2">{updatedItem.quantity}</span>
          <button onClick={handleSubQty} className="btn btn-primary">
            -
          </button>
        </div>
      </td>
      <td className="fw-bolder">${phone?.price * updatedItem.quantity}</td>
      <td>
        <i onClick={handleDelete} className="bi bi-trash-fill"></i>
      </td>
    </tr>
  );
};

export default CarritoTable;
