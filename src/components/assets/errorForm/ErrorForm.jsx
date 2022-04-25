const ErrorForm = ({ error }) => {
  return (
    <>
      <h6 className="text-light text-center bg-danger p-1 mt-1 rounded-3">
        {error}
      </h6>
    </>
  );
};

export default ErrorForm;
