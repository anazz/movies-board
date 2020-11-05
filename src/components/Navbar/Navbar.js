import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
            <div className="navbar">
                <ul>
                    <div className="navbar-left">
                        <Link className="home-link" to="/"><span>MOVIES BOARD</span></Link>
                    </div>
                    <div className="navbar-right"> 
                        {/* <div>
                            <li> 
                                <Link to="/">HOME</Link>
                            </li>
                        </div> */}
                        <div>
                            <li>
                                <Link to="/movies">Bibliothèque de films</Link>
                            </li>
                            <div className="bar"></div>
                        </div>
                        {/* <div>
                            <li><span className="slash">/</span>
                                <Link to="/movie">Le film selectionné</Link>
                            </li>
                            <div className="bar"></div>
                        </div> */}
                        <div>
                            <li><span className="slash">/</span>
                                <Link to="/add">Ajouter un film</Link>
                            </li>
                            <div className="bar"></div>
                        </div>
                        <div>
                            <li><span className="slash">/</span>
                                <Link to="/edit">Modifier un film</Link>
                            </li>
                            <div className="bar"></div>
                        </div>
                    </div>
                </ul>
            </div>  
    );
}

export default Navbar;