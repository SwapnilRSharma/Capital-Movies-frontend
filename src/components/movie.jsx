import React from 'react';
// import { AppBar } from '@mui/material';
import FavoriteIconFilled from '@mui/icons-material/Favorite';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";
const height = '100%' ;
const Movie = ({ title, poster_path, overview, vote_average }) => (
    <div className="movie">
        {
            poster_path !=null ?
            <img src={IMAGE_API + poster_path} alt={title} />
            :
            <div style={{width : '100%' , height : '400px' , backgroundColor : 'grey'}}></div>
        }
      
        <div className="movie-info">
            <h3>{title}</h3>
            <span>{vote_average}</span>
            
        </div>

        <div className="movie-over">
            {/* <FavoriteIcon fontSize="large"/>
            <FavoriteIconFilled fontSize="large"/> */}
            <h2>Overview:</h2>
            <p>{overview}</p>
        </div>
    </div>
);

export default Movie;
