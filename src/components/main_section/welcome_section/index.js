import React,{useState, useEffect} from 'react';
import './index.css';

export default function WelcomeSection(props){
    const [whoami, setWhoami] = useState('');
    useEffect(() => {
        setWhoami('');
        const frase = '$_ whoami';
        const interval = setInterval(gen => {
            const {value, done} = gen.next();
            if(done){
                clearInterval(interval);
            }else{
                setWhoami(w => w + value);
            }

        }, 100, frase[Symbol.iterator]());


    }, []);


    return (
        <div className="welcome-section">
            <h1 className="whoami">
               {whoami}
            </h1>
            <div className="welcome-text">
                <p>
                    developer and linux system administration enthusiast. Learning Nodejs, Postgresql, Mongodb and React;
                    visit my github!
                </p>
            </div>
        </div>
    );
}
