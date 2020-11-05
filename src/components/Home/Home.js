import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
    return (
        <div className="home-section">
            <div className="fluid-grid">
                <div className="row">
                    <div className="bg-wrapper">
                        <div className="bg">
                            <img src="./home-background.png" alt="movie poster" className="bg-poster" />
                            <div className="bg-layer"></div> 
                        </div>            
                    </div>
                    <div className="app-main-title">
                        <div className="app-main-title">
                            <h1>Movies Board</h1>
                        </div>
                    </div>
                    <div className="col app-description">
                        <Link to="/movies">
                            <p className="movies-link">Un site pour une bibliothéque de films personnalisée</p>
                        </Link>    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;