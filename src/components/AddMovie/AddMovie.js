import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MoviesResults from './MoviesResults';
import AddMovieForm from './AddMovieForm';
import './AddMovie.css';

const AddMovie = (props) => { 
    /* Setting the State and the values for the api request and response */

    const [movies, setMovies] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY;
    const base_url = `https://api.themoviedb.org/3`;

    const [formData, setFormData] = useState({
		title: '',
		releaseDate: '',
    });

    /* api request, response and data retrieve in movies */

    useEffect(() => {  
        if(formData.title.length > 1) {
            axios.get(`${base_url}/search/movie?api_key=${API_KEY}&query=${formData.title}`)
            .then((r)=> {
                setMovies(r.data.results)
            }).catch((error) => {
                console.log(error);
            });  
        }
    }, [formData.title]);

    /* Setting the formData */
    
    const onUpdateData = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        const data = { ...formData };
            data[name] = value;
            setFormData(data);
            console.log(data); 
    }

    return (
        <div className="wrapper">
                <h1>Ajouter un film</h1>

                {/* SEARCH FILTERS */}

                <div className="search-wrapper">
                    <form>
                        <div className="search-form-wrapper">
                        <input
                            className="form-control"
                            type="text"
                            id="title-search"
                            name="title"
                            value={formData.title}
                            onChange={onUpdateData}
                        />
                        <input
                            className="form-control"
                            type="date"
                            id="release-date-search"
                            name="releaseDate"
                            value={formData.releaseDate}
                            // placeholder="Search Release Date"
                            onChange={onUpdateData}
                        />
                        </div>
                    </form>
                </div>
            <div className="list-form-wrapper">
                    {/* Movies List */}

                        <ul className="list-group movies-result-list">
                            {movies.map(movie => (
                                <MoviesResults 
                                    key={movie.id}
                                    movie={movie}
                                />
                            ))
                            }
                        </ul>  

                    {/* Add Movies Form */}
   
                            {movies.map(movie => (
                                <AddMovieForm 
                                    key={movie.id}
                                    movie={movie}
                                />
                            ))
                            }  
            </div>
        </div>
    );
};

export default AddMovie;