
import { useParams } from "react-router-dom"

export default function MoviePage({getMovies}){
    const {slug} = useParams()
    const movie = getMovies.find((mov) => mov.slug === slug)

    return (
        <section>
            <h1>{movie.title}</h1>
            
        </section>
    )
}