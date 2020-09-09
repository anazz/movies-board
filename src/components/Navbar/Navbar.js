import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
            <div className="navbar">
                <ul>
                        <div className="navbar-left">
                            <span>MOVIES BOARD</span>
                        </div>
                        <div className="navbar-right"> 
                            <div>
                                <li> 
                                    <Link to="/">HOME</Link>
                                </li>
                            </div>
                            <div>
                                <li><span class="slash">/</span>
                                    <Link to="/movies">Bibliothèque de films</Link>
                                </li>
                                <div className="bar"></div>
                            </div>
                            <div>
                                <li><span class="slash">/</span>
                                    <Link to="/movie">Le film selectionné</Link>
                                </li>
                                <div className="bar"></div>
                            </div>
                            <div>
                                <li><span class="slash">/</span>
                                    <Link to="/add">Ajouter un film</Link>
                                </li>
                                <div className="bar"></div>
                            </div>
                            <div>
                                <li><span class="slash">/</span>
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