import "./Item.css";

const Item = ({ img, nombre, marca, precio, desc, stock, onEdit }) => {
  return (
    <tr>
      <td>
        <img
          width={50}
          src={`${process.env.PUBLIC_URL}/assets/productos/${img}.png`}
          alt={nombre}
        />
      </td>
      <td>{nombre}</td>
      <td>{marca}</td>
      <td>{precio}</td>
      <td className="hide">{desc}</td>
      <td>{stock}</td>
      <td>
        <i onClick={onEdit} className="bi bi-pencil-square"></i>
      </td>
      <td>
        <i className="bi bi-trash-fill"></i>
      </td>
    </tr>
  );
};

export default Item;
