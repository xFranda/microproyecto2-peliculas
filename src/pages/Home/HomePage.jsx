import MovieCard from "../../components/MovieCard/MovieCard"
import MoviesList from "../MovieList/MoviesList"
import axios from "axios"
import {useEffect, useState} from "react"
import {db} from "../../utils/firebase-config"
import MovieFront from "../../components/MovieFront/MovieFront"


export default function Homepage(){
const [movies, setMovies] = useState([]);

const addNewMovie = (newMovie)=> {
    setMovies([...movies, newMovie]);

}

const fetchPelis = () => {
    const pelis = db.collection("peliculas")
    pelis
    .get()
    .then((data)=>{
        const arr = [];

        data.docs.forEach((element)=>{
            console.log({data: element.data()})
            arr.push({...element.data})

        });

        setMovies(arr);


    })
    .catch((error) => {
        console.log(error);

    });

}

useEffect(() =>{
    fetchPelis();
    
}, [])


    return(
        <div>
            <h1 className="titulo">Bienvenido</h1>
            

            
        
                
        

        </div>
    )


}