import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = (props) => {
	return (
		<li className="movie-card">
                <Link to="/movie">
                    {/* <h3 className="library-movie-title">{props.movie.title}</h3> */}
                    <div className="card-wrapper">
                        <img src={props.movie.poster} alt="movie poster" className="library-movie-poster"/>
                        <div className="data">
                            <div className="content">
                                {/* <h4 className="data-title">{props.movie.title}</h4> */}
                                <span className="data-release-date">{props.movie.realease_date}</span>
                                {/* <p className="data-description">{props.movie.description}</p> */}
                            </div>
				        </div>
                    </div>
                </Link>
               {/* <span className="release_date">{props.movie.release_date}</span>
               <p className="description">{props.movie.description}</p> */}
		</li>
	);
};

export default MoviesList;