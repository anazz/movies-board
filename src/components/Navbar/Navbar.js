import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
                <ul>
                    <li>
                        <Link to="/movies">Library</Link>
                    </li>
                    <li>
                        <Link to="/movie">Selected Movie</Link>
                    </li>
                    <li>
                        <Link to="/add">Add to Library</Link>
                    </li>
                    <li>
                        <Link to="/change">Change movie info</Link>
                    </li>
                </ul>
        </div>
    );
}

export default Navbar;