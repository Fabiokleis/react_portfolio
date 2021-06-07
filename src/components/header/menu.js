import React from 'react';
import {Link} from 'react-router-dom';

export default function Menu(props){
    
    return (
        <div className="header-menu">
            <button class="drop-button"><Link to="/" style={{ textDecoration: 'none', color: 'white'}}>*_ Menu</Link></button>
            <ul className="menu-nav">
               <li className="nav-li">
                    <Link to="/projects" style={{ textDecoration: 'none', color: 'white'}}>Projects</Link>
                </li>
                <li className="nav-li">
                    <Link to="/contact" style={{ textDecoration: 'none', color: 'white'}}>Contact</Link>
                </li>
            </ul>
        </div>
    );
}
