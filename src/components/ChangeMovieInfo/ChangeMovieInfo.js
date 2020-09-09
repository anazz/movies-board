import React, { useState, useEffect } from 'react';
import { useFormik } from "formik";
import './ChangeMovieInfo.css';

const ChangeMovieInfo = (props) => {

    /* FORM FORMIK*/

    const changeMovieInfoFormik = useFormik({
        initialValues: {
          title: "",
          releaseDate: "",
          description: "",
          genres: [],
          actorName: [],
          actorCharacter: [],
          similarMovieTitle: [] ,
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
        <div>
        <h1>Modifier les informations d'un film</h1>
        <div className="update-form-wrapper">
            <form onSubmit={changeMovieInfoFormik.handleSubmit}>
                <div className="update-form-top-wrapper">
                    {/* <label htmlFor="title">Title</label> */}
                    <div className="title-input-wrapper">
                    <h4>Title</h4>
                    <div className="title-input">
                    <input
                    className="form-control"
                    type="text"
                    id="title"
                    name="title"
                    onChange={changeMovieInfoFormik.handleChange}
                    placeholder=""
                    value={changeMovieInfoFormik.values.title}
                    />
                    {/* error message */}
                    {changeMovieInfoFormik.errors.title ? (
                        <div>{changeMovieInfoFormik.errors.title}</div>
                    ) : null}
                    {/* error message */}
                    </div>
                    </div>
                    {/* <label htmlFor="releaseDate">Release Date</label> */}
                    <div className="release-date-input-wrapper">
                    <h4>Release Date</h4>
                    <div className="release-date-input">
                    <input
                    className="form-control"
                    type="text"
                    id="release-date"
                    name="releaseDate"
                    onChange={changeMovieInfoFormik.handleChange}
                    placeholder=""
                    value={changeMovieInfoFormik.values.releaseDate}
                    />
                    {/* error message */}
                    {changeMovieInfoFormik.errors.releaseDate ? (
                        <div>{changeMovieInfoFormik.errors.releaseDate}</div>
                    ) : null}
                    {/* error message */}
                    </div>
                    </div>
                </div>
                <div className="update-form-description-wrapper">
                    {/* <label htmlFor="description">Synopsis</label> */}
                    <div className="description-input-wrapper">
                    <h4>Synopsis</h4>
                    <textarea
                    className="form-control"
                    rows="3"
                    cols="90"
                    id="description"
                    name="description"
                    onChange={changeMovieInfoFormik.handleChange}
                    placeholder=""
                    value={changeMovieInfoFormik.values.description}
                    />
                    {/* error message */}
                    {changeMovieInfoFormik.errors.description ? (
                        <div>{changeMovieInfoFormik.errors.description}</div>
                    ) : null}
                    {/* error message */}
                    </div>
                </div>
                <div className="update-form-bottom-wrapper"> 
                    <div className="update-form-genres">
                        <h4>Categories</h4>
                        <ul className="categories-list">
                            {/* {genres.map(genre => ( */}
                            <li key="">
                                <label htmlFor="genres">Name</label>
                                <input
                                className="form-control"
                                type="text"
                                id="genres"
                                name="genres"
                                onChange={changeMovieInfoFormik.handleChange}
                                placeholder=""
                                value={changeMovieInfoFormik.genres}
                                />
                                {/* error message */}
                                {changeMovieInfoFormik.errors.genres ? (
                                    <div>{changeMovieInfoFormik.errors.genres}</div>
                                ) : null}
                                {/* error message */} 
                            </li>
                           {/* ))} */}
                        </ul>  
                    </div>

                    <div className="update-form-actors">
                        <h4>Actors</h4>
                        <ul className="actors-list">
                            {/* {credits.map(actor => ( */}
                            <li key="">
                                <label htmlFor="actorName">Name</label>
                                <input
                                className="form-control"
                                type="text"
                                id="actor_name"
                                name="actorName"
                                onChange={changeMovieInfoFormik.handleChange}
                                placeholder=""
                                value={changeMovieInfoFormik.actorName}
                                />
                                {/* error message */}
                                {changeMovieInfoFormik.errors.actorName ? (
                                    <div>{changeMovieInfoFormik.errors.actorName}</div>
                                ) : null}
                                {/* error message */}
                                <label htmlFor="actorCharacter">Characters</label>
                                <input
                                className="form-control"
                                type="text"
                                id="actor.character"
                                name="actorCharacter"
                                onChange={changeMovieInfoFormik.handleChange}
                                placeholder=""
                                value={changeMovieInfoFormik.actorCharacter}
                                />
                                {/* error message */}
                                {changeMovieInfoFormik.errors.actorCharacter ? (
                                    <div>{changeMovieInfoFormik.errors.actorCharacter}</div>
                                ) : null}
                                {/* error message */}
                            </li>
                            {/* ))} */}
                        </ul>
                    </div>
                    <div className="update-form-similar-movies">
                        <h4>Similar Movies</h4>
                        <ul className="similar-movies-list">
                            {/* {similarMovies.map(similar => ( */}
                            <li key="">
                                <label htmlFor="similarMovieTitle">Title</label>
                                <input
                                className="form-control"
                                type="text"
                                id="similar_movie_title"
                                name="similarMovieTitle"
                                onChange={changeMovieInfoFormik.handleChange}
                                placeholder=""
                                value={changeMovieInfoFormik.similarMovieTitle}
                                />
                                {/* error message */}
                                {changeMovieInfoFormik.errors.similarMovieTitle ? (
                                    <div>{changeMovieInfoFormik.errors.similarMovieTitle}</div>
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
                            {/* ))} */}
                        </ul>
                    </div>
                </div>
                <button className="btn btn-info" type="submit">
                <span>Valider les modifications</span>
                </button>
            </form>
        </div>
        </div>
	);
};

export default ChangeMovieInfo;