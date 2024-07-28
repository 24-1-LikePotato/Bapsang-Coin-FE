import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const HorizontalContainer = styled.div`
  width: ${({ width }) => width || '95%'};
  height: ${({ height }) => height || 'auto'};
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden; /* 세로 스크롤 방지 */
  cursor: grab;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function HorizontalScrollContainer({ height, width, children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };
    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <HorizontalContainer ref={containerRef} width={width} height={height}>
      {children}
    </HorizontalContainer>
  );
}
