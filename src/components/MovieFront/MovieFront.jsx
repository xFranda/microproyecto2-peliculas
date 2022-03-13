import axios from "axios"
import {useEffect, useState} from "react"
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "../../pages/MovieList/MoviesList.module.css";
import { useQuery } from "../../hooks/useQuery";
import { get } from "../../utils/httpClient";
import { Spinner } from "../Spinner/Spinner";


export default function MovieFront() {
    const [movies, setMovies] = useState([]);
    const [upcoming,setUpcoming] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
 

    const query = useQuery();
    const search = query.get("search");
    

useEffect(() => {

setIsLoading(true);
const searchUrl = search
? "search/movie?query=" + search
:"/discover/movie";
get(searchUrl).then((data) => {
setMovies(data.results);
setIsLoading(false);

const upcomingUrl = "/movie/upcoming"
get(upcomingUrl).then((data) => {
    setUpcoming(data.results);
    setIsLoading(false);
})

});



}, [search]);


if (isLoading) {
    return <Spinner />;
  }

return(
        <div>  

            <ul className={styles.moviesList}>
               {movies.map((movie)=>
                <MovieCard key={movie.id} movie={movie}/>
               )}
                    
                    
            </ul>
            <h1>¡Siguientes estrenos!</h1>

            <ul className={styles.moviesList}>
               {upcoming.map((movie)=>
                <MovieCard key={movie.id} movie={movie}/>
               )}
                    
                    
            </ul>
        </div>
)
        }
    
    
