import SearchBar from "./SearchBar";
import MovieCards from "./MovieCards";

export default function Main({setSearch, getMovies, movies}){ 
    return(
        <>
        <SearchBar setSearch={setSearch} getMovies={getMovies} />
        <section className="frontpage">
            
            {movies.map((movie, index) => (
                <MovieCards key={index} title={movie.Title} poster={movie.Poster} year={movie.Year} imdbID={movie.imdbID} plot={movie.Plot}/> 
                ))}
        </section>
        </>
    );
}