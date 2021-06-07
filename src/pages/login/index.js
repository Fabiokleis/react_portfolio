import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Signin(props){

    return (
        <>
            <Header show={false} />
            <div className="signin-section">
                <h1>sign in section</h1>
            </div>
            <Footer />
        </>
    );
}
