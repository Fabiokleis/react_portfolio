import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

export default function Footer(props){

    return (
        <div className="container">
            
            <div className="footer">
                
                <ul className="footer-links">
                    <li className="footer-li">
                        <Link to="https://github.com/Fabiokleis" style={{ textDecoration: 'none', color: 'white'}}>GitHub</Link>
                    </li>
                    <li className="footer-li">
                       <Link to="https://twitter.com/FabioKleis" style={{ textDecoration: 'none', color: 'white'}}>Twitter</Link>
                    </li>
                    <li className="footer-li">
                        <Link to="https://instagram.com/fabiokleis" style={{ textDecoration: 'none', color: 'white'}}>Instagram</Link>
                    </li>
                </ul>

            </div>
            
        </div>
    );
}
