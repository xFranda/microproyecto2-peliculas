import axios from "axios"
import {useEffect, useState} from "react"
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./MoviesList.module.css";
import { get } from "../../utils/httpClient";
import { Search } from "../../components/Search/Search";
import { Spinner } from "../../components/Spinner/Spinner";
import { useQuery } from "../../hooks/useQuery";
import { Paginacion } from "../../components/Paginacion/Paginacion";
import ReactPaginate from "react-paginate";

export default function MoviesList() {
    const [movies, setMovies] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setcurrentPage] = useState(0);

    const query = useQuery();
    const search = query.get("search");
    
    useEffect(() => {

      setIsLoading(true);

      const handlePageChange = (pages) =>{
        setcurrentPage(pages.page);
      }
      const searchUrl = search
        ? "/search/movie?query=" + search
        :"/discover/movie";
      get(searchUrl).then((data) => {
        setMovies(data.results);
        setIsLoading(false);
        console.log(data.page)
        setcurrentPage(data.page);
        
      });
      
      

    }, [search]);

    if (isLoading) {
      return <Spinner />;
    }


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
            <Search/>
            <ul className={styles.moviesList}>
                {movies.map((movie) =>{
                    return(
                            <MovieCard key={movie.id} movie={movie}/>
                    );
                    })}
            </ul>
            <ReactPaginate
					  pageCount={pageCount}
					  pageRange={2}
					  marginPagesDisplayed={2}
					  onPageChange={''}
					  containerClassName={'container'}
					  previousLinkClassName={'page'}
					  breakClassName={'page'}
					  nextLinkClassName={'page'}
					  pageClassName={'page'}
					  disabledClassNae={'disabled'}
					  activeClassName={'active'}
				    />
              

            
            
        </div>
 ); 

        }

