import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import AddMovieForm from './AddMovieForm';
import './AddMovie.scss';


const MoviesResults = (props) => {
	const id = props.movie.id;
	const [showForm, setShowForm] = useState(false);

	const onToggleForm = () => {
		setShowForm(!showForm);
	}

	/* LOAD FORM */

	// const listElement = document.querySelector(".movie-results-list");
	// const listID = listElement.getAttribute("key");
	// const handleClick = (event) => {
	// 	const movieForm = document.getElementById("add-form-main-wrapper");
	// 	return movieForm.style.display = "block";
	// };

	    // QUERIES FOR THE REST

		// const movieID = props.movie.id;
		// const [actors, setActors] = useState([]);
		// const [similarMovies, setSimilarMovies] = useState([]);
		// const [movies, setMovies] = useState({
		// 	title: "",
		// 	release_date: "",
		// 	categories: [],
		// 	description: "",
		// 	poster: "",
		// 	backdrop: "",
		// });
	
		/* QUERY FOR THE MOVIE CAST & SIMILAR MOVIES */

	// 	const API_KEY = process.env.REACT_APP_API_KEY;
   	// 	const base_url = `https://api.themoviedb.org/3`;

	// 	useEffect(() => {
	// 	axios.get(`${base_url}/movie/${movieID}?api_key=${API_KEY}&language=en-US&page=1`)
	// 		.then((response) => {
	// 		setMovies({
	// 			id: response.data.id,
	// 			title: response.data.title,
	// 			release_date: response.data.release_date,
	// 			categories: response.data.genres,
	// 			description: response.data.overview,
	// 			poster: `https://image.tmdb.org/t/p/w342${response.data.poster_path}`,
	// 			backdrop: `https://image.tmdb.org/t/p/w342${response.data.backdrop_path}`,
	// 		});
	// 		// console.log(response.data, movieData.categories);
	// 	}).catch((error) => {
	// 		console.log(error);
	// 	});  

	// 	axios.get(`${base_url}/movie/${movieID}/credits?api_key=${API_KEY}`)
	// 	.then((r) => {
	// 	//  console.log(r.data.cast.slice(0, 2));
	// 		setActors(r.data.cast.slice(0, 3));
	// 	}).catch((error) => {
	// 		console.log(error);
	// 	});  

	// 	axios.get(`${base_url}/movie/${movieID}/similar?api_key=${API_KEY}&language=en-US&page=1`)
	// 	.then((r) => {
	// 	//  console.log(r.data.results.slice(0, 3));    
	// 		setSimilarMovies(r.data.results.slice(0, 3));
	// 	}).catch((error) => {
	// 		console.log(error);
	// 	});  
	// });
   
	return (
		<div className="add-form-results">
			<div className="add-form-results-wrapper">
				<ul className="movies-list">
					<li key={id} className="movie-results-list">
						<a href="#form" className="list-link" onClick={onToggleForm}>
							<h3>{props.movie.title}</h3>
							<span className="release_date">{props.movie.release_date}</span>
						</a>
					</li>
				</ul>
			</div>
			<AddMovieForm
				// className={showForm ? "add-movie-form-active" : "add-movie-form"}
				setShowForm={setShowForm}
				showForm={showForm}
				key={id}
				id="form"
				movie={props.movie}
			/>
		</div>
		);
};

export default MoviesResults;