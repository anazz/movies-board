import React from 'react';

const Movie = (props) => {
	return (
        <div>
            <h3>{props.movie.title}</h3>
            <img src={props.movie.poster} alt="movie poster" />
            <span className="release_date">{props.movie.release_date}</span>
            <p className="description">{props.movie.description}</p>
        </div>
	);
};

export default Movie;