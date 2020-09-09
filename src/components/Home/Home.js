import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-section">
            <div className="bg-wrapper">
                    <div className="bg">
                        <img src="./movie-posters.jpeg" alt="movie poster" className="bg-poster" />
                        <div className="bg-layer"></div> 
                    </div>              
            </div>
            <div className="row app-main-title">
                <div className="col-12 app-main-title">
                    <h1>Movies Board</h1>
                </div>
            </div>
            <div className="row">
                <div className="col app-description">
                <Link to="/movies">
                    <p className="movies-link">Un site pour une bibliothéque de films personnalisée</p>
                </Link>    
                </div>
            </div>
        </div>
    );
};

export default Home;