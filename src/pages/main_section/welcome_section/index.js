import React  from 'react';
import './index.css';

export default function WelcomeSection(props){

    return (
        <div className="welcome-section">
            <div className="welcome-wrapper">   
                <div className="static-text">$ _</div>
                <ul className="whoami">
                        <li><span>whoami</span></li>
                </ul>
            </div>
                <div className="welcome-text">
                    <p>Application still under development, in the near future come again!</p>
                    <p>
                    developer and linux system administration enthusiast. Learning Nodejs, Postgresql, Mongodb and React;
                    visit my github!
                    </p>
                </div>
            
        </div>
    );
}
