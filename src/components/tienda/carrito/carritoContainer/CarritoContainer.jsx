import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext";
import { StoreContext } from "../../../../context/StoreContext";
import CarritoTable from "../carritoTable/CarritoTable";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

import "./CarritoContainer.css";

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

const CarritoContainer = () => {
  const form = useRef();
  const { activeUser } = useContext(AuthContext);
  const {
    carrito,
    setCarrito,
    handleAddQty,
    handleSub,
    handleDelete,
    handleClear,
    handleCompra,
  } = useContext(StoreContext);
  const navigate = useNavigate();

  const carTotal = carrito.reduce(
    (price, car) => price + car.precio * car.qty,
    0
  );

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
    sendEmail();
    const nuevaCompra = {
      id: new Date().getTime(),
      usuario: activeUser.usuario,
      detalle: carrito,
      total: carTotal,
    };
    handleCompra(nuevaCompra);
    navigate("/");
    addAlert("Gracias por realizar la compra");
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
            <tbody className="products-container">
              {carrito.map((car) => (
                <CarritoTable
                  key={car.id}
                  {...car}
                  car={car}
                  handleAddQty={handleAddQty}
                  handleDelete={handleDelete}
                  handleSub={handleSub}
                />
              ))}
            </tbody>
          </table>
          <div className="d-flex flex-wrap justify-content-evenly align-items-center mt-5">
            <h5 className="fw-bolder">Total: ${carTotal}</h5>
            <button onClick={handleClear} className="btn btn-danger">
              Vaciar carrito
            </button>
            <button onClick={submitCompra} className="btn btn-primary mt-3">
              Confirmar compra
            </button>
          </div>
        </div>
      )}
      <form ref={form} className="d-none">
        <input type="text" name="total" defaultValue={`$${carTotal}`} />
        <input type="text" name="to_name" defaultValue={activeUser?.nombre} />
        <input type="text" name="to_email" defaultValue={activeUser?.email} />
      </form>
    </main>
  );
};

export default CarritoContainer;
