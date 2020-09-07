import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = (props) => {
	return (
		<li className="movie">
                <Link to="/movie">
                    <h3 className="library-movie-title">{props.movie.title}</h3>
                </Link>
                <img src={props.movie.poster} alt="movie poster" className="library-movie-poster"/>
               <span className="release_date">{props.movie.release_date}</span>
               <p className="description">{props.movie.description}</p>
		</li>
	);
};

export default MoviesList;