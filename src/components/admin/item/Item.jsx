import "./Item.css";

const Item = ({
  product,
  id,
  img,
  nombre,
  marca,
  precio,
  desc,
  onEdit,
  handleDeleteAdmin,
}) => {
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
      <td>
        <i onClick={() => onEdit(product)} className="bi bi-pencil-square"></i>
      </td>
      <td>
        <i
          onClick={() => handleDeleteAdmin(id)}
          className="bi bi-trash-fill"
        ></i>
      </td>
    </tr>
  );
};

export default Item;
