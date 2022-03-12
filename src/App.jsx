import logo from './logo.svg';
import './App.css';
import Homepage from "./pages/Homepage"
import Loginpage from "./pages/Loginpage"
import Register from "./pages/Register"
import Error404 from "./pages/Error404"
import Navbar from './components/NavBar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (


    <Router>
    
    <Navbar />
    <div className="App">
    <h1>Peliculitas</h1>
    </div>
    
      <Routes>
      <Route exact path="/" element ={"..."}/>
      <Route exact path="/register" element={"..."} />
      <Route exact path="/login" element={"..."} />
      <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
