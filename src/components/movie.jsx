import React from 'react';
// import { AppBar } from '@mui/material';

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, overview, vote_average }) => (
    <div className="movie">
        <img src={IMAGE_API + poster_path} alt={title} />
        <div className="movie-info">
            <h3>{title}</h3>
            <span>{vote_average}</span>
        </div>
    </div>
);

export default Movie;