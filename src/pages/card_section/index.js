import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Cards from '../../components/card';
import './index.css';

export default function CardSection(props){

    return (
        <>
            <Header />
            <main className="section-container">
                <h1>Posts</h1>
                <div className="card-section">
                    <Cards />
                </div>
            </main>
            <Footer />
        </>
    );
}

