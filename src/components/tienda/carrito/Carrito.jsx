import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../../context/StoreContext";

import "./Carrito.css";

const Carrito = () => {
  const {
    carrito,
    setCarrito,
    handleAddQty,
    handleSub,
    handleDelete,
    handleClear,
  } = useContext(StoreContext);

  const carTotal = carrito.reduce(
    (price, car) => price + car.precio * car.qty,
    0
  );

  //submit compra
  const submitCompra = () => {
    alert("compra realizada");
    setCarrito([]);
  };

  return (
    <main className="container-fluid my-2 p-0">
      <div className="title-cart">
        <h1 className="mb-4">Carrito de compras</h1>
      </div>
      {carrito.length === 0 ? (
        <h2 className="text-center mt-5">
          No hay productos, <Link to="/tienda">Agregalos en la tienda!</Link>
        </h2>
      ) : (
        <div>
          <table className="table">
            <thead>
              <tr className="table-header">
                <th scope="col">Imagen</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio unitario</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Subtotal</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody className="prod-container">
              {carrito.map((car) => (
                <tr className="prod-cart" key={car.id}>
                  <td>
                    <img
                      width={50}
                      src={`${process.env.PUBLIC_URL}/assets/productos/${car.img}.png`}
                      alt={car.nombre}
                      className="prod-img"
                    />
                  </td>
                  <td className="w-25">
                    <h4>{car.nombre}</h4>
                  </td>
                  <td className="fw-bolder">${car.precio}</td>
                  <td>
                    <div className="d-flex modify-cart">
                      <button
                        onClick={() => handleAddQty(car)}
                        className="btn btn-primary"
                      >
                        +
                      </button>
                      <span className="mx-2">{car.qty}</span>
                      <button
                        onClick={() => handleSub(car)}
                        className="btn btn-primary"
                      >
                        -
                      </button>
                    </div>
                  </td>
                  <td className="fw-bolder">${car.precio * car.qty}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(car.id)}
                      className="btn btn-danger"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="container d-flex flex-wrap justify-content-evenly align-items-center mt-5">
            <button onClick={handleClear} className="btn btn-danger">
              Vaciar carrito
            </button>
            <h5 className="fw-bolder m-3">Total: ${carTotal}</h5>
            <button onClick={submitCompra} className="btn btn-primary">
              Confirmar compra
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Carrito;
