import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { StoreContext } from "../../../context/StoreContext";
import Modal from "react-modal";
import BuscadorAdmin from "../buscadorAdmin/BuscadorAdmin";
import ItemList from "../itemsList/ItemList";
import ModalForm from "../modalForm/ModalForm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "65%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AdminContainer = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [productsFiltered, setProductsFiltered] = useState([]);
  const { handleLogoutAdmin } = useContext(AuthContext);
  const { products, handleEdit, handleAddAdmin, handleDeleteAdmin } =
    useContext(StoreContext);

  //Abre el modal
  const openModal = () => {
    setIsOpen(true);
  };

  //Se cierra el modal y se depura el producto activo
  const closeModal = () => {
    setIsOpen(false);
    setActiveProduct(null);
  };

  //Se abre el modal al empezar a agregar
  const onAdd = () => {
    openModal();
  };

  //Evento que sucede cuando hacemos submit en el form de agregar/editar
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

  //Filtra por nombre y marca al escribir
  const handleSearch = () => {
    setProductsFiltered(
      products.filter(
        (product) =>
          product.nombre.toLowerCase().includes(searchValue) ||
          product.marca.toLowerCase().includes(searchValue)
      )
    );
  };

  return (
    <main>
      <div className="d-flex flex-wrap justify-content-evenly p-3">
        <h1>Panel de administración</h1>
        <button onClick={onAdd} className="btn btn-outline-success fw-bolder">
          Agregar producto
        </button>
        <button
          onClick={handleLogoutAdmin}
          className="btn btn-outline-danger fw-bolder"
        >
          Salir
        </button>
      </div>
      <hr />
      <BuscadorAdmin
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearch={handleSearch}
      />
      <ItemList
        products={products}
        handleDeleteAdmin={handleDeleteAdmin}
        setActiveProduct={setActiveProduct}
        openModal={openModal}
        productsFiltered={productsFiltered}
      />
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
