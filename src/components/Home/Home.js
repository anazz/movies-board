import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-section">
            <div className="row app-main-title">
                <div className="col-12 app-main-title">
                    <h1>Movie Board</h1>
                </div>
            </div>
            <div className="row">
                <div className="col app-description">
                    <p>Un site pour une bibliothéque de films personnalisée</p>
                </div>
            </div>
        </div>
    );
};

export default Home;