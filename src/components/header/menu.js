import React from 'react';
import {Link} from 'react-router-dom';
import home from './home.svg';

export default function Menu(props){

    return (
        <div className="header-menu">
            <div className="menu-wrapper">
                <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>
                    <img src={home} alt="home" className="drop-button" />
                </Link>
                <img className="arrow" alt="arrow-down" />
                <ul className="menu-nav">
                    <Link to="/projects" style={{ textDecoration: 'none', color: 'white'}}>
                        <li className="nav-li">Projects</li>
                    </Link>
                    <Link to="/posts" style={{ textDecoration: 'none', color: 'white'}}>
                        <li className="nav-li">Posts</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}
