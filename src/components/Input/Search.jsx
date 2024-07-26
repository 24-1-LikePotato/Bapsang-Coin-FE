import React from "react";
import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 36px;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 299px;
  height: 45px;
  //margin: 0 38px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 2px solid #ffaa2f;
  padding-left: 17px;
  box-sizing: border-box;
  font-size: 12px;
  padding-right: 40px;
`;

const SearchIcon = styled(IoSearchOutline)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  color: #ffaa2f;
  cursor: pointer;
`;

export default function Search() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) alert("검색어를 입력해주세요");
    else navigate(`/home/Ingredients/${text}`);
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchContainer>
        <SearchInput
          placeholder="식재료를 입력하세요. (ex. 감자, 오이...)"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <SearchIcon onClick={handleSubmit} />
      </SearchContainer>
    </SearchForm>
  );
}
