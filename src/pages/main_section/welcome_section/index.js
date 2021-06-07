import React  from 'react';
import './index.css';
import SubscribeForm from '../../../components/subscribe_form';

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
               
                    <p>I am
                    developer and linux system administration enthusiast. Learning Nodejs, Postgresql, Mongodb and React.
                    Visit my github!
                    </p>

                </div>
                <SubscribeForm />
            
        </div>
    );
}
