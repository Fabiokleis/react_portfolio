import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function CardSection(props){
    
    return (
        <>
            <Header show={true} />
            <div className="card-section">
                <h1>Card title</h1>
                <p>Card description</p>
            </div>
            <Footer />
        </>
    );
}

