import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../../context/StoreContext";
import { AuthContext } from "../../../context/AuthContext";
import "./Carrito.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Carrito = () => {
  const form = useRef();
  const { activeUser } = useContext(AuthContext);
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

  //alerta
  const addAlert = (mensaje) => {
    Swal.fire({
      title: mensaje,
      background: "#fff",
      padding: "2rem",
      position: "center",
      showConfirmButton: false,
      timer: 900,
      customClass: {
        title: "alert-title",
      },
    });
  };
  //funcion send email
  const sendEmail = () => {
    emailjs
      .sendForm("gmail", "compra", form.current, "user_piv4O1t75gRunvQxYZAjJ")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  //submit compra
  const submitCompra = () => {
    setCarrito([]);
    sendEmail();
    addAlert("Compra confirmada!");
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
                  <td className="carrito-nombre w-25">
                    <p>{car.nombre}</p>
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
                    <i
                      onClick={() => handleDelete(car.id)}
                      className="bi bi-trash-fill"
                    ></i>
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
      <form ref={form} className="d-none">
        <input type="text" name="total" value={`$${carTotal}`} />
        <input type="text" name="to_name" value={activeUser.nombre} />
        <input type="text" name="to_email" value={activeUser.email} />
      </form>
    </main>
  );
};

export default Carrito;
