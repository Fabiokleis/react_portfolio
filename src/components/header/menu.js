import React from 'react';
import {Link} from 'react-router-dom';


export default function Menu(props){

    return (
        <div className="header-menu">
            <div className="menu-wrapper">
                <button className="drop-button"><Link to="/" style={{ textDecoration: 'none', color: 'white'}}>Menu </Link></button>
                <img className="arrow" src="" alt="arrow-down" />
                <ul className="menu-nav">
                    <li className="nav-li">
                        <Link to="/projects" style={{ textDecoration: 'none', color: 'white'}}>Projects</Link>
                    </li>
                    <li className="nav-li">
                        <Link to="/posts" style={{ textDecoration: 'none', color: 'white'}}>Posts</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
