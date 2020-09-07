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
        <div className="form-wrapper">
            <h2>Change Movie Info</h2>
        <form onSubmit={changeMovieInfoFormik.handleSubmit}>
            <div className="form-top-wrapper">
                    <label htmlFor="title">Title</label>
                    <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={changeMovieInfoFormik.handleChange}
                    value={changeMovieInfoFormik.values.title}
                    />
                    {/* error message */}
                    {changeMovieInfoFormik.errors.title ? (
                        <div>{changeMovieInfoFormik.errors.title}</div>
                    ) : null}
                    {/* error message */}
  
                    <label htmlFor="releaseDate">Release Date</label>
                    <input
                    type="date"
                    id="release-date"
                    name="releaseDate"
                    onChange={changeMovieInfoFormik.handleChange}
                    value={changeMovieInfoFormik.values.releaseDate}
                    />
                    {/* error message */}
                    {changeMovieInfoFormik.errors.releaseDate ? (
                        <div>{changeMovieInfoFormik.errors.releaseDate}</div>
                    ) : null}
                    {/* error message */}
                </div>    
            <div className="form-description-wrapper row">
                <label htmlFor="description">Synopsis</label>
                <textarea
                id="description"
                name="description"
                onChange={changeMovieInfoFormik.handleChange}
                value={changeMovieInfoFormik.values.description}
                />
                {/* error message */}
                {changeMovieInfoFormik.errors.description ? (
                    <div>{changeMovieInfoFormik.errors.description}</div>
                ) : null}
                {/* error message */}
            </div>
            <div className="form-bottom-wrapper"> 
                <div className="form-genres">
                    <span>Categories</span>
                    <ul>
                        {/* {genres.map(genre => ( */}
                        <li>
                            <input
                            type="text"
                            id="genres"
                            name="genres"
                            onChange={changeMovieInfoFormik.handleChange}
                            value={changeMovieInfoFormik.values.genreName}
                            />
                            {/* error message */}
                            {changeMovieInfoFormik.errors.genres ? (
                                <div>{changeMovieInfoFormik.errors.genreName}</div>
                            ) : null}
                            {/* error message */} 
                        </li>
                        {/* ))}  */}
                    </ul>  
                </div>

                <div className="form-actors">
                    <h4>Actors</h4>
                    <ul>
                        {/* {credits.map(actor => ( */}
                        <li>
                            <label htmlFor="actorName">Name</label>
                            <input
                            type="text"
                            id="actor_name"
                            name="actorName"
                            onChange={changeMovieInfoFormik.handleChange}
                            value={changeMovieInfoFormik.values.actorName}
                            />
                            {/* error message */}
                            {changeMovieInfoFormik.errors.actorName ? (
                                <div>{changeMovieInfoFormik.errors.actorName}</div>
                            ) : null}
                            {/* error message */}
                            <label htmlFor="actorCharacter">Characters</label>
                            <input
                            type="text"
                            id="actor.character"
                            name="actorCharacter"
                            onChange={changeMovieInfoFormik.handleChange}
                            value={changeMovieInfoFormik.values.actorCharacter}
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
                <div className="form-similar-movies">
                    <h4>Similar Movies</h4>
                    <ul>
                        {/* {similarMovies.map(similar => ( */}
                        <li>
                            <label htmlFor="similarMovieTitle">Title</label>
                            <input
                            type="text"
                            id="similar_movie_title"
                            name="similarMovieTitle"
                            onChange={changeMovieInfoFormik.handleChange}
                            value={changeMovieInfoFormik.values.similarMovieTitle}
                            />
                            {/* error message */}
                            {changeMovieInfoFormik.errors.similarMovieTitle ? (
                                <div>{changeMovieInfoFormik.errors.similarMovieTitle}</div>
                            ) : null}
                            {/* error message */}
                            <label htmlFor="similarMovieReleaseDate">Release Date</label>
                            <input
                            type="text"
                            id="similar_movie_release_date"
                            name="similarMovieReleaseDate"
                            onChange={changeMovieInfoFormik.handleChange}
                            value={changeMovieInfoFormik.values.similarReleaseDate}
                            />
                            {/* error message */}
                            {changeMovieInfoFormik.errors.similarMovieReleaseDate ? (
                                <div>{changeMovieInfoFormik.errors.similarMovieReleaseDate}</div>
                            ) : null}
                        {/* error message */}
                        </li>
                        {/* ))}  */}
                    </ul>
                </div>
            </div>
            <button type="submit">
            <span>Go</span>
            </button>
        </form>
        </div>
	);
};

export default ChangeMovieInfo;