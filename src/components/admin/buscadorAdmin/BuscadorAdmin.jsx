const BuscadorAdmin = ({ searchValue, setSearchValue, handleSearch }) => {
  return (
    <div className="d-flex justify-content-center">
      <input
        className="form-control mb-3 mt-3 w-50 fw-bolder border-dark"
        type="search"
        value={searchValue}
        placeholder="Buscar..."
        onChange={({ target }) => setSearchValue(target.value)}
        onKeyUp={handleSearch}
      />
    </div>
  );
};

export default BuscadorAdmin;
