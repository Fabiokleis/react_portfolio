import React from 'react';
import git from './github.svg';
import insta from './instagram.svg';
import tt from './twitter.svg';
import './index.css';

export default function Footer(props){

    return (
        
        
        <footer className="footer">
            
            <ul className="footer-links">
                <li className="footer-li">
                    <a href="https://github.com/Fabiokleis" target="_blank" rel="noreferrer"> 
                        <img src={git} alt="github" title="github/Fabiokleis" />
                    </a>
                </li>
                <li className="footer-li">
                    <a href="https://twitter.com/FabioKleis" target="_blank" rel="noreferrer">
                        <img src={tt} alt="twitter" title="twitter/Fabiokleis" />
                    </a>
                </li>
                <li className="footer-li">
                    <a href="https://instagram.com/fabiokleis" target="_blank" rel="noreferrer">
                        <img src={insta} alt="instagram" title="instagram/fabiokleis" />
                    </a>
                </li>
            </ul>

        </footer>
        

    );
}
