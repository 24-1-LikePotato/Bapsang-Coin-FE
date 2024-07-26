import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import Search from "../components/Input/Search";
import Recommend from "../components/Home/Recommend";
import TodayPrice from "../components/Home/TodayPrice";
import TodayFood from "../components/Home/TodayFood";


const Background = styled.div`
  min-height: 100vh;
  background-color: #fff7ec;
`;

export default function Home() {
  return (
    <>
      <Background>
        <Search />
        <TodayPrice/>
        <Recommend />
        <TodayFood />
      </Background>
    </>
  );
}
