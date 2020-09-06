import React, { useState, useEffect } from 'react';
import { useFormik } from "formik";

const AddMovieForm = (props) => {

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
                {addMoviesFormik.errors.release_date ? (
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
	);

}

export default AddMovieForm;
