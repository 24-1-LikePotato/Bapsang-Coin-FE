import React from 'react';
import styled from 'styled-components';

const DisplayImageContainer = styled.div`
  width: ${({ width }) => width || '95%'};
  height: ${({ height }) => height || 'auto'};
  border-radius: 25px;
  background-color: #ffefdc;
`;

// export default function ImageContainer({ width, height, imgSrc, }) {
//   return (
//     <DisplayImageContainer width={width} height={height} src={imgSrc}>
//     </DisplayImageContainer>
//   );
// }

export default function ImageContainer({ width, height, children, ...rest }) {
  return (
    <DisplayImageContainer width={width} height={height} {...rest}>
      {children}
    </DisplayImageContainer>
  );
}
