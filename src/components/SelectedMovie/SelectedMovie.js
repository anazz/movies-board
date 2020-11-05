import React from 'react';
import Movie from './Movie';
import './Movie.scss';

const SelectedMovie = (props) => {
    
const movieSelected = props.movies.map((movie) => (
        // console.log(movie),
        <Movie
            key={movie.id}
			movie={movie}
		/>
    ));
    
    return (
            <div className="movie-wrapper">
                <div className="fluid-grid">
                    <div className="movie-page-top">
                        <div className="bg-movie">
                            {props.movies.map((movie) => (
                            <img className="bg-movie-poster" src={movie.backdrop} alt="movie poster" />
                            ))}
                            <div className="bg-layer-movie"></div> 
                        </div>              
                    </div>
                    {/* <div className="movie-page-top">
                        <h1 className="movie-page-title">Le film</h1>
                        {props.movies.map((movie) => (
                        <img className="bg-movie-poster" src={movie.backdrop} alt="movie poster" />
                        ))}
                        <div className="bg-layer"></div>
                    </div> */}
                    
                    <div className="movie-section">
                        <h1 className="movie-page-title">Le film</h1>
                        {movieSelected}
                    </div>
                </div>
            </div>
    );
};

export default SelectedMovie;