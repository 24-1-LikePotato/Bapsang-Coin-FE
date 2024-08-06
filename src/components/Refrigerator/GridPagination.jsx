import React from 'react';
import { GoDotFill } from 'react-icons/go';
import styled from 'styled-components';

export default function GridPagination({ idx, maxPageIdx }) {
  const pages = typeof maxPageIdx === 'number' ? [...Array(maxPageIdx).keys()] : [];

  return (
    <>
      <WrapGridPagination>
        {pages.map((page) => (
          <StyledDot key={page} $isActive={page === idx} />
        ))}
      </WrapGridPagination>
    </>
  );
}

const WrapGridPagination = styled.div`
  display: flex;
  margin: 10px 0;
`;

const StyledDot = styled(GoDotFill)`
  color: ${(props) => (props.$isActive ? 'gray' : 'darkgray')};
`;
