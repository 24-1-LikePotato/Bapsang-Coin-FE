import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/header/NavBar';
import NameHeader from './components/header/NameHeader';

function App() {
  return (
    <>
      <NameHeader />
      <Outlet />
      <NavBar />
    </>
  );
}

export default App;
