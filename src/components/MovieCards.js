import { useEffect, useState } from "react";
export default function MovieCards({title, year, poster, imdbID}){
    
    
    
    
    const movID= `https://www.omdbapi.com/?i=${imdbID}&apikey=55ce959a`
    const [movieInfo, setMovieInfo] = useState([]);

    const pullMovieInfo = async() => {
        const url = movID;
        const response = await fetch(url);
        const data = await response.json();
        setMovieInfo(data);
        console.log(movieInfo)    
    }

    useEffect(()=>{
        pullMovieInfo()
    })
    
    
    return(
        <article className="moviecard">
        
            <img src={poster} />
            <section className="movieInfo">
            <h2>{title}</h2>
            <section className="stylemovierating"><p>MovieScore:</p>
             <h2>{movieInfo.imdbRating}/10</h2></section>
            
             <p>Runtime:{movieInfo.Runtime}</p>
             <p className="stylePublish">Published:..{year}{movieInfo.released}</p>
             <p className="styleGenre">Genre:..{movieInfo.Genre}</p>
             <p className="styleDirector">Directed by:...{movieInfo.Director}</p>
             <p className="styleDesc">Description:..{movieInfo.Plot}</p>
             <p className="styleAwards">Awards:..{movieInfo.Awards}</p>
            
            </section>
        </article>
    )}  