import "./Contacto.css";
import Swal from "sweetalert2";
import { useState } from "react";

//alerta
const addAlert = (mensaje) => {
  Swal.fire({
    title: mensaje,
    background: "#fff",
    padding: "2rem",
    position: "center",
    showConfirmButton: false,
    timer: 900,
    customClass: {
      title: "alert-title",
    },
  });
};

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [mensaje, setMensaje] = useState("");

  const contactSubmit = (e) => {
    e.preventDefault();
    if ([nombre, tel, mensaje].includes(""))
      return addAlert("Completa todos los campos");
    if (tel.length < 10) return addAlert("El número de telefono no existe");

    addAlert("Tu mensaje ha sido enviado!");
    setNombre("");
    setTel("");
    setMensaje("");
  };
  return (
    <main>
      <div className="contacto-container">
        <form onSubmit={contactSubmit} className="form-contacto">
          <div className="title">
            <h1>Contactanos!</h1>
          </div>
          <div className="form-item">
            <label htmlFor="fullName">Nombre y apellido</label>
            <input
              value={nombre}
              onChange={({ target }) => setNombre(target.value)}
              type="text"
              name="fullName"
              placeholder="Escriba su nombre completo"
            />
          </div>
          <div className="form-item">
            <label htmlFor="fullName">Teléfono</label>
            <input
              value={tel}
              onChange={({ target }) => setTel(target.value)}
              type="number"
              name="fullName"
              placeholder="Escriba su número celular"
              min={0}
            />
          </div>
          <div className="form-item">
            <label htmlFor="fullName">Mensaje</label>
            <textarea
              value={mensaje}
              onChange={({ target }) => setMensaje(target.value)}
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
