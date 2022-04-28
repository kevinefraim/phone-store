import { useContext, useRef, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext";
import { StoreContext } from "../../../../context/StoreContext";
import CarritoTable from "../carritoTable/CarritoTable";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

import "./CarritoContainer.css";

import axios from "axios";

//alerta
const addAlert = (mensaje) => {
  Swal.fire({
    title: mensaje,
    background: "#fff",
    padding: "2rem",
    position: "center",
    showConfirmButton: false,
    timer: 1500,
    customClass: {
      title: "alert-title",
    },
  });
};

const CarritoContainer = () => {
  const form = useRef();
  const { activeUser } = useContext(AuthContext);
  const { cartId } = useParams();
  const [cartItems, setCartItems] = useState(null);
  const [cart, setCart] = useState(null);
  const { cartCounter, setCartCounter, handleCompra } =
    useContext(StoreContext);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

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

  const readUserItems = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/items/cart`,
        {
          headers: { "x-token": token },
        }
      );
      setCartItems(data.filteredItems);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCartTotal = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/cart`, {
      headers: { "x-token": token },
    });
    setCart(data?.cart);
  };

  useEffect(() => {
    readUserItems();
  }, []);

  useEffect(() => {
    getCartTotal();
  }, [cart]);

  //submit compra
  const submitCompra = () => {
    sendEmail();
    const nuevaCompra = {
      id: new Date().getTime(),
      usuario: activeUser.usuario,

      total: 1,
    };
    handleCompra(nuevaCompra);
    navigate("/");
    addAlert("Gracias por realizar la compra");
  };

  //agregar cantidad
  const addQuantity = async (qty, itemId) => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/items/update/${itemId}`,
        {
          quantity: qty + 1,
        },
        {
          headers: { "x-token": token },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  //quitar cantidad
  const subQuantity = async (qty, itemId) => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/items/update/${itemId}`,
        {
          quantity: qty - 1,
        },
        {
          headers: { "x-token": token },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  //delete item
  const onDelete = async (itemId) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/items/delete/one/${itemId}`,
        {
          headers: { "x-token": token },
        }
      );

      setCartItems(cartItems.filter((item) => item.id !== itemId));
      setCartCounter(cartCounter - 1);
    } catch (error) {
      console.log(error);
    }
  };

  const removeAllItems = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/items/delete/all`, {
        headers: { "x-token": token },
      });
      setCartCounter(0);
      setCartItems([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="container-fluid my-2 p-0">
      <div className="title-cart">
        <h2 className="mb-4">Carrito de compras</h2>
      </div>
      {cartItems?.length === 0 ? (
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
              {cartItems?.map((item) => (
                <CarritoTable
                  key={item.id}
                  cart={cart}
                  setCart={setCart}
                  token={token}
                  item={item}
                  addQuantity={addQuantity}
                  subQuantity={subQuantity}
                  onDelete={onDelete}
                />
              ))}
            </tbody>
          </table>
          <div className="d-flex flex-wrap justify-content-evenly align-items-center mt-5">
            <h5 className="fw-bolder">Total: ${cart?.total}</h5>
            <button onClick={removeAllItems} className="btn btn-danger">
              Vaciar carrito
            </button>
            <button onClick={submitCompra} className="btn btn-primary mt-3">
              Confirmar compra
            </button>
          </div>
        </div>
      )}
      <form ref={form} className="d-none">
        <input type="text" name="total" defaultValue={`$${cart?.total}`} />
        <input type="text" name="to_name" defaultValue={activeUser?.nombre} />
        <input type="text" name="to_email" defaultValue={activeUser?.email} />
      </form>
    </main>
  );
};

export default CarritoContainer;
