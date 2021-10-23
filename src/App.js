import React, { useEffect, useState } from "react";
import './App.css';
import Header from './components/header';
import Movie from "./components/movie";


const FEATURED_API = "http://api.themoviedb.org/3/discover/movie?api_key=1be7dfda0d22e850b70add1f5d6ed771";

const SEARCH_API = "http://api.themoviedb.org/3/search/movie?api_key=1be7dfda0d22e850b70add1f5d6ed771&query=";


function App() {
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      })
  }, []);

  return (
    <div className="App">
      <Header/>
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie) => 
        <Movie key={movie.id} {...movie} />
      )}
      </div>
    </div>
    
  );
}

export default App;
