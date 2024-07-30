import React from 'react';
import styled from 'styled-components';
import StandardButton from '../Button/StandardButton';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const ModalText = styled.div`
  margin-bottom: 10px;
`;

export default function RefrigeratorModalOverlay({ onDelete, setModalOpen, id }) {
  const handleConfirmDelete = () => {
    onDelete(id);
    setModalOpen(false);
  };

  const handleCancelDelete = () => {
    setModalOpen(false);
  };
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalText>정말로 삭제하시겠습니까?</ModalText>
        <StandardButton accent='true' onClick={handleConfirmDelete} width='80px' height='30px' marginRight='12px'>
          Yes
        </StandardButton>
        <StandardButton onClick={handleCancelDelete} width='80px' height='30px'>
          No
        </StandardButton>
      </ModalContent>
    </ModalOverlay>
  );
}
