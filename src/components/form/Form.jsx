import "./Form.css";

const Form = () => {
  return (
    <div className="form-container">
      <form className="form-modal">
        <div className="form-item">
          <label htmlFor="img">Imágen</label>
          <input type="text" placeholder="Ingrese nombre de imágen" />
        </div>
        <div className="form-item">
          <label htmlFor="name">Nombre</label>
          <input type="text" placeholder="Ingrese el nombre" />
        </div>
        <div className="form-item">
          <label htmlFor="marca">Marca</label>
          <input type="text" placeholder="Ingrese la marca" />
        </div>
        <div className="form-item">
          <label htmlFor="img">Descripción</label>
          <input type="text" placeholder="Ingrese la descripción" />
        </div>
        <div className="form-item">
          <label htmlFor="stock">Stock</label>
          <input type="number" min={0} placeholder="Ingrese nombre de imágen" />
        </div>
        <button className="btn btn-outline-primary">Guardar cambios</button>
      </form>
    </div>
  );
};

export default Form;
