import React from 'react';

const MoviesResults = (props) => {
	return (
			<li className="movie-results-list">
				<a href="" className="list-group-item list-group-item-action list-group-item-warning">
					<h3>{props.movie.title}</h3>
					<span className="release_date">{props.movie.release_date}</span>
				</a>
			</li>
	);
};

export default MoviesResults;