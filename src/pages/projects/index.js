import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Projects(props){

    return (
        <>
            <Header show={true} />
            <div className="projects-section">
                <h1>projects</h1>
            </div>
            <Footer />
        </>
    );
}
