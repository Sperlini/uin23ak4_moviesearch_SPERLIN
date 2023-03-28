import { useEffect, useState } from "react";
export default function MovieCards({title, year, img, imdbID}){
    
    
    
    
    const movID= `https://www.omdbapi.com/?i=${imdbID}&apikey=55ce959a`
    const [movInfo, setMovieInfo] = useState([]);

    const pullMovieInfo = async() => {
        const url = movID;
        const response = await fetch(url);
        const data = await response.json();
        setMovieInfo(data);    
    }

    useEffect(()=>{
        pullMovieInfo()
    })
    
    const imgUrl = img.startsWith('http')
    return(
        <article className="moviecard">

        <img src={img} alt={title} />
        <section className="movieInfo">
            <h2>{title}</h2>
             <p className="p1">{year}</p>
             <p className="p2">{movInfo.Genre}</p>
             <p className="p3">Directed by:{movInfo.Director}</p>
                {movInfo.Awards !== '' && movInfo.Awards !== 'N/A' &&
             <p className="p4">{movInfo.Awards}</p>
                }
        </section>
        </article>
    )}  