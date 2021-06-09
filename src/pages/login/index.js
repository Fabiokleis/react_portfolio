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
            
                <form className="signin-form">
                    
                    
                    <label htmtFor="email"  className="signin-label">Email address</label>
                    <input name="email" id="email"className="signin-input" type="email"></input>
                    <label htmlFor="password" className="signin-label">Password</label>
                    <input name="password" id="password" className="signin-input" type="password"></input>
                    <button className="signin-btn" type="">Sign in</button>
                </form>
                
            </div>
            <Footer />
        </>
    );
}