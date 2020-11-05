import React from 'react';
import MoviesList from './MoviesList';
import './MoviesLibrary.scss';

const MoviesLibrary = (props) => {

    const moviesList = props.movies.map((movie) => (
        // console.log(movie),
        <MoviesList
			movie={movie}
            key={movie.id}
		/>
	));
   
    return (
        <div className="movies-library-wrapper">
            <div className="fluid-grid">
                <div className="movies-library-top">
                    <h1 className="page-title">Bibliothèque de films</h1>
                    <img className="poster" src="./movie-library-background.jpg" alt="movie poster" />
                    <div className="bg-layer"></div>
                </div>
                <div className="movies-library-list"><ul className="movie-list">{moviesList}</ul></div>
            </div>
        </div>
    );
};

export default MoviesLibrary;