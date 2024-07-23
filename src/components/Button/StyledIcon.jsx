import React from 'react';
import styled from 'styled-components';

const IconStyle = styled.div`
  width: ${({ width }) => width || '24px'};
  height: ${({ height }) => height || '23.16px'};
  padding-bottom: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function StyledIcon({ as: IconComponent, width, height }) {
  return (
    <IconStyle width={width} height={height}>
      <IconComponent size={width} />
    </IconStyle>
  );
}
