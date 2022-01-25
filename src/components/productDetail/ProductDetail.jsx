import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { StoreContext } from "../../context/StoreContext";
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
  const { products, handleAdd } = useContext(StoreContext);
  const { id } = useParams();

  useEffect(() => {
    setProduct(products.find((prod) => prod.id === id));
  }, []);

  //onChange quantity
  const handleChange = ({ target }) => {
    const qtyChange = target.value;
    setQuantity(parseInt(qtyChange));
  };

  const onAdd = () => {
    handleAdd(product, quantity);
    setAdded(true);
    addAlert();
  };

  return (
    <main className="container-fluid">
      <div className="detalle-container">
        <img
          height={800}
          src={`${process.env.PUBLIC_URL}/assets/productos/${product.img}.png`}
          style={{ objectFit: "contain" }}
          alt={product.nombre}
        />
        <div className="detalle-body">
          <h1>{product.nombre}</h1>
          <h5>{product.desc}</h5>
          <p className="fw-bold">Precio: ${product.precio}</p>
          <p className="fw-bold">Marca: {product.marca}</p>
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
