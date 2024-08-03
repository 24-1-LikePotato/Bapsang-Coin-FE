import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/header/NavBar';
import NameHeader from './components/header/NameHeader';
import styled from 'styled-components';

const WrapApp = styled.div`
  max-width: 375px;
  margin: auto;
  border-left: 0.5px solid #eee;
  border-right: 0.5px solid #eee;
`;

function App() {
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
