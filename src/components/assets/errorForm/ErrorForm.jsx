const ErrorForm = ({ error }) => {
  return (
    <>
      <h3 className="text-light text-center bg-danger p-2 rounded-3">
        {error}
      </h3>
    </>
  );
};

export default ErrorForm;
