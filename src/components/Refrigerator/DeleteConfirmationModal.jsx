import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export default function DeleteConfirmationModal({ isVisible, onClose }) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          setIsFadingOut(false);
          onClose();
        }, 1000);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible && !isFadingOut) return null;

  return <DeleteCompleteModal $fadeOut={isFadingOut}>삭제가 완료되었습니다</DeleteCompleteModal>;
}

const DeleteCompleteModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(92, 92, 92, 0.9);
  color: #fff7ec;
  padding: 12px 20px;
  border-radius: 25px;
  z-index: 1000;
  animation: ${(props) => (props.$fadeOut ? fadeOut : fadeIn)} 1s forwards;
`;
