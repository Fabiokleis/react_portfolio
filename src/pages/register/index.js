import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Signup(props){

    return (
        <>
            <Header show={false} />
            <div className="signup-section">
                <h1>Sign up section</h1>
            </div>
            <Footer />
        </>
    );
}
