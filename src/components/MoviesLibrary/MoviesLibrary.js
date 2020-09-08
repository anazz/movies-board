import React from 'react';
import MoviesList from './MoviesList';
import './MoviesLibrary.css';

const MoviesLibrary = (props) => {

    const moviesList = props.movies.map((movie) => (
        console.log(movie),
        <MoviesList
			movie={movie}
            key={movie.id}
		/>
	));
   
    return (
        <div className="wrapper">
            <div className="movies-library-top">
                <h1>Bibliothèque de films</h1>
            </div>
            <div className="movies-library-list"><ul className="movie-list">{moviesList}</ul></div>
        </div>
    );
};

export default MoviesLibrary;