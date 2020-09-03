import React from 'react';
import './MoviesLibrary.css';

const MoviesLibrary = (props) => {

    const moviesList = props.movies.map((movie) => (
        console.log(movie)
	));
   
    return (
        <div className="wrapper">
            <h2>Movies Library</h2>
            <ul className="movie-list">{moviesList}</ul>
        </div>
    );
};

export default MoviesLibrary;