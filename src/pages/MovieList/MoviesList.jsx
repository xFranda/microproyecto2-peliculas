import axios from "axios"
import {useEffect, useState} from "react"
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./MoviesList.module.css";
import { get } from "../../utils/httpClient";


export default function MoviesList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        get("/discover/movie").then((data) => {
          setMovies(data.results);
        });
      }, []);
    // const fetchMovies = async() =>{
            
    //     try{
    //         const response = await axios.get(
    //             "https://api.themoviedb.org/3/movie/popular/?api_key=2c3a943259a8a1f468c4905ca720cff4");

    //     setMovies(response.data.results)
    //     } catch (error){
    //         console.log({error})
    //     }
    // };

    //     useEffect(()=>{
    //     fetchMovies();
    //         },[]);
        

return(
        <div>  

            <ul className={styles.moviesList}>
                {movies.map((movie) =>{
                    return(
                            <MovieCard key={movie.id} movie={movie}/>

                    );
                    
                    })}
            </ul>
        </div>
 ); 

        }

