import React, { useState, useEffect } from 'react';
import { useFormik } from "formik";
import bootstrap from 'bootstrap';
import axios from 'axios';

const AddMovieForm = (props) => {

    const [actors, setActors] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [movieData, setMovieData] = useState();
    const [categories, setCategories] = useState([]);

    /* API KEY AND BASE URL FOR QUERIES */

    const API_KEY = process.env.REACT_APP_API_KEY;
    const base_url = `https://api.themoviedb.org/3`;

    /* QUERY FOR MOVIE GENRES */

    useEffect(() => {  
        axios.get(`${base_url}/movie/${props.movie.id}?api_key=${API_KEY}`)
        .then((r) => (
            setCategories(r.data.genres)
        )).catch((error) => {
            console.log(error);
        });  
    }, []);

    /* QUERY FOR THE MOVIE CAST */

    useEffect(() => {  
         axios.get(`${base_url}/movie/${props.movie.id}/credits?api_key=${API_KEY}`)
         .then((r) => (
             setActors(r.data.cast.slice(0, 2))
         )).catch((error) => {
             console.log(error);
         });  
     }, []);

     /* QUERY FOR SIMILAR MOVIES */

     useEffect(() => {  
         axios.get(`${base_url}/movie/${props.movie.id}/similar?api_key=${API_KEY}`)
         .then((r) => (
             setSimilarMovies(r.data.results.slice(0, 3))
         )).catch((error) => {
             console.log(error);
         });  
     }, []);

     console.log(categories);
     console.log(actors);
     console.log(similarMovies);

    /* QUERY FOR ALL */

    // const requestGenres = axios.get(`${base_url}/movie/${props.movie.id}?api_key=${API_KEY}`);
    // const requestCredits = axios.get(`${base_url}/movie/${props.movie.id}/credits?api_key=${API_KEY}`);
    // const requestSimilarMovies = axios.get(`${base_url}/movie/${props.movie.id}/similar?api_key=${API_KEY}`);

    // useEffect(() => {  
    //     axios.all([requestGenres, requestCredits, requestSimilarMovies])
    //     .then((genres, credits, similarMovies) => {
    //         setMovieData(genres, credits, similarMovies);
    //     }).catch((error) => {
    //         console.log(error);
    //     });  
    // }, []);
    
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
                    <div className="title-input-wrapper">
                    <h4>Title</h4>
                    <div className="title-input">
                    <input
                    className="form-control"
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
                    </div>
                    </div>
                    <div className="release-date-input-wrapper">
                    <h4>Release Date</h4>
                    <div className="release-date-input">
                    <input
                    className="form-control"
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
                    </div>
                </div>
                <div className="form-description-wrapper">
                    <div className="description-input-wrapper">
                    <h4>Synopsis</h4>
                    <textarea
                    className="form-control"
                    rows="3"
                    cols="90"
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
                </div>
                <div className="form-bottom-wrapper"> 
                    <div className="form-genres">
                        <h4>Categories</h4>
                        <ul className="categories-list">
                            {categories.map(category => (
                           <li key={category.id}>
                                <label htmlFor="genres">Name</label>
                                <input
                                className="form-control"
                                type="text"
                                id="genres"
                                name="genres"
                                onChange={addMoviesFormik.handleChange}
                                placeholder={category.name}
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
                        <ul className="actors-list">
                            {actors.map(actor => (
                            <li key={actor.cast_id}>
                                <label htmlFor="actorName">Name</label>
                                <input
                                className="form-control"
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
                                className="form-control"
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
                        <ul className="similar-movies-list">
                            {similarMovies.map(similar => (
                            <li key={similar.id}>
                                <label htmlFor="similarMovieTitle">Title</label>
                                <input
                                className="form-control"
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
                                {/* <label htmlFor="similarMovieReleaseDate">Release Date</label>
                                <input
                                className="form-control"
                                type="text"
                                id="similar_movie_release_date"
                                name="similarMovieReleaseDate"
                                onChange={addMoviesFormik.handleChange}
                                placeholder={similar.release_date}
                                value={addMoviesFormik.similarMovieReleaseDate}
                                /> */}
                                {/* error message */}
                                {/* {addMoviesFormik.errors.similarMovieReleaseDate ? (
                                    <div>{addMoviesFormik.errors.similarMovieReleaseDate}</div>
                                ) : null} */}
                                {/* error message */}
                           </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <button className="btn btn-info" type="submit">
                <span>Ajouter le film à votre bibliothéque</span>
                </button>
            </form>
        </div>
	);
}

export default AddMovieForm;
