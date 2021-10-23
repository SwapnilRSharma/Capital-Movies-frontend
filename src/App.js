import React, { useEffect, useState } from "react";
import './App.css';
import Header from './components/header';
import Movie from "./components/movie";
import Login from './components/login';
import Router from './appRoutes';
import {FormControl, Select, InputLabel, MenuItem} from '@mui/material'

const FEATURED_API = "http://api.themoviedb.org/3/discover/movie?api_key=1be7dfda0d22e850b70add1f5d6ed771";

const SEARCH_API = "http://api.themoviedb.org/3/search/movie?api_key=1be7dfda0d22e850b70add1f5d6ed771&query=";


function App() {

  return (
    <Router>
  
    </Router>

  );
}

export default App;
