import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { StoreContext } from "../../../context/StoreContext";
import ItemList from "../itemsList/ItemList";
import Modal from "react-modal";
import ModalForm from "../modalForm/ModalForm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "60%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AdminContainer = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const { handleLogoutAdmin } = useContext(AuthContext);
  const { handleEdit, handleAddAdmin } = useContext(StoreContext);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveProduct(null);
  };

  const onAdd = () => {
    openModal();
  };

  const handleSubmit = (e, product, imagen) => {
    e.preventDefault();
    if (activeProduct) {
      handleEdit(activeProduct, product);
    } else {
      const newProduct = {
        ...product,
        id: new Date().getTime(),
        img: imagen,
      };
      handleAddAdmin(newProduct);
    }
    closeModal();
  };

  return (
    <main>
      <div className="d-flex flex-wrap justify-content-evenly p-3">
        <h1>Panel de administración</h1>
        <button onClick={handleLogoutAdmin} className="btn btn-danger">
          Salir
        </button>
        <button onClick={onAdd} className="btn btn-success">
          Agregar producto
        </button>
      </div>
      <hr />
      <ItemList setActiveProduct={setActiveProduct} openModal={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalForm
          handleSubmit={handleSubmit}
          {...activeProduct}
          activeProduct={activeProduct}
        />
      </Modal>
    </main>
  );
};

export default AdminContainer;
