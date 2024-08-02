import React from 'react';
import styled from 'styled-components';

const RecipeImageContainer = styled.div`
  width: 23.438rem;
  height: 23.438rem;
  background-image: url(${props => props.imageURL});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default function RecipeImage({ imageURL }) {
  return <RecipeImageContainer imageURL={imageURL} />;
}
