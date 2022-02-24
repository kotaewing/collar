import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar'
import Drawer from '@mui/material/Drawer'
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar />
      <NavBar></NavBar>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
