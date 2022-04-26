import ErrorForm from "../../assets/errorForm/ErrorForm";

const LoginForm = ({
  children,
  error,
  email,
  pass,
  handleLog,
  setEmail,
  setPass,
}) => {
  console.log(error);
  return (
    <form onSubmit={handleLog} className="form-login">
      <div className="title d-flex flex-column">
        <h2 className="text-center">Inicia Sesión</h2>
        {error && typeof error.msg === "string" && (
          <ErrorForm error={error.msg} />
        )}
      </div>
      <div className="form-item">
        <label htmlFor="email">Email de Usuario</label>
        <input
          onChange={({ target }) => setEmail(target.value)}
          value={email}
          type="text"
          name="email"
          placeholder="Ingrese su email"
        />
        {error?.msg?.email && <ErrorForm error={error?.msg.email[0]} />}
      </div>
      <div className="form-item">
        <label htmlFor="password">Contraseña</label>
        <input
          onChange={({ target }) => setPass(target.value)}
          value={pass}
          type="password"
          name="password"
          placeholder="Ingrese su contraseña"
          min={0}
        />
        {error?.msg?.password && <ErrorForm error={error?.msg.password[0]} />}
      </div>
      {children}
      <div className="form-btn">
        <button className="btn btn-light" type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
