import { useContext } from "react";
import { StoreContext } from "../../../context/StoreContext";
import Item from "../item/Item";

import "./ItemList.css";

const ItemList = ({ setActiveProduct, openModal }) => {
  const { products, handleDeleteAdmin } = useContext(StoreContext);

  const onEdit = (product) => {
    setActiveProduct(product);
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
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Item
              key={product.id}
              {...product}
              onEdit={onEdit}
              product={product}
              handleDeleteAdmin={handleDeleteAdmin}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ItemList;
