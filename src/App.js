import './App.css';
import { useState } from 'react';
import {Route, Routes} from 'react-router-dom'

function App() {
  const [movies , setMovies] = useState([])
  const [search, setSearch] = useState('James Bond')
  
  const getMovies = async() =>{
    
    const response = await fetch (`https://www.omdbapi.com/?s=${search}&type=movie&apikey=55ce959a`)
    const data = await response.json()
    setMovies(data.seach)

  }

  useEffect(() =>{
    getMovies()
  }, [])
  
  return (
    <Routes>
      <Route>

        <Route index element={<Main />} />

      </Route>
    </Routes>
  );
}

export default App;
