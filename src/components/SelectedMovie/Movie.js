import React from 'react';
// import bootstrap from 'bootstrap';
// import { Slide } from 'react-slideshow-image';
import './Movie.scss';

const Movie = (props) => {
	return (
        <div className="movie-section-wrapper">
            <div className="row">
                <div className="col-6 movie-info">
                    <div className="movie-top-info">
                        <span className="movie-release-date">Sortie en salles: {props.movie.release_date}</span>
                        <h3 className="movie-title">{props.movie.title}</h3>
                        <p className="categories">{props.movie.categories.join()}</p>
                    </div>
                </div>
                <div className="col">
                    <img className="main-poster"src={props.movie.poster} alt="movie poster" />   
                </div>
            </div>
            <div className="row">
                <div className="col-6 description-wrapper">
                    <h4><span className="slash">/</span>Synopsis</h4>
                    <p className="description">{props.movie.description}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 credits-wrapper">
                    <h4 className="cast-title"><span class="slash">/</span>Distribution</h4>
                    <ul>
                        {props.movie.actors.map(actor => (
                        <li className="actor-name">{actor.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="row">
                    <div className="buttons">
                        <button type="button" class="btn btn-outline-secondary">Modifier les infos</button>
                        <button type="button" class="btn btn-outline-secondary">Supprimer le film</button>
                    </div>
            </div>
            <div className="row similar-movies-wrapper">
                <div className="col">
                    <ul>
                    {props.movie.similar_movies.map(similar_movie => (
                        <li>
                            <img  className="similar-movie-poster" src= {similar_movie.poster} alt="similar movie poster" />
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>   
	);
};

export default Movie;