import React from 'react';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';


export default function Signup(props){

    function prevent(e){
        e.preventDefault();
        console.log(e);
    }
    return (
        <>
            <Header show={false} />
            <h1 className="title-center">Create your account</h1>
            <div className="signup-section">
            
                <form method="POST" action="http://127.0.0.1:3001/users" className="signup-form">
                    <label  className="signup-label">Username</label>
                    <input name="name" id="name" className="signup-input" type="text"></input>
                    <label  className="signup-label">Email address</label>
                    <input name="email" id="email"className="signup-input" type="email"></input>
                    <label className="signup-label">Password</label>
                    <input name="password" id="password" className="signup-input" type="password"></input>
                    <button onClick={prevent} className="signup-btn" type="submit">Sign up</button>
                </form>
                
            </div>
            <Footer />
        </>
    );
}
