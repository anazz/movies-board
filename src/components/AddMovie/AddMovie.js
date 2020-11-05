import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MoviesResults from './MoviesResults';
// import AddMovieForm from './AddMovieForm';
import './AddMovie.scss';

const AddMovie = (props) => { 
    /* Setting the State and the values for the api request and response */

    const [moviesSearched, setMoviesSearched] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY;
    const base_url = `https://api.themoviedb.org/3`;

    const [formData, setFormData] = useState({
		title: '',
		releaseDate: '',
    });

    /* api request, response and data retrieve in movies */

    const API_SEARCH_URL = `${base_url}/search/movie?api_key=${API_KEY}&query=${formData.title}`;

    useEffect(() => {  
        if(formData.title.length > 1) {
            axios.get(API_SEARCH_URL)
            .then((r)=> {
                // console.log(r.data.results);
                setMoviesSearched(r.data.results);
                // console.log(r.data.results[0].original_title);
                // for(let i = 0; i <= r.data.results.length; i++) {
                //     setMovies(r.data.results[i].original_title);
                // }  
            }).catch((error) => {
                console.log(error);
            });  
        }
    }, [formData.title, API_SEARCH_URL]);

    // console.log(movies);

    /* Setting the formData */
    
    const onUpdateData = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        const data = { ...formData };
            data[name] = value;
            setFormData(data);
            // console.log(data); 
    }

    // QUERIES FOR THE REST

    // const [actors, setActors] = useState([]);
    // const [similarMovies, setSimilarMovies] = useState([]);
    // const [movieData, setMovieData] = useState({
    //     title: "",
    //     release_date: "",
    //     categories: [],
    //     description: "",
    //     poster: "",
    //     backdrop: "",
    // });
    // const [categories, setCategories] = useState([]);

    /* API KEY AND BASE URL FOR QUERIES */

    // const API_KEY = process.env.REACT_APP_API_KEY;
    // const base_url = `https://api.themoviedb.org/3`;

        // const getActors = () => {
    //     const iterator = actorsArray.values();
    //     for (const value of iterator) {
    //         return value;
    //     }
    // }

    // const movieID = () => {
    //     const idArray = movies.map(movie => movie.id);
    //     const iterator = idArray.values();
    //     for (const value of iterator) {
    //         return value;
    //     }
    // };

    /* QUERY FOR MOVIE GENRES */

    // const API_GENRES_URL = `${base_url}/movie/${movieID()}?api_key=${API_KEY}`;

    // useEffect(() => {  
    //     axios.get(API_GENRES_URL)
    //     .then((r) => {
    //         console.log(r.data.genres);
    //         setCategories(r.data.genres);
    //     }).catch((error) => {
    //         console.log(error);
    //     });  
    // });

    /* QUERY FOR THE MOVIE CAST & SIMILAR MOVIES */

    // useEffect(() => {
    //     axios.get(`${base_url}/movie/${movieID()}?api_key=${API_KEY}&language=en-US&page=1`)
    //      .then((response) => {
    //         setMovieData({
    //             title: response.data.title,
    //             release_date: response.data.release_date,
    //             categories: response.data.genres,
    //             description: response.data.overview,
    //             poster: `https://image.tmdb.org/t/p/w342${response.data.poster_path}`,
    //             backdrop: `https://image.tmdb.org/t/p/w342${response.data.backdrop_path}`,
    //         });
    //     }).catch((error) => {
    //         console.log(error);
    //     });  

    //      axios.get(`${base_url}/movie/${movieID()}/credits?api_key=${API_KEY}`)
    //      .then((r) => {
    //          setActors(r.data.cast.slice(0, 2));
    //         }).catch((error) => {
    //          console.log(error);
    //      });  

    //      axios.get(`${base_url}/movie/${movieID()}/similar?api_key=${API_KEY}&language=en-US&page=1`)
    //      .then((r) => {  
    //          setSimilarMovies(r.data.results.slice(0, 3));
    //         }).catch((error) => {
    //          console.log(error);
    //      });  
    // });

    // console.log(movieData.categories);

    // const actorsNames = () => {
    //     const actorsArray = actors.map(actor => actor.name);
    //     const iterator = actorsArray.values();
    //     for (const value of iterator) {
    //         return value;
    //     }
    // };

    // const actorsCharacters = () => {
    //     const actorsArray = actors.map(actor => actor.character);
    //     const iterator = actorsArray.values();
    //     for (const value of iterator) {
    //         return value;
    //     }
    // };

    // const similarMoviesId = () => {
    //     const similarMoviesArray = similarMovies.map(similar => similar.id);
    //     const iterator = similarMoviesArray.values();
    //     for (const value of iterator) {
    //         return value;
    //     }
    // };

    // const similarMoviesTitles = () => {
    //     const similarMoviesArray = similarMovies.map(similar => similar.title);
    //     const iterator = similarMoviesArray.values();
    //     for (const value of iterator) {
    //         return value;
    //     }
    // };

    // console.log(actorsNames());
    // console.log(actorsCharacters());
    // console.log(similarMoviesId());
    // console.log(similarMoviesTitles());

    // const actorsArray = actors.map(actor => actor.name);
    // console.log(actors);

    // const getActors = () => {
    //     const iterator = actorsArray.values();
    //     for (const value of iterator) {
    //         return value;
    //     }
    // }

    // console.log(getActors());

    // const options = movies.map((movie) => {
    //     return {
    //         key: movie.id,
    //         text: `${movie.title} / Sortie le: `,
    //         value: movie.id,
    //     };
    // });

    // const optionMovie = document.querySelector(".select-option");
    // let optionMovieId = document.getElementsByTagName("option")[0].getAttribute("id");
    // const toggleForm = () => {
    //         return (
    //             movies.map(movie => (
    //                 <AddMovieForm
    //                     id={movie.id}
    //                     key={movie.id}
    //                     movie={movie}
    //                 />
    //             )) 
    //         );
    // }

    return (
        <div className="add-movie-wrapper">
            <div className="top-wrapper">
                <h1 className="page-title">Ajouter un film</h1>
                <img className="poster" src="./add-movie-background.jpg" alt="movie poster" />
                <div className="bg-layer"></div>
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
            </div>              
            <div className="list-form-wrapper">
                {/* Movies List */}
                {/* <div className="add-form-results">    
                    <select className="select-movie">
                    {movies.map(movie => (
                        <option id={movie.id} key={movie.id} value={movie.id} className="select-option">{movie.title + "Sortie le: " + movie.release_date}</option>
                    ))
                    } 
                    </select>
                </div> */}
                {/* <div className="add-form-results"> */}
                {moviesSearched.map(movie => (
                    <MoviesResults 
                        key={movie.id}
                        id={movie.id}
                        movie={movie}
                    />
                ))}
                {/* </div> */}
                {/* <div>{toggleForm}</div> */}
                {/* {movies.map(movie => (
                        <AddMovieForm
                            id={movie.id}
                            key={movie.id}
                            movie={movie}
                        />
                ))}  */}
            </div>
            {/* <div className="add-movie-form"> */}
                  {/* Add Movies Form */}
                    {/* {movies.map(movie => (
                        <AddMovieForm
                            movie={movie}
                        />
                    ))} */}
            {/* </div> */}
            {/* <div className="section form">
                <h2>Sélectionnez votre choix</h2>
                <MoviesResults
                    placeholder=""
                    fluid
                    selection
                    options={options}
                    onChange={(e, {value}) => setId(value)}
                />
                {id === '' ? ('') : (
                <AddMovieForm 
                    selectMovie={selectMovie}
                    similarMovie={sm}
                    actors={actors}
                />
                )}
            </div> */}
        </div>
    );
};

export default AddMovie;