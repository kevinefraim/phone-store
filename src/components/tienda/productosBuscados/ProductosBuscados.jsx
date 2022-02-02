import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { StoreContext } from "../../../context/StoreContext";
import Cards from "../../layout/cards/Cards";
import "./ProductosBuscados.css";

const ProductosBuscados = () => {
  const [productsSearched, setProductsSearched] = useState([]);
  const { search } = useLocation();
  const { products } = useContext(StoreContext);
  const searchParam = search.slice(3, search.length);

  useEffect(() => {
    setProductsSearched(
      products.filter(
        (prod) =>
          prod.nombre
            .toLowerCase()
            .includes(searchParam.trim().toLowerCase()) ||
          prod.marca.toLowerCase().includes(searchParam.trim().toLowerCase())
      )
    );
  }, [search]);

  if (productsSearched.length === 0) {
    return (
      <h2 className="text-center text-danger mt-5">
        No se encuentran resultados
      </h2>
    );
  }

  return (
    <main className="container">
      <div className="mt-5 busqueda-title">
        <h2>Resultados de búsqueda</h2>
      </div>
      <section className=" p-0 m-0 container prod-container row">
        {productsSearched.map((product) => (
          <div key={product._id} className="col-lg-4 col-md-6 col-sm-12">
            <Cards {...product} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default ProductosBuscados;
