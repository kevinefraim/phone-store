import { useState } from "react";
import "./ModalForm";

const ModalForm = ({
  handleSubmit,
  nombre,
  marca,
  precio,
  desc,
  stock,
  activeProduct,
}) => {
  const [imagen, setImagen] = useState("");
  const [nombreEdit, setNombre] = useState(nombre);
  const [marcaEdit, setMarca] = useState(marca);
  const [precioEdit, setPrecio] = useState(precio);
  const [descEdit, setDesc] = useState(desc);

  const product = {
    nombre: nombreEdit,
    marca: marcaEdit,
    precio: precioEdit,
    desc: descEdit,
  };

  return (
    <div className="form-container">
      <h2>{activeProduct ? "Editar producto" : "Agregar producto"}</h2>
      <form
        onSubmit={(e) => handleSubmit(e, product, imagen)}
        className="form-modal"
      >
        {!activeProduct && (
          <div className="form-item">
            <label htmlFor="img">Imágen</label>
            <input
              value={imagen}
              onChange={({ target }) => setImagen(target.value)}
              type="text"
              placeholder="Ingrese nombre de imágen"
            />
          </div>
        )}
        <div className="form-item">
          <label htmlFor="name">Nombre</label>
          <input
            value={nombreEdit}
            onChange={({ target }) => setNombre(target.value)}
            type="text"
            placeholder="Ingrese el nombre"
          />
        </div>
        <div className="form-item">
          <label htmlFor="marca">Marca</label>
          <input
            value={marcaEdit}
            onChange={({ target }) => setMarca(target.value)}
            type="text"
            placeholder="Ingrese la marca"
          />
        </div>
        <div className="form-item">
          <label htmlFor="precio">Precio</label>
          <input
            value={precioEdit}
            onChange={({ target }) => setPrecio(target.value)}
            type="number"
            min={0}
            placeholder="Ingrese el precio"
          />
        </div>
        <div className="form-item">
          <label htmlFor="desc">Descripción</label>
          <input
            value={descEdit}
            onChange={({ target }) => setDesc(target.value)}
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
