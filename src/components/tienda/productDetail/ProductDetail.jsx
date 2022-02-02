import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { StoreContext } from "../../../context/StoreContext";
import Swal from "sweetalert2";
import useFetch from "../../../hooks/useFetch";

import "./ProductDetail.css";

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
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { handleAdd } = useContext(StoreContext);
  const { activeUser } = useContext(AuthContext);
  const { id } = useParams();
  const { data } = useFetch(
    `https://phone-storenyk.herokuapp.com/api/products/product/${id}`
  );
  const [error, setError] = useState("");

  useEffect(() => {
    setProduct(data.product);
  }, [data.product]);

  //onChange quantity
  const handleChange = ({ target }) => {
    const qtyChange = target.value;
    setQuantity(parseInt(qtyChange));
  };

  const onAdd = () => {
    if (activeUser === null)
      return setError("Inicia sesión para agregar al carrito");
    handleAdd(product, quantity);
    setAdded(true);
    addAlert();
    setError("");
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
          src={product?.img}
          style={{ objectFit: "contain" }}
          alt={product?.nombre}
        />
        <div className="detalle-body">
          <h1>{product?.nombre}</h1>
          <h5>{product?.desc}</h5>
          <p className="fw-bold">Precio: ${product?.precio}</p>
          <p className="fw-bold">Marca: {product?.marca}</p>
          {added ? (
            <Link to="/carrito">
              <button className="btn btn-primary ">Continuar al carrito</button>
            </Link>
          ) : (
            <div className="btn-compra">
              <div className="qty-select">
                <label htmlFor="qty">Cantidad:</label>
                <select onChange={handleChange} value={quantity} name="qty">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
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
