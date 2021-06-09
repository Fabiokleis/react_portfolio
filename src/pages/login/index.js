import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

import './index.css';

export default function Signin(props){

    return (
        <>
            <Header show={false} />
            <h1 className="title-center">loggin your account</h1>
            
            <div className="signin-section">
            
                <form method="POST" action="http://127.0.0.1:3001/users/login" className="signin-form">
                    
                    
                    <label className="signin-label">Email address</label>
                    <input name="email" id="email"className="signin-input" type="email"></input>
                    <label className="signin-label">Password</label>
                    <input name="password" id="password" className="signin-input" type="password"></input>
                    <button className="signin-btn" type="submit">Sign in</button>
                </form>
                
            </div>
            <Footer />
        </>
    );
}