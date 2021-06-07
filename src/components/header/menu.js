import React from 'react';

export default function Menu(props){
    
    return (
        <div className="header-menu">
            <button class="drop-button">Menu</button>
            <ul className="menu-nav">
                <li className="nav-li">Projects</li>
                <li className="nav-li">Contact</li>
            </ul>
        </div>
    );
}
