const CompraDetail = ({ id, detalle, total }) => {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>
        <ul>
          {detalle.map((det) => (
            <li className="d-flex" key={det._id}>
              <h5 className="fw-bolder">- {det.nombre}:</h5>
              <p className="ms-2">x{det.qty}</p>
              <p className="ms-2">${det.precio}</p>
            </li>
          ))}
        </ul>
      </td>
      <td className="fw-bolder">${total}</td>
    </tr>
  );
};

export default CompraDetail;
