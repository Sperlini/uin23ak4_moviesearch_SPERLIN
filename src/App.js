
import './App.css';
import { useState, useEffect } from 'react';
import {Route, Routes} from 'react-router-dom'
import Main from './components/Main';
import Layout from './components/Layout';



function App() {
  const [movies , setMovies] = useState([])
  const [search, setSearch] = useState('James Bond')
  
  const getMovies = async() =>{
    
    const response = await fetch(`https://www.omdbapi.com/?s=${search}&type=movie&apikey=55ce959a`)
    const data = await response.json()
    setMovies(data.Search)

  }

  useEffect(() =>{
    getMovies()
  }, [])
  
  return (
    <Routes>
      <Route element={<Layout/>}>

        <Route index element={<Main movies={movies} setSearch={setSearch} getMovies={getMovies} />} />

      </Route>
    </Routes>
  );
}

export default App;
