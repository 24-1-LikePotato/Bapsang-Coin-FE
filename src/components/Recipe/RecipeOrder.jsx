import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RecipeWhiteContainer from "./RecipeWhiteContainer";

const OrderList = styled.ol`
  width: 100%;
  font-family: 'OpenSans';
  font-weight: 400;
  font-size: 1rem;
  color: #3D3D3D;
  white-space: pre-wrap;
  padding-left: 1.5rem;
  margin: 0;
`;

const OrderItem = styled.li`
  margin-bottom: 0.5rem;
`;

export default function RecipeOrder({ recipeId }) {
  const [orderContent, setOrderContent] = useState([]);

  useEffect(() => {
    const fetchOrderContent = async () => {
      // API 호출 예시
      // const response = await fetch(`/api/recipes/${recipeId}/order`);
      // const data = await response.json();
      // setOrderContent(data.content);

      // 임시 데이터
      const tempContent = [
        "고구마는 깨끗이 씻어서 껍질을 벗기고 4cm 정도로 잘라준다.",
        "고구마는 깨끗이 씻어서 껍질을 벗기고 4cm 정도로 잘라준다.",
        "고구마는 깨끗이 씻어서 껍질을 벗기고 4cm 정도로 잘라준다.",
        "고구마는 깨끗이 씻어서 껍질을 벗기고 4cm 정도로 잘라준다.",
      ];
      
      setOrderContent(tempContent);
    };

    fetchOrderContent();
  }, [recipeId]);

  return (
    <RecipeWhiteContainer title='만드는 법'>
      <OrderList>
        {orderContent.map((step, index) => (
          <OrderItem key={index}>{step}</OrderItem>
        ))}
      </OrderList>
    </RecipeWhiteContainer>
  );
}