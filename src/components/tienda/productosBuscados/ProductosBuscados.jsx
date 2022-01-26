import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { StoreContext } from "../../../context/StoreContext";
import Cards from "../../layout/cards/Cards";

const ProductosBuscados = () => {
  const [productsSearched, setProductsSearched] = useState([]);
  const { search } = useLocation();
  const { products } = useContext(StoreContext);
  const searchParam = search.slice(3, search.length);

  useEffect(() => {
    setProductsSearched(
      products.filter(
        (prod) =>
          prod.nombre.toLowerCase().includes(searchParam) ||
          prod.marca.toLowerCase().includes(searchParam)
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
      <div className="mt-5">
        <h2 className="text-center">Resultados de búsqueda</h2>
      </div>
      <section className="container prod-container row">
        {productsSearched.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 col-sm-12">
            <Cards {...product} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default ProductosBuscados;
