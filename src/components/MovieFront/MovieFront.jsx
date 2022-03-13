import axios from "axios"
import {useEffect, useState} from "react"
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "../../pages/MovieList/MoviesList.module.css";


export default function MovieFront() {
    const [movies, setMovies] = useState([]);


    const fetchMovies = async() =>{
            
        try{
            const response = await axios.get(
                "https://api.themoviedb.org/3/movie/popular/?api_key=2c3a943259a8a1f468c4905ca720cff4");

        setMovies(response.data.results)
        } catch (error){
            console.log({error})
        }
    };
    const arr = [];
    setMovies(arr)
        useEffect(()=>{
        
        fetchMovies();
        
            },[]);
        

return(
        <div>  

            <ul className={styles.moviesList}>
               {console.log(arr)} 
                    {/* <MovieCard key={movie.id} movie={movie}/> */}
                    
            </ul>
        </div>
)
        }
    
    
