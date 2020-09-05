import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useFormik } from "formik";
import './AddMovie.css';

const AddMovie = (props) => {

    /* Search in form by movie title and movie release date */

    const [formData, setFormData] = useState({
		title: '',
		releaseDate: '',
    });

    /* Setting the formData */
    
    const onUpdateData = (event) => {
        // event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        const data = { ...formData };
            data[name] = value;
            setFormData(data);
            console.log(data);
    }

    const addMoviesFormik = useFormik({
        initialValues: {
          title: "",
          release_date: "",
          description: "",
          genres: "",
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

    return (
        <div className="wrapper">
            <h2>Add Movie</h2>

            {/* SEARCH FILTERS */}

            <div className="search-wrapper">
            <   form>
                    <input
                        type="text"
                        id="title-search"
                        name="title"
                        value={formData.title}
                        // placeholder="Search Title"
                        onChange={onUpdateData}
                    />
                    <input
                        type="date"
                        id="release-date-search"
                        name="releaseDate"
                        value={formData.releaseDate}
                        // placeholder="Search Release Date"
                        onChange={onUpdateData}
                    />
                </form>
            </div>

            {/* FILTERED MOVIES */}

            <div className="results-wrapper">
                <h2>Movie Results</h2>
                <ul className="movie-results">
                    <li className="results-list">
                        <h3>Title: </h3>
                        <span className="release_date">Release Date:</span>
                    </li>
                </ul>
            </div>

            {/* FORM */}

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
                    <label htmlFor="release-date">Release Date</label>
                    <input
                    type="date"
                    id="release-date"
                    name="release-date"
                    onChange={addMoviesFormik.handleChange}
                    value={addMoviesFormik.values.release_date}
                    />
                    {/* error message */}
                    {addMoviesFormik.errors.release_date ? (
                        <div>{addMoviesFormik.errors.release_date}</div>
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
                        {/* <label htmlFor="genres" className="categories">Categories</label> */}
                        <input
                        type="text"
                        id="genres"
                        name="genres"
                        onChange={addMoviesFormik.handleChange}
                        value={addMoviesFormik.values.genres}
                        />
                        {/* error message */}
                        {addMoviesFormik.errors.genres ? (
                            <div>{addMoviesFormik.errors.genres}</div>
                        ) : null}
                        {/* error message */}
                    </div>    
                    <div className="form-actors">
                        <span>Actors</span>
                        <label htmlFor="actor_name">Name</label>
                        <input
                        type="text"
                        id="actor_name"
                        name="actor_name"
                        onChange={addMoviesFormik.handleChange}
                        value={addMoviesFormik.values.actor_name}
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
                        value={addMoviesFormik.values.actor_character}
                        />
                        {/* error message */}
                        {addMoviesFormik.errors.actor_character ? (
                            <div>{addMoviesFormik.errors.actor_character}</div>
                        ) : null}
                        {/* error message */}
                    </div>
                    <div className="form-similar-movies">
                        <span>Similar Movies</span>
                        <label htmlFor="similar_movie_title">Title</label>
                        <input
                        type="text"
                        id="similar_movie_title"
                        name="similar_movie_title"
                        onChange={addMoviesFormik.handleChange}
                        value={addMoviesFormik.values.similar_movie_title}
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
                        value={addMoviesFormik.values.similar_movie_release_date}
                        />
                        {/* error message */}
                        {addMoviesFormik.errors.similar_movie_release_date ? (
                            <div>{addMoviesFormik.errors.similar_movie_release_date}</div>
                        ) : null}
                        {/* error message */}
                    </div>
                </div>
                <button type="submit">
                <span>Go</span>
                </button>
            </form>
            </div>
        </div>
    );
};

export default AddMovie;