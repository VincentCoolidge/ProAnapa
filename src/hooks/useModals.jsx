import { useModalContext } from "@contexts/modalContext";

const useModals = () => {
  const { modalComponent, setModalComponent } = useModalContext();

  return {
    isModalOpened: Boolean(modalComponent),
    renderModal: () => modalComponent,
    openModal: (component) => setModalComponent(component),
    closeModal: () => setModalComponent(null),
  };
};

export default useModals;
