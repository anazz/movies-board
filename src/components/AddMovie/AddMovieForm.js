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
            genres: props.movie.genres,
            actor_name: "",
            actor_character: "",
            similar_movie_title: "",
            similar_movie_release_date: ""
        },

        onSubmit: values => {
            console.log(values);
        },

        validate: values => {
            const errors = {};
            if (!values.title) {
                errors.name = "Required";
            }

            if (!values.release_date) {
                errors.pass = "Required";
            }

            if (!values.description) {
                errors.description = "Required";
            } 

            if (!values.genres) {
                errors.name = "Required";
            }

            if (!values.actor_name) {
                errors.pass = "Required";
            }

            if (!values.actor_character) {
                errors.description = "Required";
            }

            if (!values.similar_movie_title) {
                errors.name = "Required";
            }

            if (!values.similar_movie_release_date) {
                errors.pass = "Required";
            }
            return errors;
        }
    });

    /* THE FORM */

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
                        <span>Categories</span>

                        {/* MOVIE GENRES LIST INPUTS */}

                        <ul>
                            {genres.map(genre => (
                            <li>
                                <input
                                type="text"
                                id="genres"
                                name="genres"
                                onChange={addMoviesFormik.handleChange}
                                value={genre.name}
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

                        {/* MOVIE CAST LIST INPUTS */}

                        <ul>
                            {credits.map(actor => (
                            <li>
                                <label htmlFor="actor_name">Name</label>
                                <input
                                type="text"
                                id="actor_name"
                                name="actor_name"
                                onChange={addMoviesFormik.handleChange}
                                value={actor.name}
                                />
                                {/* error message */}
                                {addMoviesFormik.errors.actor_name ? (
                                    <div>{addMoviesFormik.errors.actor_name}</div>
                                ) : null}
                                {/* error message */}
                                <label htmlFor="actor_character">Characters</label>
                                <input
                                type="text"
                                id="actor_character"
                                name="actor_character"
                                onChange={addMoviesFormik.handleChange}
                                value={actor.character}
                                />
                                {/* error message */}
                                {addMoviesFormik.errors.actor_character ? (
                                    <div>{addMoviesFormik.errors.actor_character}</div>
                                ) : null}
                                {/* error message */}
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div className="form-similar-movies">
                        <h4>Similar Movies</h4>

                        {/* SIMILAR MOVIES LIST INPUTS */}

                        <ul>
                            {similarMovies.map(similar => (
                            <li>
                                <label htmlFor="similar_movie_title">Title</label>
                                <input
                                type="text"
                                id="similar_movie_title"
                                name="similar_movie_title"
                                onChange={addMoviesFormik.handleChange}
                                value={similar.title}
                                />
                                {/* error message */}
                                {addMoviesFormik.errors.similar_movie_title ? (
                                    <div>{addMoviesFormik.errors.similar_movie_title}</div>
                                ) : null}
                                {/* error message */}
                                <label htmlFor="similar_movie_release_date">Release Date</label>
                                <input
                                type="text"
                                id="similar_movie_release_date"
                                name="similar_movie_release_date"
                                onChange={addMoviesFormik.handleChange}
                                value={similar.release_date}
                                />
                                {/* error message */}
                                {addMoviesFormik.errors.similar_movie_release_date ? (
                                    <div>{addMoviesFormik.errors.similar_movie_release_date}</div>
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
