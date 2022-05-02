import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { StoreContext } from "../../../context/StoreContext";
import Swal from "sweetalert2";
import useFetch from "../../../hooks/useFetch";

import "./ProductDetail.css";
import axios from "axios";

const addAlert = () => {
  Swal.fire({
    title: "Has agregado el producto al carrito!",
    background: "#fff",
    padding: "2rem",
    position: "center",
    showConfirmButton: false,
    timer: 800,
    customClass: {
      title: "alert-title",
    },
  });
};

const ProductDetail = () => {
  const [added, setAdded] = useState(false);
  const { activeUser } = useContext(AuthContext);
  const { cartCounter, setCartCounter } = useContext(StoreContext);
  const { id } = useParams();
  const { data } = useFetch(`${process.env.REACT_APP_API_URL}/phones/${id}`);
  const [error, setError] = useState("");
  const { phone } = data;

  const onAdd = async () => {
    if (activeUser === null)
      return setError("Inicia sesión para agregar al carrito");
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/items/create`,
        {
          phone: phone?.id,
          quantity: 1,
        },
        {
          headers: { "x-token": token },
        }
      );
      setAdded(true);
      setCartCounter(cartCounter + 1);

      addAlert();
    } catch (error) {
      setError(error.response);
    }
  };

  return (
    <main className="container-fluid">
      {error !== "" && (
        <div className="error">
          <Link to="/login">
            <h4 className="text-center bg-danger text-light mt-5 p-2">
              {error}
            </h4>
          </Link>
        </div>
      )}
      <div className="detalle-container">
        <img
          height={800}
          className="img-responsive"
          src={phone?.image.url}
          style={{ objectFit: "contain" }}
          alt={phone?.name}
        />
        <div className="detalle-body">
          <h1>{phone?.name}</h1>
          <h5>{phone?.desc}</h5>
          <p className="fw-bold">Precio: ${phone?.price}</p>
          <p className="fw-bold">Marca: {phone?.brand.name}</p>
          <p className="fw-bold">Descripción: {phone?.description}</p>
          {added ? (
            <Link to="/carrito">
              <button className="btn btn-primary ">Continuar al carrito</button>
            </Link>
          ) : (
            <div className="btn-compra">
              <button onClick={onAdd} className="btn btn-primary ">
                Agregar al carrito <i className="bi bi-cart"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
