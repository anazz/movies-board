import React from 'react';
import Movie from './Movie';
import './SelectedMovie.css';

const SelectedMovie = (props) => {

    const movieSelected = props.movies.map((movie) => (
        console.log(movie),
        <Movie
			movie={movie}
            key={movie.id}
		/>
    ));
    
    return (
        <div className="wrapper">
            <h2>Selected Movie</h2>
            <div className="movie-list">{movieSelected}</div>
        </div>
    );
};

export default SelectedMovie;