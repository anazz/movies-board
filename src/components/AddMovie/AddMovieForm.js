import React, { useState, useEffect } from 'react';
import { useFormik } from "formik";
import axios from 'axios';

const AddMovieForm = (props) => {

    const [credits, setCredits] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [movieData, setMovieData] = useState({});
    const [genres, setGenres] = useState([]);

    /* API KEY AND BASE URL FOR QUERIES */

    const API_KEY = process.env.REACT_APP_API_KEY;
    const base_url = `https://api.themoviedb.org/3`;

    /* QUERY FOR MOVIE GENRES */

    useEffect(() => {  
        axios.get(`${base_url}/movie/${props.movie.id}?api_key=${API_KEY}`)
        .then((r) => (
            // console.log(r.data)
            setGenres(r.data.genres)
        )).catch((error) => {
            console.log(error);
        });  
    }, []);

    /* QUERY FOR THE MOVIE CAST */

    useEffect(() => {  
        axios.get(`${base_url}/movie/${props.movie.id}/credits?api_key=${API_KEY}`)
        .then((r) => (
            setCredits(r.data.cast.slice(0, 2))
        )).catch((error) => {
            console.log(error);
        });  
    }, []);

    /* QUERY FOR SIMILAR MOVIES */

    useEffect(() => {  
        axios.get(`${base_url}/movie/${props.movie.id}/similar?api_key=${API_KEY}`)
        .then((r) => (
            // console.log(r.data.results.slice(0, 3))
            setSimilarMovies(r.data.results.slice(0, 3))
        )).catch((error) => {
            console.log(error);
        });  
    }, []);

    console.log(genres);
    console.log(credits);
    console.log(similarMovies);

    /* FORM FORMIK VALUES VALIDATION AND SUBMIT */

    const addMoviesFormik = useFormik({
        initialValues: {
          title: props.movie.title,
          releaseDate: props.movie.release_date,
          description: props.movie.overview,
          genres: [],
          actorName: [],
          actorCharacter: [],
          similarMovieTitle: [],
          similarMovieReleaseDate: []
        },

        onSubmit: values => {
          console.log(values);
        },

        validate: values => {
          const errors = {};
          if (!values.title) {
            errors.title = "Required";
          }
    
          if (!values.releaseDate) {
            errors.releaseDate = "Required";
          }
    
          if (!values.description) {
            errors.description = "Required";
          } 

          if (!values.genres) {
            errors.genres = "Required";
          }
    
          if (!values.actorName) {
            errors.actorName = "Required";
          }
    
          if (!values.actorCharacter) {
            errors.actorCharacter = "Required";
          }

          if (!values.similarMovieTitle) {
            errors.similarMovieTitle = "Required";
          }
    
          if (!values.similarMovieReleaseDate) {
            errors.similarMovieReleaseDate = "Required";
          }
          return errors;
        }
    });

	return (
        <div className="form-wrapper">
            <form onSubmit={addMoviesFormik.handleSubmit}>
                <div className="form-top-wrapper">
                    <label htmlFor="title">Title</label>
                    <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={addMoviesFormik.handleChange}
                    placeholder=""
                    value={addMoviesFormik.values.title}
                    />
                    {/* error message */}
                    {addMoviesFormik.errors.title ? (
                        <div>{addMoviesFormik.errors.title}</div>
                    ) : null}
                    {/* error message */}
                    <label htmlFor="releaseDate">Release Date</label>
                    <input
                    type="text"
                    id="release-date"
                    name="releaseDate"
                    onChange={addMoviesFormik.handleChange}
                    placeholder=""
                    value={addMoviesFormik.values.releaseDate}
                    />
                    {/* error message */}
                    {addMoviesFormik.errors.releaseDate ? (
                        <div>{addMoviesFormik.errors.releaseDate}</div>
                    ) : null}
                    {/* error message */}
                </div>
                <div className="form-description-wrapper">
                    <label htmlFor="description">Synopsis</label>
                    <textarea
                    id="description"
                    name="description"
                    onChange={addMoviesFormik.handleChange}
                    placeholder=""
                    value={addMoviesFormik.values.description}
                    />
                    {/* error message */}
                    {addMoviesFormik.errors.description ? (
                        <div>{addMoviesFormik.errors.description}</div>
                    ) : null}
                    {/* error message */}
                </div>
                <div className="form-bottom-wrapper"> 
                    <div className="form-genres">
                        <h4>Categories</h4>
                        <ul>
                            {genres.map(genre => (
                            <li>
                                <input
                                type="text"
                                id="genres"
                                name="genres"
                                onChange={addMoviesFormik.handleChange}
                                placeholder={genre.name}
                                value={addMoviesFormik.genres}
                                />
                                {/* error message */}
                                {addMoviesFormik.errors.genres ? (
                                    <div>{addMoviesFormik.errors.genres}</div>
                                ) : null}
                                {/* error message */} 
                            </li>
                            ))} 
                        </ul>  
                    </div>

                    <div className="form-actors">
                        <h4>Actors</h4>
                        <ul>
                            {credits.map(actor => (
                            <li>
                                <label htmlFor="actorName">Name</label>
                                <input
                                type="text"
                                id="actor_name"
                                name="actorName"
                                onChange={addMoviesFormik.handleChange}
                                placeholder={actor.name}
                                value={addMoviesFormik.actorName}
                                />
                                {/* error message */}
                                {addMoviesFormik.errors.actorName ? (
                                    <div>{addMoviesFormik.errors.actorName}</div>
                                ) : null}
                                {/* error message */}
                                <label htmlFor="actorCharacter">Characters</label>
                                <input
                                type="text"
                                id="actor.character"
                                name="actorCharacter"
                                onChange={addMoviesFormik.handleChange}
                                placeholder={actor.character}
                                value={addMoviesFormik.actorCharacter}
                                />
                                {/* error message */}
                                {addMoviesFormik.errors.actorCharacter ? (
                                    <div>{addMoviesFormik.errors.actorCharacter}</div>
                                ) : null}
                                {/* error message */}
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div className="form-similar-movies">
                        <h4>Similar Movies</h4>
                        <ul>
                            {similarMovies.map(similar => (
                            <li>
                                <label htmlFor="similarMovieTitle">Title</label>
                                <input
                                type="text"
                                id="similar_movie_title"
                                name="similarMovieTitle"
                                onChange={addMoviesFormik.handleChange}
                                placeholder={similar.title}
                                value={addMoviesFormik.similarMovieTitle}
                                />
                                {/* error message */}
                                {addMoviesFormik.errors.similarMovieTitle ? (
                                    <div>{addMoviesFormik.errors.similarMovieTitle}</div>
                                ) : null}
                                {/* error message */}
                                <label htmlFor="similarMovieReleaseDate">Release Date</label>
                                <input
                                type="text"
                                id="similar_movie_release_date"
                                name="similarMovieReleaseDate"
                                onChange={addMoviesFormik.handleChange}
                                placeholder={similar.release_date}
                                value={addMoviesFormik.similarMovieReleaseDate}
                                />
                                {/* error message */}
                                {addMoviesFormik.errors.similarMovieReleaseDate ? (
                                    <div>{addMoviesFormik.errors.similarMovieReleaseDate}</div>
                                ) : null}
                            {/* error message */}
                            </li>
                            ))} 
                        </ul>
                    </div>
                </div>
                <button type="submit">
                <span>Go</span>
                </button>
            </form>
        </div>
	);
}

export default AddMovieForm;
