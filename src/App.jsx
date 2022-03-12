import logo from './logo.svg';
import './App.css';
import Homepage from "./pages/Homepage"
import Loginpage from "./pages/Loginpage"
import Register from "./pages/Register"
import Error404 from "./pages/Error404"
import Navbar from './components/NavBar/Navbar.module';
import { Router, Routes, Route } from 'react-router-dom';

function App() {
  return (


    <Router>
    <div className="App">
    <h1>Peliculitas</h1>
    </div>
    <Navbar/>
    
      <Routes>
      <Route path="/" element ={<Homepage/>}/>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="*" element={<Error404 />} />
      </Routes>
    



    </Router>
  );
}

export default App;
