import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useFormik } from "formik";
// import MoviesResults from './MoviesResults';
// import AddMovieForm from './AddMovieForm';
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
        </div>
    );
};

export default AddMovie;