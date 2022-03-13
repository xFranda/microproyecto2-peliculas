import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/Home/HomePage"
import Loginpage from "./pages/Loginpage/Loginpage"
import Register from "./pages/Register/Register"
import Error404 from "./pages/Error404"
import Navbar from './components/NavBar/Navbar';
import MoviesList from './pages/MovieList/MoviesList';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import history from './components/Search/history';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (


    <Router history={history}>
    
    <Navbar />
    <div className="App">
    </div>
    
      <Routes>
      <Route exact path="/" element ={<HomePage/>}/>
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/login" element={<Loginpage/>} />
      <Route exact path="/lista-de-peliculas" element={<MoviesList/>}/>
      <Route exact path="/movies/:movieId" element={<MovieDetails/>}/>
      <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
