import React from "react";
import { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
  border-radius: 10px;
  border: 1px solid #ccc;
`;

const UncontrolledModal = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}> show modal</button>
      {open && (
        <ModalBackground onClick={() => setOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpen(false)}>close</button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

export default UncontrolledModal;
