import axios from "axios";
import { useState } from "react";
import ErrorForm from "../assets/errorForm/ErrorForm";

import "./ContactoForm.css";

const ContactoForm = () => {
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const formReset = () => {
    setNombre("");
    setTel("");
    setMensaje("");
  };

  const contactSubmit = async (e) => {
    try {
      e.preventDefault();

      // if ([nombre, tel, mensaje].includes("")) {
      //   setError("Completa todos los campos");
      //   return;
      // }

      // if (tel.length < 10) {
      //   setError("El número de telefono no existe");
      //   return;
      // }

      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/message/create`,
        {
          fullName: nombre,
          phoneNumber: tel,
          message: mensaje,
        }
      );

      formReset();
      setError("");
      setMsg("Tu mensaje ha sido enviado!");
      setTimeout(() => {
        setMsg("");
      }, 2000);
    } catch (error) {
      setError(error.response.data.msg);
      console.log(error.response.data.msg);
    }
  };

  return (
    <main>
      <div className="contacto-container">
        <form onSubmit={contactSubmit} className="form-contacto">
          <div className="title d-flex flex-column align-items-center">
            <h2>Contactanos!</h2>
            <div className="mt-3">
              {msg !== "" && (
                <h3 className="text-light bg-success p-2 rounded-3">{msg}</h3>
              )}
              {error !== "" && (
                <ErrorForm error={"Debes rellenar todos los campos"} />
              )}
            </div>
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

export default ContactoForm;
