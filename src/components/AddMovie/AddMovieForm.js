import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import './AddMovie.scss';

const AddMovieForm = (props) => {

    const movieID = props.movie.id;
    const [actors, setActors] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [movies, setMovies] = useState({
        title: "",
        release_date: "",
        categories: [],
        description: "",
        poster: "",
        backdrop: "",
    });

    /* QUERY FOR THE MOVIE CAST & SIMILAR MOVIES */

    const API_KEY = process.env.REACT_APP_API_KEY;
    const base_url = `https://api.themoviedb.org/3`;

    useEffect(() => {
        axios.get(`${base_url}/movie/${movieID}?api_key=${API_KEY}&language=en-US&page=1`)
            .then((response) => {
            setMovies({
                id: response.data.id,
                title: response.data.title,
                release_date: response.data.release_date,
                categories: response.data.genres,
                description: response.data.overview,
                poster: `https://image.tmdb.org/t/p/w342${response.data.poster_path}`,
                backdrop: `https://image.tmdb.org/t/p/w342${response.data.backdrop_path}`,
            });
            // console.log(response.data, movieData.categories);
        }).catch((error) => {
            console.log(error);
        });  

        axios.get(`${base_url}/movie/${movieID}/credits?api_key=${API_KEY}`)
        .then((r) => {
            // console.log(r.data.cast.slice(0, 3));
            setActors(r.data.cast.slice(0, 3));
        }).catch((error) => {
            console.log(error);
        });

        axios.get(`${base_url}/movie/${movieID}/similar?api_key=${API_KEY}&language=en-US&page=1`)
        .then((r) => {
            // console.log(r.data.results.slice(0, 3));    
            setSimilarMovies(r.data.results.slice(0, 3));
        }).catch((error) => {
            console.log(error);
        });  
    }, [base_url, movieID]);
    
    const history = useHistory();
    const imgUrl = "http://image.tmdb.org/t/p/w342";

    const actorsData = actors.map(item => {
        return ({
                name: item.name,
                photo: imgUrl + item.profile_path,
                character: item.character
            }
        )
    });
    const similarMoviesData = similarMovies.map(item => {
        return ({
                title: item.title,
                poster: imgUrl + item.poster_path,
                release_date: item.release_date
            }
        )
    });
    
    // console.log(similarMoviesData);

    /* FORM */

    const formData = {
        title: movies.title,
        release_date: movies.release_date,
        categories: movies.categories.map(c => c.name),
        description: movies.description,
        poster: movies.poster,
        backdrop: movies.backdrop,
        actors: actorsData,
        similar_movies: similarMoviesData,
        id: movies.id
    };

    const LOCAL_URL = "http://localhost:3000/movies";

	const handleSubmit = (event) => {
		event.preventDefault();
        console.log(formData);
        axios.post(LOCAL_URL, formData,
        {
           headers: {
            'Content-Type': 'application/json',
           } 
        })
        .then(response => {console.log(response)})
        .catch((error) => console.log(error) );
        history.push('/');
        // setRedirectTo('/movies');
    };
    
	return (
        <div className={!props.showForm ? "form-wrapper" : "form-wrapper--active"}>
            <form onSubmit={handleSubmit}>
                {/* MOVIE */}
                <div className="form-top-wrapper">
                    {/* movie title */}
                    <div className="title-input-wrapper">
                    <h4>Title</h4>
                        <div className="title-input">
                            <input
                            className=""
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            placeholder=""
                            required
                            />
                        </div>
                    </div>
                    {/* movie release date */}
                    <div className="release-date-input-wrapper">
                        <h4>Release Date</h4>
                        <div className="release-date-input">
                            <input
                            className=""
                            type="text"
                            id="release-date"
                            name="release_date"
                            value={formData.release_date}
                            placeholder=""
                            />
                        </div>
                    </div>
                </div>
                <div className="form-description-wrapper">
                    {/* movie description */}
                    <div className="description-input-wrapper">
                    <h4>Synopsis</h4>
                    <textarea
                    className=""
                    rows="3"
                    cols="90"
                    id="description"
                    name="description"
                    value={formData.description}
                    placeholder=""
                    readOnly
                    />
                    </div>
                </div>
                <div className="form-bottom-wrapper"> 
                    {/* movie categories */}
                    <div className="form-categories">
                        <h4>Categories</h4>
                        <ul className="categories-list">
                           <li key="">
                                <label htmlFor="categories">Name</label>
                                <input
                                className=""
                                type="text"
                                id="categories"
                                name="categories"
                                value={formData.categories}
                                placeholder=""
                                />
                            </li>
                        </ul>   
                    </div>
                    {/* ACTORS */}
                    <div className="form-actors">
                        <h4>Actors</h4>
                        <ul className="actors-list">
                        {actors.map(a => (
                            <li key={a.id}>
                                {/* actors name */}
                                <label htmlFor="actorName">Name</label>
                                <input
                                className=""
                                type="text"
                                id="actor-name"
                                name="actors"
                                value={a.name}
                                placeholder=""
                                />
                                {/* actors character */}
                                <label htmlFor="actorCharacter">Characters</label>
                                <input
                                className=""
                                type="text"
                                id="actor-character"
                                name="actors"
                                value={a.character}
                                placeholder=""
                                />
                            </li>
                            ))}
                        </ul>
                    </div>
                    {/* SIMILAR MOVIES */}
                    <div className="form-similar-movies">
                        <h4>Similar Movies</h4>
                        <ul className="similar-movies-list">
                        {similarMovies.map(sm => (
                            <li key={sm.id}>
                                {/* similar movies title */}
                                <label htmlFor="similarMovieTitle">Title</label>
                                <input
                                className=""
                                type="text"
                                id="similar-movie-title"
                                name="similar_movies"
                                value={sm.title}
                                placeholder=""
                                />
                                {/* similar movies release_date */}
                                <label htmlFor="similarMovieReleaseDate">Release Date</label>
                                <input
                                className=""
                                type="text"
                                id="similar-movie-release-date"
                                name="similar_movies"
                                value={sm.release_date}
                                placeholder=""
                                />
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
};

export default AddMovieForm;
