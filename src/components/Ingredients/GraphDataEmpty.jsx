import React from 'react';
import styled from 'styled-components';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import StyledIcon from '../Button/StyledIcon';

const WrapGraphDataEmpty = styled.div`
  display: flex;
  align-items: center;
  margin: auto 0;
  font-weight: bold;
  color: #ffaa2f;
`;
const GraphDataEmptyText = styled.div`
  margin-left: 5px;
`;

export default function GraphDataEmpty() {
  return (
    <WrapGraphDataEmpty>
      <StyledIcon as={AiOutlineExclamationCircle} width='24px' height='24px' />
      <GraphDataEmptyText> 데이터가 존재하지 않습니다</GraphDataEmptyText>
    </WrapGraphDataEmpty>
  );
}
