import { Shadow } from "./styled";
import { createPortal } from "react-dom";
import { useRef } from "react";
import Form from "components/Form";

const Modal = () => {
  const modalRoot = document.getElementById("modal-root");
  const bodyElRef = useRef(null);

  return createPortal(
    <Shadow>
      <div ref={bodyElRef}>
        <Form />
      </div>
    </Shadow>,
    modalRoot
  );
};

export default Modal;
