import React from 'react';
import styled from 'styled-components';
import RecipeWhiteContainer from "./RecipeWhiteContainer";

const OrderList = styled.ol`
  font-family: 'OpenSans';
  font-weight: 400;
  font-size: 1rem;
  color: #3D3D3D;
  white-space: pre-wrap;
  padding-left: 1.5rem;
`;

const OrderItem = styled.li`
  margin-bottom: 0.5rem;
`;

export default function RecipeOrder({ content }) {
  const steps = content
    ? content.split('+').map(step => step.replace(/^\d+\.\s*/, '').trim())
    : [];

  return (
    <RecipeWhiteContainer title='만드는 법'>
      <OrderList>
        {steps.map((step, index) => (
          <OrderItem key={index}>{step}</OrderItem>
        ))}
      </OrderList>
    </RecipeWhiteContainer>
  );
}