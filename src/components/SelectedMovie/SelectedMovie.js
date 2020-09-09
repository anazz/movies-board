import React from 'react';
import Movie from './Movie';
import './SelectedMovie.css';

const SelectedMovie = (props) => {
    
const movieSelected = props.movies.map((movie) => (
        console.log(movie),
        <Movie
            key={movie.id}
			movie={movie}
		/>
    ));
    
    return (
            <div className="movie-wrapper">
                <div className="bg-wrapper">
                    <div className="bg-movie">
                    {props.movies.map((movie) => (
                    <img src={movie.backdrop} alt="movie poster" className="bg-movie-poster" />
                    ))}
                    <div className="bg-layer-movie"></div> 
                    </div>              
                </div>
                        
                <h1 className="movie-page-title">Le film</h1>
                <div className="movie-section">
                    <div className="bg-section"></div>
                    {movieSelected}
                </div>
            </div>
    );
};

export default SelectedMovie;