import React, { useEffect, useState } from "react";
import '../App.css';
import Header from './header';
import Movie from "./movie";
import Login from './login';
import {FormControl, Select, InputLabel, MenuItem , Container} from '@mui/material'

// const FEATURED_API = "http://api.themoviedb.org/3/discover/movie?api_key=1be7dfda0d22e850b70add1f5d6ed771";
const FEATURED_API = "http://localhost:3000/movies";

const SEARCH_API = "http://api.themoviedb.org/3/search/movie?api_key=1be7dfda0d22e850b70add1f5d6ed771&query=";


function HomePage() {
  const [ movies, setMovies ] = useState([]);
    const [filter , setFilter] = useState('popularity');
  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      })
  }, []);
  useEffect(()=>{
      console.log(filter)
      fetch(FEATURED_API + "?sort_by=" + filter)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      })

  },[filter]);
  return (
 
    <div className="App">
      <Header/>
      <Container className="container-main">
      <FormControl className = "mainDropdown">
        <InputLabel id="demo-simple-select-label" style={{color:'black' , fontSize:'28px' , fontWeight:'700' , marginTop:'1rem'}}>View by</InputLabel>
        <Select
          labelId="select-sort-by-label"
          id="select-select-sort-by"
          value={filter}
          label="Sort by"
          onChange={(e) => setFilter(e.target.value)}
          className="menu"
        >
          
          <MenuItem value={'popularity'}>Popularity</MenuItem>
          <MenuItem value={'releaseDate'}>Release Date</MenuItem>
          <MenuItem value={'favorite'}>Favorites</MenuItem>
        </Select>
      </FormControl>
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie) => 
        <Movie key={movie.id} {...movie} />
      )}
     
      </div>
      </Container>
       {/* <Login/> */}
    </div>
   

  );
}

export default  HomePage;
