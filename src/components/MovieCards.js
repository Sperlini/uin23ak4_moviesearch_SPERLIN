import { useEffect, useState } from "react";
export default function MovieCards({title, year, img, imdbID}){
    
    
    
    
    const movID= `https://www.omdbapi.com/?i=${imdbID}&apikey=55ce959a`
    const [movieInfo, setMovieInfo] = useState([]);

    const pullMovieInfo = async() => {
        const url = movID;
        const response = await fetch(url);
        const data = await response.json();
        setMovieInfo(data);    
    }

    useEffect(()=>{
        pullMovieInfo()
    })
    
    
    return(
        <article className="moviecard">

            <img src={img} alt={title} />
            <section className="movieInfo">
            <h2>{title}</h2>
             <p className="p1">Published:{year}</p>
             <p className="p2">Genre:{movieInfo.Genre}</p>
             <p className="p3">Directed by:{movieInfo.Director}</p>
            
            {movieInfo.Awards !== '' && movieInfo.Awards !== 'N/A' &&
                    <p className="p4">Awards:{movieInfo.Awards}</p>
            }
            </section>
        </article>
    )}  