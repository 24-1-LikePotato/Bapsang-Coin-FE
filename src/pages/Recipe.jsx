import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import '../components/fonts/OpenSans.css';
import RecipeImage from '../components/Recipe/RecipeImage';
import RecipeIngredients from "../components/Recipe/RecipeIngredients";
import RecipeOrder from "../components/Recipe/RecipeOrder";
import RecipeInfo from "../components/Recipe/RecipeInfo";

const WrapRecipe = styled.div`
  background-color: #fff7ec;
  min-height: 100vh;
  padding-bottom: 4.5rem; // navbar 높이
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 80%;
  margin: 3rem 0;
  font-family: 'OpenSans';
  font-weight: 700;
  font-size: 1.5rem;
  color: #3D3D3D;
  text-align: center;
`

export default function Recipe() {
  const { IngredientId, RecipeId } = useParams();
  const [ recipe, setRecipe ] = useState({
    name: "",
    content: "",
    ingredient_list: "",
    image: "",
    calorie: 0,
    carb: 0,
    protein: 0,
    fat: 0,
    natrium: 0,
  });
  
  useEffect(() => {
    const apiURL = `https://zipbab-coin.p-e.kr`;
    const endpoint = `/main/recipe?name=${RecipeId}`;

    axios.get(apiURL + endpoint)
      .then((res) => {
        setRecipe({
          name: res.data.name,
          content: res.data.content,
          ingredient_list: res.data.ingredient_list,
          image: res.data.image,
          calorie: res.data.calorie,
          carb: res.data.carb,
          protein: res.data.protein,
          fat: res.data.fat,
          natrium: res.data.natrium,
        })
      })
      .catch(err => {
        console.error("Recipe name not provided");
      });
  }, [RecipeId]);

  return (
    <WrapRecipe>
      <RecipeImage
        imageURL={recipe.image}
      />
      <Title>
        {recipe.name}
      </Title>
      <RecipeIngredients ingredient_list={ recipe.ingredient_list }/>
      <RecipeOrder content={ recipe.content }/>
      <RecipeInfo calorie={ recipe.calorie } carb={ recipe.carb } protein={ recipe.protein } fat={ recipe.fat } natrium={ recipe.natrium }/>
    </WrapRecipe>
  );
}
