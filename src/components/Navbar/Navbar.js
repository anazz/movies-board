import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
            <div className="navbar">
                <ul>
                    <div>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        {/* <div className="bar"></div> */}
                    </div>
                    <div>
                        <li>
                            <Link to="/movies">Bibliothèque de films</Link>
                        </li>
                        <div className="bar"></div>
                    </div>
                    <div>
                        <li>
                            <Link to="/movie">Le film selectionné</Link>
                        </li>
                        <div className="bar"></div>
                    </div>
                    <div>
                        <li>
                            <Link to="/add">Ajouter un film</Link>
                        </li>
                        <div className="bar"></div>
                    </div>
                    <div>
                        <li>
                            <Link to="/change">Modifier un film</Link>
                        </li>
                        <div className="bar"></div>
                    </div>
                </ul>
            </div>  
    );
}

export default Navbar;