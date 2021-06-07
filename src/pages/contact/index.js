import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Contact(props){

    return (
        <>
            <Header show={true} />
            <div className="contact">
                <ul className="contact-list">
                    <li>Github</li>
                </ul>

            </div>
            <Footer />
        </>
    );

}
