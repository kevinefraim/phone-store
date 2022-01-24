import "./Contacto.css";

const Contacto = () => {
  return (
    <main>
      <div className="contacto-container">
        <form className="form-contacto">
          <div className="title">
            <h1>Contactanos!</h1>
          </div>
          <div className="form-item">
            <label htmlFor="fullName">Nombre y apellido</label>
            <input
              type="text"
              name="fullName"
              placeholder="Escriba su nombre completo"
              pattern="[A-Za-z]"
            />
          </div>
          <div className="form-item">
            <label htmlFor="fullName">Teléfono</label>
            <input
              type="number"
              name="fullName"
              placeholder="Escriba su número celular"
              min={0}
            />
          </div>
          <div className="form-item">
            <label htmlFor="fullName">Mensaje</label>
            <textarea
              name="fullName"
              rows={8}
              placeholder="Escriba su mensaje"
            ></textarea>
          </div>
          <div className="form-btn">
            <button className="btn btn-outline-primary" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Contacto;
