import React from 'react';
import './index.css';

export default function Footer(props){

    return (
        <div className="container">
            
            <div className="footer">
                
                <ul className="footer-links">
                    <li className="footer-li">GitHub</li>
                    <li className="footer-li">Twitter</li>
                    <li className="footer-li">Instagram</li>
                </ul>
                
                <ul className="footer-links">
                    <li className="footer-li">...</li>
                    <li className="footer-li">stackoverflow</li>
                        <li className="footer-li">...</li>
                </ul>
            </div>
            
        </div>
    );
}
