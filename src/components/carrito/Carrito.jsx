import "./Carrito.css";

const Carrito = () => {
  return (
    <main className="container-fluid my-2 p-0">
      <div className="title-cart">
        <h1 className="mb-4">Carrito de compras</h1>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Imagen</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio unitario</th>
            <th scope="col">Modificar</th>
            <th scope="col">Subtotal</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button className="btn btn-primary">+</button>
              <span className="mx-2">0</span>
              <button className="btn btn-primary">-</button>
            </td>
            <td>Otto</td>
            <td>
              <button className="btn btn-danger">X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Carrito;
