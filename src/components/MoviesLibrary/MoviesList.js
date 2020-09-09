import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = (props) => {
	return (
		<li className="movie-card">
                <Link to="/movie">
                    <div className="card-wrapper">
                        <img src={props.movie.poster} alt="movie poster" className="library-movie-poster"/>
                        <div className="data">
                            <div className="content">
                                {/* <span className="data-release-date">{props.movie.realease_date}</span>
                                <p className="data-description">{props.movie.description}</p> */}
                            </div>
				        </div>
                    </div>
                </Link>
		</li>
	);
};

export default MoviesList;