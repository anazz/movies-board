import React from 'react';

const MoviesResults = (props) => {
	return (
		<li className="results-list">
            <h3>{props.movie.title}</h3>
            <span className="release_date">{props.movie.release_date}</span>
		</li>
	);
};

export default MoviesResults;