import styles from "./MovieCard.module.css"

function MovieCard({movie}){
    const imgUrl = "https://image.tmdb.org/t/p/w300"+ movie.poster_path;
    return(
        
         <li className={styles.movieCard}>
            <img width = {230} height = {345} className ={styles.movieImg} src= {imgUrl} alt = {movie.title}/>
             {movie.title}
             
             </li>

    )

}

export default MovieCard;