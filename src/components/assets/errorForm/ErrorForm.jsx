const ErrorForm = ({ error }) => {
  return (
    <>
      <h3 className="text-light text-center bg-danger">{error}</h3>
    </>
  );
};

export default ErrorForm;
