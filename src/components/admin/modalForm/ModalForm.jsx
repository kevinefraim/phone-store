import { useState } from "react";

import "./ModalForm";

const ModalForm = ({
  handleSubmit,
  nombre,
  marca,
  precio,
  desc,
  activeProduct,
}) => {
  const [imagenForm, setImagenForm] = useState("");
  const [nombreForm, setNombreForm] = useState(nombre);
  const [marcaForm, setMarcaForm] = useState(marca);
  const [precioForm, setPrecioForm] = useState(precio);
  const [descForm, setDescForm] = useState(desc);

  const product = {
    nombre: nombreForm,
    marca: marcaForm,
    precio: precioForm,
    desc: descForm,
  };

  return (
    <div className="form-container">
      <h2>{activeProduct ? "Editar producto" : "Agregar producto"}</h2>
      <form
        onSubmit={(e) => handleSubmit(e, product, imagenForm)}
        className="form-modal"
      >
        {!activeProduct && (
          <div className="form-item">
            <label htmlFor="img">Imágen</label>
            <input
              value={imagenForm}
              onChange={({ target }) => setImagenForm(target.value)}
              type="text"
              placeholder="Ingrese nombre de imágen"
            />
          </div>
        )}
        <div className="form-item">
          <label htmlFor="name">Nombre</label>
          <input
            value={nombreForm}
            onChange={({ target }) => setNombreForm(target.value)}
            type="text"
            placeholder="Ingrese el nombre"
          />
        </div>
        <div className="form-item">
          <label htmlFor="marca">Marca</label>
          <input
            value={marcaForm}
            onChange={({ target }) => setMarcaForm(target.value)}
            type="text"
            placeholder="Ingrese la marca"
          />
        </div>
        <div className="form-item">
          <label htmlFor="precio">Precio</label>
          <input
            value={precioForm}
            onChange={({ target }) => setPrecioForm(target.value)}
            type="number"
            min={0}
            placeholder="Ingrese el precio"
          />
        </div>
        <div className="form-item">
          <label htmlFor="desc">Descripción</label>
          <input
            value={descForm}
            onChange={({ target }) => setDescForm(target.value)}
            type="text"
            placeholder="Ingrese la descripción"
          />
        </div>
        <button className="btn btn-outline-primary">Guardar cambios</button>
      </form>
    </div>
  );
};

export default ModalForm;
