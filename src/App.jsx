import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/HomePage"
import Loginpage from "./pages/Loginpage"
import Register from "./pages/Register"
import Error404 from "./pages/Error404"
import Navbar from './components/NavBar/Navbar';
import MoviesList from './pages/MoviesList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (


    <Router>
    
    <Navbar />
    <div className="App">
    <h1>Peliculitas</h1>
    </div>
    
      <Routes>
      <Route exact path="/" element ={<HomePage/>}/>
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/login" element={"..."} />
      <Route exact path="/lista-de-peliculas" element={<MoviesList/>}/>
      <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
