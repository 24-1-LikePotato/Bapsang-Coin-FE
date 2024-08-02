import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DataErrorMessageContainer from './DataErrorMessageContainer';

const DisplayImageContainer = styled.img`
  width: ${({ width }) => width || '95%'};
  height: ${({ height }) => height || 'auto'};
  border-radius: 25px;
  background-color: #ffefdc;
`;

const DisplayImageError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || '95%'};
  height: ${({ height }) => height || 'auto'};
  border-radius: 25px;
  background-color: #ffefdc;
`;

const DataErrorMessageText = styled.div`
  font-size: 14px;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || '95%'};
  height: ${({ height }) => height || 'auto'};
  border-radius: 25px;
  background-color: #ffefdc;
  font-size: 14px;
`;

export default function ImageContainer({ width, height, imgSrc, ...rest }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (imgSrc) {
      const img = new Image();
      img.src = imgSrc;
      img.onload = () => setIsLoading(false);
      img.onerror = () => setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [imgSrc]);

  useEffect(() => {
    if (imgSrc !== undefined) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [imgSrc]);

  if (isLoading) {
    return (
      <LoadingContainer width={width} height={height}>
        <DataErrorMessageContainer margin='80px 0'>
          <DataErrorMessageText>로딩중 ...</DataErrorMessageText>
        </DataErrorMessageContainer>
      </LoadingContainer>
    );
  }

  return imgSrc ? (
    <DisplayImageContainer width={width} height={height} src={imgSrc} {...rest} />
  ) : (
    <DisplayImageError width={width} height={height}>
      <DataErrorMessageContainer margin='80px 0'>
        <DataErrorMessageText>이미지가 존재하지 않습니다</DataErrorMessageText>
      </DataErrorMessageContainer>
    </DisplayImageError>
  );
}
