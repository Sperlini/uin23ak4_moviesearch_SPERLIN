import { useEffect, useState } from "react";
export default function MovieCards({title, year, poster, imdbID}){
 
    
    
    
    const movID= `https://www.omdbapi.com/?i=${imdbID}&page&apikey=55ce959a`              //imdbID innholder alt info(som er tilgjengelig) innen filmene vi får i søkeresultat og ferdig på fortsiden. 
    const [movieInfo, setMovieInfo] = useState([]);

    const pullMovieInfo = async() => {
        const response = await fetch(movID);
        const data = await response.json();
        setMovieInfo(data);
        console.log(movieInfo)    
    }

    useEffect(()=>{
        pullMovieInfo()
    })
    
    return(
        
        <article className="moviecard">
        
            <img className="stylePoster" src={poster} />
            <section className="movieInfo">
            <h2>{title}</h2>
            <section className="stylemovierating">
             <p>MovieScore:</p>
             <h2>{movieInfo.imdbRating}/10</h2></section>
             <h4>Runtime:</h4>
             <p className="styleRuntime">{movieInfo.Runtime}</p>
             <h4>Published:</h4>
             <p className="stylePublish">{year}{movieInfo.released}</p>
             <h4>Directed by:</h4>
             <p className="styleDirector">{movieInfo.Director}</p>
             <h4>Genre:</h4>
             <p className="styleGenre">{movieInfo.Genre}</p>
             <h4>Description:</h4>
             <p className="styleDesc">{movieInfo.Plot}</p>
             <h4>Awards:</h4>
             <p className="styleAwards">{movieInfo.Awards}</p>
            
            </section>
        </article>
    )}  