import { Shadow } from "./styled";
import { createPortal } from "react-dom";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "@components/Form";

import useModals from "@hooks/useModals";
import useOnClickOutside from "@hooks/useOnClickOutside";

const Modal = () => {
  const [opened, setOpened] = useState(true);
  const navigate = useNavigate();
  const modalRoot = document.getElementById("modal-root");
  const bodyElRef = useRef(null);

  console.log("here");

  const { closeModal } = useModals();

  const handleSetOpened = (newState) => {
    setOpened(newState);
    newState === false && closeModal();
  };

  const closeOnEscKeyown = (event) => {
    if (event.key === "Escape") {
      handleSetOpened(false);
    }
  };

  useEffect(() => {
    const bodyWidth = document.body.clientWidth;

    if (opened) {
      document.body.style.overflowY = "hidden";
      document.body.style.width = bodyWidth + "px";
    } else {
      document.body.style.width = "auto";
      document.body.style.overflowY = "unset";
    }

    return () => {
      document.body.style.width = "auto";

      document.body.style.overflowY = "unset";
    };
  }, [opened, navigate]);

  useOnClickOutside(bodyElRef, () => handleSetOpened(false));

  if (!modalRoot || !opened) return null;

  return createPortal(
    <Shadow>
      <div ref={bodyElRef}>
      </div>
    </Shadow>,
    modalRoot
  );
};

export default Modal;
