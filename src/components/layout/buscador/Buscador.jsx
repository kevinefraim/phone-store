import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Buscador = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${value}`);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={({ target }) => setValue(target.value)}
        className="rounded-3 p-0 w-100"
        type="text"
        placeholder="Búsqueda"
      />
    </form>
  );
};

export default Buscador;
