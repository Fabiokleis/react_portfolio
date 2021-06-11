import React from 'react';
import './index.css';

export default function Footer(props){

    return (
        
        
        <footer className="footer">
            
            <ul className="footer-links">
                <li className="footer-li">
                    <a href="https://github.com/Fabiokleis" style={{ textDecoration: 'none', color: 'white'}}>GitHub</a>
                </li>
                <li className="footer-li">
                    <a href="https://twitter.com/FabioKleis" style={{ textDecoration: 'none', color: 'white'}}>Twitter</a>
                </li>
                <li className="footer-li">
                    <a href="https://instagram.com/fabiokleis" style={{ textDecoration: 'none', color: 'white'}}>Instagram</a>
                </li>
            </ul>

        </footer>
        

    );
}
