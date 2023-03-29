
import './App.css';
import { useState, useEffect } from 'react';
import {Route, Routes} from 'react-router-dom'
import Main from './components/Main';
import Layout from './components/Layout';
import './css/main.css'
import MoviePage from './components/MoviePage';


function App() {
  const [movies , setMovies] = useState([])
  const [search, setSearch] = useState('James Bond')
  
  const getMovies = async() =>{
    
    const response = await fetch(`https://www.omdbapi.com/?s=${search}&type=movie&apikey=55ce959a`)
    const data = await response.json()
    setMovies(data.Search)
    console.log(data)
    
  }
 
  useEffect(() =>{
    getMovies()
  },[])
  
  return (
    <Routes>
      <Route element={<Layout/>}>

        <Route index element={<Main movies={movies} setSearch={setSearch} getMovies={getMovies} />} />
        <Route path=':slug' element={<MoviePage recipes={getMovies} />}/>
      </Route>
    </Routes>
  );
}
 //Inspirert av recipe api samt news api brukt i forelesning. 
export default App;
