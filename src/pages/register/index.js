import React from 'react';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';


export default function Signup(props){

    return (
        <>
            <Header show={false} />
            <h1 className="title-center">Create your account</h1>
            <div className="signup-section">
            
                <form className="signup-form">
                    
                    
                    <label rel="name" className="signup-label">Username</label>
                    <input name="name" id="name" className="signup-input" type="text"></input>
                    <label for="email"  className="signup-label">Email address</label>
                    <input name="email" id="email"className="signup-input" type="email"></input>
                    <label for="password" className="signup-label">Password</label>
                    <input name="password" id="password" className="signup-input" type="password"></input>
                    <button className="signup-btn" type="">Sign up</button>
                </form>
                
            </div>
            <Footer />
        </>
    );
}
