export default function SearchBar({setSearch,getMovies}){
    
    const handleSubmit = (event) =>{
        event.preventDefault()
    }

    const handleSearch = (event) =>{
        setSearch(event.target.value)
    }

        
    return(
     <form onSubmit={handleSubmit}>
        <input
        className="searchBar"
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