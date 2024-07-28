import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
  width: ${({ width }) => width || '190px'};
  height: ${({ height }) => height || '40px'};
  background-color: ${({ $accent }) => ($accent ? '#ffaa2f' : '#FFEFDC')};
  color: ${({ $accent }) => ($accent ? '#ffffff' : '#3D3D3D')};
  margin-right: ${({ $marginRight }) => $marginRight || '0px'};
  border: none;
  border-radius: 30px;
  cursor: pointer;
`;

// onClick이나 추가적인 요소들을 넣을려면 ...rest는 필수
export default function StandardButton({ width, height, accent, children, marginRight, ...rest }) {
  return (
    <StyleButton width={width} height={height} $accent={accent} $marginRight={marginRight} {...rest}>
      {children}
    </StyleButton>
  );
}
