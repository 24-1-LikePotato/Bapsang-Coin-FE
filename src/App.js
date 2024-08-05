import './App.css';
import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from './components/header/NavBar';
import NameHeader from './components/header/NameHeader';
import styled from 'styled-components';
import { useEffect } from 'react';
import { setNavigate } from './apis/ApiClient';

const WrapApp = styled.div`
  max-width: 430px;
  margin: auto;
  @media (min-width: 431px) {
    border-left: 0.5px solid #eee;
    border-right: 0.5px solid #eee;
  }
`;

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    setNavigate(navigate);
  }, [navigate]);

  return (
    <>
      <WrapApp>
        <NameHeader />
        <Outlet />
        <NavBar />
      </WrapApp>
    </>
  );
}

export default App;
