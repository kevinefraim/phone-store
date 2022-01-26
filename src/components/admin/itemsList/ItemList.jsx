import { useContext } from "react";
import { StoreContext } from "../../../context/StoreContext";
import Item from "../item/Item";

import "./ItemList.css";

const ItemList = ({ openModal }) => {
  const { products } = useContext(StoreContext);

  const onEdit = () => {
    openModal();
  };

  return (
    <section className="container-fluid">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Imagen</th>
            <th scope="col">Nombre</th>
            <th scope="col">Marca</th>
            <th scope="col">Precio</th>
            <th className="hide" scope="col">
              Descripción
            </th>
            <th scope="col">Stock</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Item key={product.id} {...product} onEdit={onEdit} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ItemList;
