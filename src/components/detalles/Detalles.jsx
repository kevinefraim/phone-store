import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./Detalles.css";

const Detalles = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState();
  const { products } = useContext(StoreContext);
  const { id } = useParams();

  useEffect(() => {
    setProduct(products.find((prod) => prod.id == id));
  }, []);

  //onChange quantity
  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <main className="container-fluid">
      <div className="detalle-container">
        <div className="img-detalle">
          <img
            src={`${process.env.PUBLIC_URL}/assets/productos/${product.img}.png`}
            alt={product.nombre}
          />
        </div>
        <div className="detalle-body">
          <h1>{product.nombre}</h1>
          <h5>{product.desc}</h5>
          <p className="fw-bold">Precio: ${product.precio}</p>
          <p className="fw-bold">Marca: {product.marca}</p>
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
            <button className="btn btn-primary ">
              Agregar al carrito <i className="bi bi-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Detalles;
