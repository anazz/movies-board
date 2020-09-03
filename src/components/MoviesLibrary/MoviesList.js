import React from 'react';

const MoviesList = (props) => {
	return (
		<li className="movie">
               <h3>{props.movie.title}</h3>
               <img src={props.movie.poster} alt="movie poster" />
               <span className="release_date">{props.movie.release_date}</span>
               <p className="description">{props.movie.description}</p>
		</li>
	);
};

export default MoviesList;