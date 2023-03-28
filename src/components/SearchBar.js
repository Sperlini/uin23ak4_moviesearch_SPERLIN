export default function SearchResults({setSearch,getMovies}){
    
    const handleSubmit = (event) =>{
        event.preventdefault()
    }

    const handleSearch = (event) =>{
        setSearch(event.target.value)
    }

        
    return(
     <form onSubmit={handleSubmit}>
        <input
        className="seachBar"
        type="search"
        placeholder="Search for a movie"
        onChange={handleSearch}
        />
        <button className="searchButton" onClick={getMovies} type="submit">
                Search.....
        </button>



     </form>   
    )
}