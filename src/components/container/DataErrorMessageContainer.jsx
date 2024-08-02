import React from 'react';
import styled from 'styled-components';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import StyledIcon from '../Button/StyledIcon';

const WrapGraphDataEmpty = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ $margin }) => $margin || 'auto 0'};
  max-height: 500px;
  font-weight: bold;
  color: #ffaa2f;
`;
const GraphDataEmptyText = styled.div`
  margin-left: 5px;
`;

export default function DataErrorMessageContainer({ children, margin }) {
  return (
    <WrapGraphDataEmpty $margin={margin}>
      <StyledIcon as={AiOutlineExclamationCircle} width='24px' height='24px' />
      <GraphDataEmptyText>{children}</GraphDataEmptyText>
    </WrapGraphDataEmpty>
  );
}
