import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { StoreContext } from "../../context/StoreContext";
import CompraDetail from "./compraDetail/CompraDetail";

const Compra = () => {
  const { activeUser } = useContext(AuthContext);
  const { compras } = useContext(StoreContext);

  //Filtramos las compras por usuario
  const ordenes = compras.filter(
    (compra) => compra.usuario === activeUser?.usuario
  );

  if (!activeUser) {
    return (
      <Link to="/login">
        <h2
          className="text-center mt-5"
          style={{ textDecoration: "underline" }}
        >
          Inicia sesión para ver tus compras
        </h2>
      </Link>
    );
  }

  if (ordenes.length === 0) {
    return (
      <h2 className="text-center mt-5">Todavía no hay ordenes para mostrar</h2>
    );
  }

  return (
    <section>
      <div className="text-center mt-3">
        <h2>Mis compras</h2>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Detalle</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {ordenes.map((orden) => (
            <CompraDetail key={orden.id} {...orden} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Compra;
